import { Component, OnInit } from '@angular/core';
import {DatVeService} from '../service/dat-ve.service';
import {VeXe} from '../Models/VeXe.class';
import {Router} from '@angular/router';
import {ChuyenXe} from '../Models/ChuyenXe.class';
import {Location} from '@angular/common';
import {AuthService} from '../service/auth.service';
import {TokenStorageService} from '../service/token-storage.service';
import Ghe from '../Models/Ghe.class';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
@Component({
  selector: 'app-dat-ve',
  templateUrl: './dat-ve.component.html',
  styleUrls: ['./dat-ve.component.css',  '../../../assets/nhan/css/css.css', '../../../assets/css/material-kit.css?v=2.1.1']
})
export class DatVeComponent implements OnInit {

  public payPalConfig?: IPayPalConfig;
  private showSuccess: boolean | undefined;
  // @ts-ignore
  price: number;
  maVe = 'mv02';
  isLoggedIn = false;
  currentUser: any;
  errorMessage = '';
  roles: string[] = [];
  // tslint:disable-next-line:variable-name
  constructor(private datVeService: DatVeService,
              private router: Router,
              private _location: Location,
              private authService: AuthService,
              private tokenStorage: TokenStorageService
  ) {

    this.datVeService.getById(this.maVe).subscribe(
      data => {
        // console.log(data);
        this.veXe = data;
        this.price = this.veXe.giaTien;
      }, error => {
        console.log(error);
      }
    );
  }

  // @ts-ignore
  veXe: VeXe;
  request: any;
  veXes: VeXe[] = [];

  // @ts-ignore
  chuyenXe: ChuyenXe;
  // @ts-ignore
  gheDaChons: Ghe[];
  // @ts-ignore
  tongGheDaChon: number;
  // @ts-ignore
  tongTien: number;
  // @ts-ignore
  strGheDaChon: string;
  diemDi = '';
  // @ts-ignore
  arrStrMaVe : String[];

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.currentUser = this.tokenStorage.getUser();
      console.log(this.currentUser);
      // this.datVeService.sendMail(this.currentUser.email, 'thao ngu');
    } else {
      this.router.navigate(['dangnhap']);
    }


    if (localStorage.getItem('chuyenXe')) {
      // @ts-ignore
      this.chuyenXe = JSON.parse(localStorage.getItem('chuyenXe'));
    }
    if (localStorage.getItem('gheDaChons')) {
      // @ts-ignore
      this.gheDaChons = JSON.parse(localStorage.getItem('gheDaChons'));
    }
    if (localStorage.getItem('diemDi')) {
      // @ts-ignore
      this.diemDi = JSON.parse(localStorage.getItem('diemDi'));
      if (this.diemDi == ''){
        this.diemDi = this.chuyenXe.benDi.tenBen;
      }
    }
    this.setTongTien();
    this.initConfig();
  }

  private updateVe() {
    this.datVeService.updateVeXe(this.arrStrMaVe).subscribe(
      data => {
        console.log(data);
        console.log("update ve thanh cong");
      }, error => {
        console.error();
      }
    );
  }

  setTongTien(): void{
    this.tongGheDaChon = 0;
    this.tongTien = 0;
    this.strGheDaChon = '';
    this.gheDaChons.forEach(
      item => {
        if (item.daChon && item.email === this.currentUser.email) {
          this.tongGheDaChon += 1;
          this.strGheDaChon += ((item.tang === 1) ? 'A' : 'B') + item.soGhe + ', ';
          // @ts-ignore
          this.tongTien += item.gia;
        }
      }
    );
    this.strGheDaChon = this.strGheDaChon.substring(0, this.strGheDaChon.length - 2);
  }

  // tslint:disable-next-line:typedef
  thanhToan(){
    this.veXe.chuyenXe = this.chuyenXe;
    this.veXe.thoiGian = this.chuyenXe.thoiGian;
    this.veXe.giaTien = this.tongTien;
    this.veXe.ghe = this.gheDaChons;
    console.log(this.veXe);
    this.datVeService.postVeXe(this.veXe).subscribe(
      data => {
        console.log(data);
        console.log("post ve thanh ccong");
        if (data) {
          // localStorage.setItem('maVeChuaThanhToan', JSON.stringify(data));
          this.arrStrMaVe = data;
          this.updateVe();
          this.updateGhe(this.arrStrMaVe);
        }
        // window.location.href = 'http://localhost:8080/' + this.tongTien;
      },
      error => {
        console.log(error);
      }
    );
  }
  backClicked(): void {
    this._location.back();
  }
  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }

  private initConfig(): void {
    const cost = this.tongTien * 0.000043 + '';
    console.log(cost);
    console.log(this.tongTien);
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'sb',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: cost,
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: cost
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'USD',
                  value: cost,
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (callBackData, actions) => {
        this.thanhToan();
        console.log('onApprove - transaction was approved, but not authorized', callBackData, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      this.sendMail();

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);

      },
    };
  }
  private updateGhe(strMaVe: String[]) {
    console.log(strMaVe);
    console.log('tien hanh update ghe');
    this.datVeService.updateGhe(strMaVe).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.error();
      }
    );
  }

  private sendMail(){
    const data = {
      mail: this.currentUser.email,
      ten: this.currentUser.username,
      soDienThoai: this.currentUser.soDienThoai,
      ghe: this.strGheDaChon,
      maVe: this.maVe.toString(),
      thoiGian: this.chuyenXe.thoiGian,
      tongTien: this.tongTien,
      tongGhe: this.tongGheDaChon
    }

    // this.datVeService.sendMail(this.currentUser.email, 'thao_ngu').subscribe(
    //   data => {
    //     console.log(data);
    //   }, error => {
    //     console.log(error);
    //   }
    // );
    this.datVeService.sendMailPost(data).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

}
