import {AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {XemChiTietChuyenXeService} from '../service/xem-chi-tiet-chuyen-xe.service';
import {ChuyenXe} from '../Models/ChuyenXe.class';
import {TinhThanh} from '../Models/TinhThanh.class';
import {Ben} from '../Models/Ben.class';
import {NhaXe} from '../Models/NhaXe.class';
import {TrangThaiGhe} from '../Models/TrangThaiGhe.class';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {GheFirebaseService} from '../service/ghe-firebase.service';
import {map} from 'rxjs/operators';
import Ghe from '../Models/Ghe.class';

@Component({
  selector: 'app-xem-chi-tiet-chuyen-xe',
  templateUrl: './xem-chi-tiet-chuyen-xe.component.html',
  styleUrls: ['./xem-chi-tiet-chuyen-xe.component.css', '../../../assets/nhan/css/css.css', '../../../assets/css/material-kit.css?v=2.1.1']
})
export class XemChiTietChuyenXeComponent implements OnInit, OnChanges, OnDestroy {

  constructor(private xemChiTietChuyenXeService: XemChiTietChuyenXeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private _location: Location,
              private gheFirebaseService: GheFirebaseService
  ) {
  }

  // @ts-ignore
  chuyenXe: ChuyenXe;
  maChuyenXe = 'mcx01';

  // @ts-ignore
  tinhDi: TinhThanh;
  // @ts-ignore
  tinhDen: TinhThanh;
  bens: Ben[] = [];
  benDis: Ben[] = [];
  benDens: Ben[] = [];
  chuyenXes: ChuyenXe[] = [];
  chuyenXesRoot: ChuyenXe[] = [];
  chuyenXeTheoTinhs: ChuyenXe[] = [];
  chuyenXeTheoBenDiBenBenDens: ChuyenXe[] = [];
  chuyenXeTheoTinhVaNhaXes: ChuyenXe[] = [];
  nhaXes: NhaXe[] = [];
  // @ts-ignore
  ngay = '2021-04-08';
  // @ts-ignore
  nhaXe: NhaXe;
  trangThaiGhes: TrangThaiGhe[] = [];
  maTinhDi = 'mt01';
  maTinhDen = 'mt04';
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
  tongGheDaChon = 0;
  tongTien = 0;
  strGheDaChon = '';
  ghes: Ghe[] = [];
  ghesTheoDb: Ghe[] = [];
  currentGhe?: Ghe;
  currentIndex = -1;
  diemDi = '';
  message = '';

  ngOnInit(): void {
    this.init(); //get data from search of Trong
    this.getTinh();//Get Tinh form data of Trong
    this.getBen(); //Get Ben from data of Trong
    this.getChuyen();//Get Chuyen
    this.getNhaXe();//Get nha xe follow Tinh
    this.getTrangThaiGhe();// Get TrangThaiGhe
    this.getGheTheoDB();// update data from API to Firebase
    this.retrieveGhe();
    // this.ngay = '2021-04-08';
    this.maChuyenXe = 'mcx01';
    console.log('=============');
  }

  //load lại hết
  loadChuyenXe(){
    this.filterChuyenXeTheoBen();
    this.onChangeChuyenXeKhiChonNhaXe();
    this.onChangeTheoThoiGian();
  }

  // thay đổi tên trạng thái ghế
  // thay đổi trạng thái chọn ghế
  // tính tổng tiền
  chonGhe(ghe: Ghe): void{
    if (ghe.trangThaiGhe === 'mttg01') {
      ghe.trangThaiGhe = 'mttg02';
      ghe.daChon = true;
    } else {
      if (ghe.trangThaiGhe === 'mttg02') {
        ghe.trangThaiGhe = 'mttg01';
        ghe.daChon = false;
      }
    }
    const data = {
      maGhe: ghe.maGhe,
      gia: ghe.gia,
      trangThaiGhe: ghe.trangThaiGhe
    };
    if (ghe.key) {
      this.gheFirebaseService.update(ghe.key, data)
        .then(() => this.message = 'The ghe was updated successfully!')
        .catch(err => console.log(err));
    }
    this.setTongTien();
  }

  setTongTien(): void{
    this.tongGheDaChon = 0;
    this.tongTien = 0;
    this.strGheDaChon = '';
    this.ghes.forEach(
      item => {
        if (item.daChon) {
          this.tongGheDaChon += 1;
          this.strGheDaChon += ((item.tang === 1) ? 'A' : 'B') + item.soGhe + ', ';
          // @ts-ignore
          this.tongTien += item.gia;
        }
      }
    );
    this.strGheDaChon = this.strGheDaChon.substring(0, this.strGheDaChon.length - 2);
  }

  //Lấy tỉnh đi tỉnh đến theo mã tỉnh
  getTinh(): void{
    this.xemChiTietChuyenXeService.getTinhTheoMaTinh(this.maTinhDi).subscribe(
      data => {
        this.tinhDi = data;
      },
      error => {
        console.log(error);
      }
    );

    this.xemChiTietChuyenXeService.getTinhTheoMaTinh(this.maTinhDen).subscribe(
      data => {
        this.tinhDen = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  //lấy bến theo mã tỉnh
  getBen(): void {
    this.xemChiTietChuyenXeService.getBen().subscribe(data => {
      this.bens = data;
      this.benDis = this.bens.slice().filter(
        item => {
          return item.tinhThanh.maTinh === this.maTinhDi;
        }
      );
      this.benDens = this.bens.slice().filter(
        item => {
          return item.tinhThanh.maTinh === this.maTinhDen;
        }
      );
      // this.getChuyen();
    },
    error => {
      console.log(error);
    });
  }

  //Lấy chuyến xe theo ngày
  getChuyen(): void{
    this.xemChiTietChuyenXeService.getChuyen(this.ngay).subscribe(
      data => {
        this.chuyenXesRoot = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onChangeChuyenXeKhiChonNhaXe(): void{
    this.chuyenXeTheoTinhVaNhaXes = this.chuyenXes.slice();
    if (this.nhaXe !== undefined) {
      this.chuyenXeTheoTinhVaNhaXes = this.chuyenXeTheoBenDiBenBenDens.slice().filter(
        item => {

          //Lọc theo ma nhà xe
          const a = item.xe.nhaXe.maNhaXe;
          const b = this.nhaXe.maNhaXe;

          if (a === b) {
            return true;
          } else {
            return false;
          }
        }
      );
    }
    if (this.chuyenXeTheoTinhVaNhaXes) {
      this.chuyenXes = this.chuyenXeTheoTinhVaNhaXes.slice();
      // this.getGhe();
    }
    this.capNhatCacTruong();
  }

  onChangeTheoThoiGian(): void {
    // this.getGhe();
    this.capNhatCacTruong();
  }

  getGheTheoDB():void {
    if (this.chuyenXes) {
      this.xemChiTietChuyenXeService.getGhe(this.chuyenXes[0].xe.maXe).subscribe(
        data => {
          this.ghesTheoDb = data;
          // console.log(data);
          if (this.ghesTheoDb) {
            this.ghesTheoDb.forEach(ghe => {
              // @ts-ignore
              this.gheFirebaseService.update(ghe.maGhe, ghe)
            });
            this.refreshList();
          }
        }
      );
    }
  }

  // get ghế theo sơ đồ giường 2 tầng
  getGhe(): void {
    //init
    this.gheDaChons = [];
    this.newGhesTang1 = [];
    this.newGhesTang2 = [];
    //lấy tất cả ghế
    //lấy ghế đã chọn cho tính tiền
    this.gheDaChons = this.ghes.slice().filter(
      item => {
        //set đã chọn cho ghế
        if (item.trangThaiGhe === 'mttg02'){
          item.daChon = true;
          return true;
        }
        return false;
      }
    );

    //lấy ghế tầng 1
    this.ghesTang1 = this.ghes.slice().filter(
      item => {
        return item.tang === 1;
      }
    );
    //lấy ghế tầng 2
    this.ghesTang2 = this.ghes.slice().filter(
      item => {
        return item.tang === 2;
      }
    );
    // Sắp xếp ghế
    // @ts-ignore
    this.ghes.sort((a: Ghe, b: Ghe) => {
      // @ts-ignore
      return a.soGhe > b.soGhe;
    });
    // chuyển số ghế sang mảng 2 chiều tại biến newGhesTang*
    while (this.ghesTang1.length) {
      // @ts-ignore
      this.newGhesTang1.push(this.ghesTang1.splice(0, 3));
    }
    while (this.ghesTang2.length) {
      // @ts-ignore
      this.newGhesTang2.push(this.ghesTang2.splice(0, 3));
    }
    // Tính tổng tiền
    this.setTongTien();
  }

  getGheKhongGoiDB(): void {
    this.newGhesTang1 = [];
    this.newGhesTang2 = [];
    if (this.chuyenXe) {
          this.gheDaChons = this.ghes.slice().filter(
            item => {
              if (item.trangThaiGhe === 'mttg02'){
                item.daChon = true;
                return true;
              }
              return false;
            }
          );

          this.ghesTang1 = this.ghes.slice().filter(
            item => {
              return item.tang === 1;
            }
          );
          this.ghesTang2 = this.ghes.slice().filter(
            item => {
              return item.tang === 2;
            }
          );
          // @ts-ignore
          this.ghes.sort((a, b) => {
            // @ts-ignore
            return a.soGhe > b.soGhe;
          });
          while (this.ghesTang1.length) {
            // @ts-ignore
            this.newGhesTang1.push(this.ghesTang1.splice(0, 3));
          }
          while (this.ghesTang2.length) {
            // @ts-ignore
            this.newGhesTang2.push(this.ghesTang2.splice(0, 3));
          }
          this.setTongTien();
    }
  }

  onChangeBenDi(): void{
    // this.loadChuyenXe();
    this.filterChuyenXeTheoBen();
    if (this.chuyenXeTheoBenDiBenBenDens) {
      this.chuyenXes = this.chuyenXeTheoBenDiBenBenDens.slice();
      // this.getGhe();
      this.capNhatCacTruong();
    }
    this.getGheTheoDB();
  }

  capNhatCacTruong(): void {
    // if (this.chuyenXes) {
    //   this.benDi = this.chuyenXes[0].benDi;
    //   this.benDen = this.chuyenXes[0].benDen;
    //   this.nhaXe = this.chuyenXes[0].xe.nhaXe;
    //   this.chuyenXe = this.chuyenXes[0];
    // }
  }

  onChangeBenDen(): void{
    this.filterChuyenXeTheoBen();
    if (this.chuyenXeTheoBenDiBenBenDens) {
      this.chuyenXes = this.chuyenXeTheoBenDiBenBenDens.slice();
      this.capNhatCacTruong();
    }
  }

  // lọc chuyến xe theo các bến đã chọn
  filterChuyenXeTheoBen(): void{
    this.chuyenXeTheoBenDiBenBenDens = this.chuyenXesRoot.slice();
    if (this.benDi !== undefined) {
      //lọc theo mã bến đi
      this.chuyenXeTheoBenDiBenBenDens = this.chuyenXeTheoBenDiBenBenDens.slice().filter(
        item => {
          const a = item.benDi.maBen;
          const b = this.benDi.maBen;
          if (a === b) {
            return true;
          } else {
            return false;
          }
        }
      );
    }
    if (this.benDen !== undefined) {
      //lọc theo mã bến đến
      this.chuyenXeTheoBenDiBenBenDens = this.chuyenXeTheoBenDiBenBenDens.slice().filter(
        item => {
          const a = item.benDen.maBen;
          const b = this.benDen.maBen;
          if (a === b) {
            return true;
          } else {
            return false;
          }
        }
      );
    }

    this.nhaXesTheoBenDiBenDen = this.nhaXes.slice();
    this.nhaXesTheoBenDiBenDen = this.nhaXes.slice().filter(
      item => {
        let result = false;
        this.chuyenXeTheoBenDiBenBenDens.forEach(
          item2 => {
            const a = item2.xe.nhaXe.maNhaXe;
            const b = item.maNhaXe;
            if (a === b) {
              result = true;
            }
          }
        );
        return result;
      }
    );
  }

  //lấy tất cả nhà xe
  private getNhaXe(): void {
    this.xemChiTietChuyenXeService.getNhaXe().subscribe(
      data => {
        this.nhaXes = data;
      }, error => {
        console.log(error);
      }
    );
  }

  //lấy tất cả trạng thái ghế
  private getTrangThaiGhe(): void {
    this.xemChiTietChuyenXeService.getTrangThaiGhe().subscribe(
      data => {
        this.trangThaiGhes = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  tiepTuc(): void {
    // lưu vào session
    this.gheDaChons = [];
    this.ghes.forEach(
      item => {
        if (item.daChon) {
          this.gheDaChons.push(item);
        }
      }
    );
    if (this.chuyenXe) {
      localStorage.setItem('chuyenXe', JSON.stringify(this.chuyenXe));
    }
    if (this.gheDaChons) {
      localStorage.setItem('gheDaChons', JSON.stringify(this.gheDaChons));
    }
    if (this.ghes) {
      localStorage.setItem('ghes', JSON.stringify(this.ghes));
    }
    localStorage.setItem('diemDi', JSON.stringify(this.diemDi));
  }

  private init(): void {
    //Lay dữ liệu từ trang tìm kiếm
    this.activatedRoute.queryParams.subscribe(
      data => {
        this.maTinhDi = data.maTinhDi;
        this.maTinhDen = data.maTinhDen;
        this.ngay = data.ngay;
      }
    );
    // this.layDuLieuNeuCo();
  }

  refreshList(): void {
    // this.currentTutorial = undefined;
    this.currentGhe = undefined;
    this.currentIndex = -1;
    this.retrieveGhe();
    this.updateGhe();
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

  setActiveTutorial(ghe: Ghe, index: number): void {
    this.currentGhe = ghe;
    this.currentIndex = index;
  }

  removeAllGhe(): void {
    this.gheFirebaseService.deleteAll()
      .then(() => {
        this.refreshList();
        this.message = 'The tutorial was updated successfully!';
      })
      .catch(err => console.log(err));
  }

  updateGhe(){
    this.ghes?.forEach(
      ghe => {
        this.gheFirebaseService.updateGhe(ghe).subscribe(data => {
          console.log(data);
        }, error => {
          console.log(error);
        });
      }
    );
  }

  // nút trở về
  backClicked(): void {
    this._location.back();
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
    //lấy dữ liệu từ session nếu có
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
    this.removeAllGhe();
  }
}
