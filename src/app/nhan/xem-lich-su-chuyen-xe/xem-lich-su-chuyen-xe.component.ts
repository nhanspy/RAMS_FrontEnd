import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ChuyenXe} from '../Models/ChuyenXe.class';
import {TinhThanh} from '../Models/TinhThanh.class';
import {Ben} from '../Models/Ben.class';
import {NhaXe} from '../Models/NhaXe.class';
import {TrangThaiGhe} from '../Models/TrangThaiGhe.class';
import Ghe from '../Models/Ghe.class';
import {map} from 'rxjs/operators';
import {XemChiTietChuyenXeService} from '../service/xem-chi-tiet-chuyen-xe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {GheFirebaseService} from '../service/ghe-firebase.service';
import {TokenStorageService} from '../service/token-storage.service';
import {XemLichSuChuyenXeService} from '../service/xem-lich-su-chuyen-xe.service';
import {User} from '../Models/User.class';
// import {Ghe} from '../Models/Ghe.class';

@Component({
  selector: 'app-xem-lich-su-chuyen-xe',
  templateUrl: './xem-lich-su-chuyen-xe.component.html',
  styleUrls: ['./xem-lich-su-chuyen-xe.component.css', '../../../assets/css/material-kit.css?v=2.1.1', '../../../assets/nhan/css/css.css']
})
export class XemLichSuChuyenXeComponent implements OnInit, OnChanges, OnDestroy {

  constructor(private xemLichSuChuyenXeService: XemLichSuChuyenXeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private _location: Location,
              private gheFirebaseService: GheFirebaseService,
              private tokenStorage: TokenStorageService
  ) {
  }

// @ts-ignore
  chuyenXe: ChuyenXe;
  maChuyenXe = 'mcx01';
  chuyenXes: ChuyenXe[] = [];
  chuyenXesRoot: ChuyenXe[] = [];
  nhaXes: NhaXe[] = [];
  // @ts-ignore
  ngay = '2021-04-08';
  // @ts-ignore
  nhaXe: NhaXe;
  trangThaiGhes: TrangThaiGhe[] = [];
  // @ts-ignore
  benDi: Ben;
  // @ts-ignore
  benDen: Ben;
  nhaXesTheoBenDiBenDen: NhaXe[] = [];
  ghesTang1: Ghe[] = [];
  ghesTang2: Ghe[] = [];
  newGhesTang1: Ghe[][] = [];
  newGhesTang2: Ghe[][] = [];
  gheDaChons: Ghe[] = [];
  ghes: Ghe[] = [];
  ghesTheoDb: Ghe[] = [];
  currentGhe?: Ghe;
  currentIndex = -1;
  message = '';
  isLoggedIn = false;
  currentUser: any;
  errorMessage = '';
  roles: string[] = [];
  // @ts-ignore
  veXes: VeXe[];
  // @ts-ignore
  user: User;

  ngOnInit(): void {
    // @ts-ignore
    this.user = {
      username : '',
      email : '',
      soDienThoai: ''
    }

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.currentUser = this.tokenStorage.getUser();
      console.log(this.currentUser);
    } else {
      this.router.navigate(['dangnhap']);
    }
    this.init(); //get data from search of Trong
    this.getTrangThaiGhe();// Get TrangThaiGhe
    // this.getGheTheoDB();// update data from API to Firebase
    this.getGheKhongFirebase();
    this.getVeXe();
    // this.retrieveGhe();
    // this.getGheKhongFirebase();
    // this.ngay = '2021-04-08';
    this.maChuyenXe = 'mcx01';
    console.log('=============');
  }

  // thay ?????i t??n tr???ng th??i gh???
  // thay ?????i tr???ng th??i ch???n gh???
  // t??nh t???ng ti???n
  chonGhe(ghe: Ghe): void{
    if (this.veXes){
      this.veXes.forEach(
        item => {
          if (item.ghe.maGhe.includes(ghe.maGhe)){
            console.log('--get user user---');
            this.user = item.userNguoiDung;
            console.log(this.user);
          }
        }
      )
    }
  }

  getVeXe(){
    this.xemLichSuChuyenXeService.getVeXe().subscribe(
      data => {
        this.veXes = data;
        console.log('--- get thanh cong Ve xe  ---');
      }, error => {
        console.log('//// khong get duoc ve xe ////');
      }
    );
  }

  getGheTheoDB():void {
    if (this.chuyenXes) {
      this.xemLichSuChuyenXeService.getGhe(this.chuyenXes[0].xe.maXe).subscribe(
        data => {
          this.ghesTheoDb = data;
          console.log("----- get ghe thanh cong -----");
          console.log(data);
          if (this.ghesTheoDb) {
            this.ghesTheoDb.forEach(ghe => {
              // ghe.email = this.currentUser.email;
              ghe.email = '';
              // @ts-ignore
              this.gheFirebaseService.update(ghe.maGhe, ghe)
            });
            this.refreshList();
          }
        }
      );
    }
    this.getGhe();
  }

  // get gh??? theo s?? ????? gi?????ng 2 t???ng
  getGhe(): void {
    //init
    this.gheDaChons = [];
    this.newGhesTang1 = [];
    this.newGhesTang2 = [];
    //l???y t???t c??? gh???
    //l???y gh??? ???? ch???n cho t??nh ti???n
    this.gheDaChons = this.ghes.slice().filter(
      item => {
        //set ???? ch???n cho gh???
        if (item.trangThaiGhe === 'mttg02'){
          item.daChon = true;
          return true;
        }
        return false;
      }
    );

    //l???y gh??? t???ng 1
    this.ghesTang1 = this.ghes.slice().filter(
      item => {
        return item.tang === 1;
      }
    );
    //l???y gh??? t???ng 2
    this.ghesTang2 = this.ghes.slice().filter(
      item => {
        return item.tang === 2;
      }
    );
    // S???p x???p gh???
    // @ts-ignore
    this.ghes.sort((a: Ghe, b: Ghe) => {
      // @ts-ignore
      return a.soGhe > b.soGhe;
    });
    // chuy???n s??? gh??? sang m???ng 2 chi???u t???i bi???n newGhesTang*
    while (this.ghesTang1.length) {
      // @ts-ignore
      this.newGhesTang1.push(this.ghesTang1.splice(0, 3));
    }
    while (this.ghesTang2.length) {
      // @ts-ignore
      this.newGhesTang2.push(this.ghesTang2.splice(0, 3));
    }
  }


  //l???y t???t c??? tr???ng th??i gh???
  private getTrangThaiGhe(): void {
    this.xemLichSuChuyenXeService.getTrangThaiGhe().subscribe(
      data => {
        this.trangThaiGhes = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  private init(): void {
    //Lay d??? li???u t??? trang t??m ki???m
    this.activatedRoute.queryParams.subscribe(
      data => {
        this.maChuyenXe = data.maChuyenXe;
      }
    );
    this.xemLichSuChuyenXeService.getChuyen(this.maChuyenXe).subscribe(
      data => {
        this.chuyenXe = data;
        console.log("---- get chuyen thanh cong ------");
        console.log(this.chuyenXe);
        this.getGheKhongFirebase();
      }, error => {
        console.log('////get chuyen xe bi loi/////////');
      }
    );
  }

  // get gh??? theo s?? ????? gi?????ng 2 t???ng
  getGheKhongFirebase(){
    this.gheDaChons = [];
    this.newGhesTang1 = [];
    this.newGhesTang2 = [];
    //l???y t???t c??? gh???
    if (this.chuyenXe) {
      this.xemLichSuChuyenXeService.getGhe(this.chuyenXe.xe.maXe).subscribe(
        data => {
          this.ghes = data;
          console.log("----Get ghe thanh cong----");
          console.log(data);
          //l???y gh??? ???? ch???n cho t??nh ti???n
          this.gheDaChons = this.ghes.slice().filter(
            item => {
              //set ???? ch???n cho gh???
              // @ts-ignore
              if (item.trangThaiGhe.maTrangThai === 'mttg02'){
                item.daChon = true;
                return true;
              }
              return false;
            }
          );

          //l???y gh??? t???ng 1
          this.ghesTang1 = this.ghes.slice().filter(
            item => {
              return item.tang === 1;
            }
          );
          //l???y gh??? t???ng 2
          this.ghesTang2 = this.ghes.slice().filter(
            item => {
              return item.tang === 2;
            }
          );
          // S???p x???p gh???
          // @ts-ignore
          this.ghes.sort((a: Ghe, b: Ghe) => {
            // @ts-ignore
            return a.soGhe > b.soGhe;
          });
          // chuy???n s??? gh??? sang m???ng 2 chi???u t???i bi???n newGhesTang*
          while (this.ghesTang1.length) {
            // @ts-ignore
            this.newGhesTang1.push(this.ghesTang1.splice(0, 3));
          }
          while (this.ghesTang2.length) {
            // @ts-ignore
            this.newGhesTang2.push(this.ghesTang2.splice(0, 3));
          }
        }, error => {
          console.log('//// lay ghe loi ////');
          console.log(error);
        }
      );
    }
  }

  refreshList(): void {
    // this.currentTutorial = undefined;
    this.currentGhe = undefined;
    this.currentIndex = -1;
    this.retrieveGhe();
    // this.updateGhe();
  }

  retrieveGhe(): void {
    this.gheFirebaseService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      // @ts-ignore
      this.ghes = data;
      this.getGhe();
    });
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.refreshGhe();
  }

  refreshGhe() {
    if (this.chuyenXes){
      this.chuyenXe = this.chuyenXes[0];
    } else {
      // @ts-ignore
      this.chuyenXe = new ChuyenXe();
    }
    console.log(this.chuyenXe);
    if (this.chuyenXe){
      console.log('update ghe');
      this.getGhe();
    } else {
      this.emptySoDo();
    }
  }

  emptySoDo() {
    this.gheDaChons = [];
    this.ghesTang1 = [];
    this.ghesTang2 = [];
    this.newGhesTang1 = [];
    this.newGhesTang2 = [];
  }

  private layDuLieuNeuCo() {
    //l???y d??? li???u t??? session n???u c??
    if (localStorage.getItem('chuyenXe')) {
      // @ts-ignore
      this.chuyenXe = JSON.parse(localStorage.getItem('chuyenXe'));
      console.log(this.chuyenXe);
    }
    if (localStorage.getItem('ghes')) {
      // @ts-ignore
      this.ghes = JSON.parse(localStorage.getItem('ghes'));
    }
    if (this.chuyenXe) this.getGhe();
  }

  ngOnDestroy(): void {
    // this.removeAllGhe();
  }
}
