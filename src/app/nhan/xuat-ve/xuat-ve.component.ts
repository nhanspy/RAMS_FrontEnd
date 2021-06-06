import { Component, OnInit } from '@angular/core';
import {DatVeService} from '../service/dat-ve.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {XemChiTietChuyenXeService} from '../service/xem-chi-tiet-chuyen-xe.service';
import {ChuyenXe} from '../Models/ChuyenXe.class';
import {AuthService} from '../service/auth.service';
import {TokenStorageService} from '../service/token-storage.service';
import {XuatVeService} from '../service/xuat-ve.service';
import Ghe from '../Models/Ghe.class';
import {User} from '../Models/User.class';

@Component({
  selector: 'app-xuat-ve',
  templateUrl: './xuat-ve.component.html',
  styleUrls: ['./xuat-ve.component.css']
})
export class XuatVeComponent implements OnInit {

  constructor(private xuatVeService: XuatVeService, private datVeService: DatVeService, private router: Router, private _location: Location, private xemChiTietChuyenXeService: XemChiTietChuyenXeService, private authService: AuthService, private tokenStorage: TokenStorageService) { }

  // @ts-ignore
  maVe: String[];
  // @ts-ignore
  gheDaChons: Ghe[];
  // @ts-ignore
  strMaGhe: String[] = [];
  ghes: Ghe[] = [];
  ghesTang1: Ghe[] = [];
  ghesTang2: Ghe[] = [];
  newGhesTang1: Ghe[] = [];
  newGhesTang2: Ghe[] = [];
  // @ts-ignore
  chuyenXe: ChuyenXe;
  isLoggedIn = false;
  // @ts-ignore
  currentUser: any;
  errorMessage = '';
  roles: string[] = [];
  tongGheDaChon = 0;
  strGheDaChon = '';
  tongTien = 0;

  ngOnInit(): void {
    this.init();
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.currentUser = this.tokenStorage.getUser();
      console.log(this.currentUser);
      const data = {
        mail: this.currentUser.email,
        ten: this.currentUser.username,
        soDienThoai: this.currentUser.soDienThoai,
        ghe: this.strGheDaChon,
        maVe: this.maVe.toString(),
        thoiGian: this.chuyenXe.thoiGian,
        tong: this.tongTien
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
    } else {
      this.router.navigate(['dangnhap']);
    }
  }

  private init(): void {
    if (localStorage.getItem('maVeChuaThanhToan')) {
      // @ts-ignore
      this.maVe = JSON.parse(localStorage.getItem('maVeChuaThanhToan'));
      console.log(this.maVe);
      this.updateVe();
    }
    if (localStorage.getItem('gheDaChons')) {
      // @ts-ignore
      this.gheDaChons = JSON.parse(localStorage.getItem('gheDaChons'));
      this.gheDaChons.forEach(item => {
        // @ts-ignore
        this.strMaGhe.push(item.maGhe);
        this.tongGheDaChon += 1;
        this.strGheDaChon += ((item.tang === 1) ? 'A' : 'B') + item.soGhe + ', ';
        // @ts-ignore
        this.tongTien += item.gia;
      });
      // @ts-ignore
      console.log(this.strMaGhe);
      this.strGheDaChon = this.strGheDaChon.substring(0, this.strGheDaChon.length - 2);
      this.updateGhe(this.strMaGhe);
    }
    if (localStorage.getItem('chuyenXe')) {
      // @ts-ignore
      this.chuyenXe = JSON.parse(localStorage.getItem('chuyenXe'));
      console.log(this.chuyenXe);
      // this.getGhe();
    }
    if (localStorage.getItem('ghes')) {
      // @ts-ignore
      this.ghes = JSON.parse(localStorage.getItem('ghes'));
    }
  }

  private updateVe() {
    this.datVeService.updateVeXe(this.maVe).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.error();
      }
    );
  }

  private updateGhe(strMaVe: String[]) {
    this.datVeService.updateGhe(strMaVe).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.error();
      }
    );
  }

}
