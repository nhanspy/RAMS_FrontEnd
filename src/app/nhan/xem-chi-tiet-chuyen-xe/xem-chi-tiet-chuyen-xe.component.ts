import {AfterViewInit, Component, OnInit} from '@angular/core';
import {XemChiTietChuyenXeService} from '../service/xem-chi-tiet-chuyen-xe.service';
import {ChuyenXe} from '../Models/ChuyenXe.class';
import {TinhThanh} from '../Models/TinhThanh.class';
import {Ben} from '../Models/Ben.class';
import {NhaXe} from '../Models/NhaXe.class';
import {Ghe} from '../Models/Ghe.class';
import {TrangThaiGhe} from '../Models/TrangThaiGhe.class';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-xem-chi-tiet-chuyen-xe',
  templateUrl: './xem-chi-tiet-chuyen-xe.component.html',
  styleUrls: ['./xem-chi-tiet-chuyen-xe.component.css', '../../../assets/nhan/css/css.css']
})
export class XemChiTietChuyenXeComponent implements OnInit, AfterViewInit {

  constructor(private xemChiTietChuyenXeService: XemChiTietChuyenXeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private _location: Location
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
  chuyenXeTheoTinhs: ChuyenXe[] = [];
  chuyenXeTheoBenDiBenBenDens: ChuyenXe[] = [];
  chuyenXeTheoTinhVaNhaXes: ChuyenXe[] = [];
  benDiBenDens: ChuyenXe[] = [];
  // @ts-ignore
  benDiBenDen: ChuyenXe = new ChuyenXe();
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
  ghes: Ghe[] = [];
  ghesTang1: Ghe[] = [];
  ghesTang2: Ghe[] = [];
  newGhesTang1: Ghe[][] = [];
  newGhesTang2: Ghe[][] = [];
  gheDaChons: Ghe[] = [];
  tongGheDaChon = 0;
  tongTien = 0;
  strGheDaChon = '';

  ngOnInit(): void {
    this.init();
    this.getTinh();
    this.getBen();
    this.getChuyen();
    this.getNhaXe();
    this.getTrangThaiGhe();
    this.ngay = '2021-04-08';
    this.maChuyenXe = 'mcx01';
    console.log('=============');
  }

  chonGhe(ghe: Ghe): void{
    if (ghe.trangThaiGhe.maTrangThai === 'mttg01') {
      ghe.trangThaiGhe = this.trangThaiGhes[2];
      ghe.daChon = true;
    } else {
      if (ghe.trangThaiGhe.maTrangThai === 'mttg02') {
        ghe.trangThaiGhe = this.trangThaiGhes[1];
        ghe.daChon = false;
      }
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
          this.tongTien += item.gia;
        }
      }
    );
    this.strGheDaChon = this.strGheDaChon.substring(0, this.strGheDaChon.length - 2);
  }

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
      // console.log(this.benDens);
      this.getChuyen();
    },
      error => {
        console.log(error);
      });
  }

  getChuyen(): void{
    this.xemChiTietChuyenXeService.getChuyen(this.ngay).subscribe(
      data => {
        this.chuyenXes = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getChuyenTheoTinhDiTinhDen(): void{

    this.chuyenXes.forEach(chuyenXe => {
      this.benDis.forEach(benDi => {
        this.benDens.forEach(benDen => {
          if ((chuyenXe.benDi.maBen === benDi.maBen && chuyenXe.benDen.maBen === benDen.maBen)) {
            // console.log(chuyenXe.benDi.maBen + ' -- ' + chuyenXe.benDen.maBen + ' -- ' + benDi.maBen + '--' + benDen.maBen);
            this.chuyenXeTheoTinhs.push(chuyenXe);
            // @ts-ignore
            this.benDiBenDens.pushIfNotExist(chuyenXe, e => {
              return chuyenXe.benDi.maBen === e.benDi.maBen && chuyenXe.benDen.maBen === e.benDen.maBen;
            });
          }
        });
      });
    });
  }

  ngAfterViewInit(): void {
  }

  onChangeChuyenXe(): void{
    this.chuyenXeTheoTinhVaNhaXes = [];
    this.chuyenXeTheoTinhVaNhaXes = this.chuyenXeTheoBenDiBenBenDens;
    if (this.nhaXe !== undefined) {
      this.chuyenXeTheoTinhVaNhaXes = this.chuyenXeTheoBenDiBenBenDens.slice().filter(
        item => {
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
    // console.log(this.chuyenXeTheoTinhVaNhaXes);
    this.onChangeTheoThoiGian();
  }

  onChangeTheoThoiGian(): void {
    this.getGhe();
  }

  getGhe(): void {
    this.ghes = [];
    this.gheDaChons = [];
    this.newGhesTang1 = [];
    this.newGhesTang2 = [];
    if (this.chuyenXe) {
      this.xemChiTietChuyenXeService.getGhe(this.chuyenXe.xe.maXe).subscribe(
        data => {
          this.ghes = data;
          this.gheDaChons = this.ghes.slice().filter(
            item => {
              if (item.trangThaiGhe.maTrangThai === 'mttg02'){
                item.daChon = true;
                return true;
              }
              return false;
            }
          );
          // console.log(this.gheDaChons);

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
        }, error => {
          console.log(error);
        }
      );
    }
  }

  getGheKhongGoiDB(): void {
    this.newGhesTang1 = [];
    this.newGhesTang2 = [];
    if (this.chuyenXe) {
      // this.xemChiTietChuyenXeService.getGhe(this.chuyenXe.xe.maXe).subscribe(
      //   data => {
      //     this.ghes = data;
          this.gheDaChons = this.ghes.slice().filter(
            item => {
              if (item.trangThaiGhe.maTrangThai === 'mttg02'){
                item.daChon = true;
                return true;
              }
              return false;
            }
          );
          // console.log(this.gheDaChons);

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
      //   }, error => {
      //     console.log(error);
      //   }
      // );
    }
  }

  handleChange(value: ChuyenXe): void {
    // @ts-ignore
    this.benDiBenDen = value;
    this.chuyenXeTheoBenDiBenBenDens = [];
    this.chuyenXeTheoTinhs.forEach(chuyenXe => {
      if (chuyenXe.benDi.maBen === this.benDiBenDen.benDi.maBen && chuyenXe.benDen.maBen === this.benDiBenDen.benDen.maBen) {
        this.chuyenXeTheoBenDiBenBenDens.push(chuyenXe);
      }
    });
  }

  onChangeBenDi(value: Ben): void{
    this.filterChuyenXeTheoBen();
    if (this.chuyenXeTheoBenDiBenBenDens) {
      this.chuyenXe = this.chuyenXeTheoBenDiBenBenDens[0];
    } else {
      // @ts-ignore
      // this.chuyenXe = undefined;
    }
    this.getGhe();
  }
  onChangeBenDen(value: Ben): void{
    this.filterChuyenXeTheoBen();
    if (this.chuyenXeTheoBenDiBenBenDens) {
      this.chuyenXe = this.chuyenXeTheoBenDiBenBenDens[0];
    } else {
      // @ts-ignore
      // this.chuyenXe = undefined;
    }
    this.getGhe();
    // if (this.nhaXesTheoBenDiBenDen) {
    //   // @ts-ignore
    //   this.nhaXe = null;
    //   this.nhaXe = this.nhaXesTheoBenDiBenDen[0];
    //   this.onChangeChuyenXe();
    //   this.onChangeTheoThoiGian();
    // }

  }

  filterChuyenXeTheoBen(): void{
    // // @ts-ignore
    // this.chuyenXe = new ChuyenXe();
    if (this.benDi !== undefined) {
      // console.log(this.chuyenXes);
      this.chuyenXeTheoBenDiBenBenDens = this.chuyenXes.slice();
      if (this.benDi !== undefined) {
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
    }
    if (this.benDen !== undefined) {
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
      this.onChangeChuyenXe();
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

  private getNhaXe(): void {
    this.xemChiTietChuyenXeService.getNhaXe().subscribe(
      data => {
        this.nhaXes = data;
      }, error => {
        console.log(error);
      }
    );
  }

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
    this.gheDaChons = [];
    this.ghes.forEach(
      item => {
        if (item.daChon) {
          this.gheDaChons.push(item);
        }
      }
    );
    // console.log(this.gheDaChons);
    if (this.chuyenXe) {
      localStorage.setItem('chuyenXe', JSON.stringify(this.chuyenXe));
    }
    if (this.gheDaChons) {
      localStorage.setItem('gheDaChons', JSON.stringify(this.gheDaChons));
    }
    if (this.newGhesTang1) {
      localStorage.setItem('newGhesTang1', JSON.stringify(this.newGhesTang1));
    }
    if (this.newGhesTang2) {
      localStorage.setItem('newGhesTang2', JSON.stringify(this.newGhesTang2));
    }
    if (this.ghes) {
      localStorage.setItem('ghes', JSON.stringify(this.ghes));
    }
  }

  private init(): void {
    this.activatedRoute.queryParams.subscribe(
      data => {
        this.maTinhDi = data.maTinhDi;
        this.maTinhDen = data.maTinhDen;
        this.ngay = data.ngay;
        // console.log(data.ngay);
      }
    );
    if (localStorage.getItem('chuyenXe')) {
      // @ts-ignore
      this.chuyenXe = JSON.parse(localStorage.getItem('chuyenXe'));
      console.log(this.chuyenXe);
      // this.getGhe();
    }
    if (localStorage.getItem('gheDaChons')) {
      // @ts-ignore
      this.gheDaChons = JSON.parse(localStorage.getItem('gheDaChons'));
    }
    if (localStorage.getItem('ghes')) {
      // @ts-ignore
      this.ghes = JSON.parse(localStorage.getItem('ghes'));
    }
    if (localStorage.getItem('newGhesTang1')) {
      // @ts-ignore
      this.newGhesTang1 = JSON.parse(localStorage.getItem('newGhesTang1'));
    }
    if (localStorage.getItem('newGhesTang2')) {
      // @ts-ignore
      this.newGhesTang2 = JSON.parse(localStorage.getItem('newGhesTang2'));
    }
    this.getGheKhongGoiDB();
  }

  backClicked(): void {
    this._location.back();
  }
}
