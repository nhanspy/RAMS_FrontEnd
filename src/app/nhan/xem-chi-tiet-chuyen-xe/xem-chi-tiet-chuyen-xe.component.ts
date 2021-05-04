import {AfterViewInit, Component, OnInit} from '@angular/core';
import {XemChiTietChuyenXeService} from '../service/xem-chi-tiet-chuyen-xe.service';
import {ChuyenXe} from '../Models/ChuyenXe.class';
import {TinhThanh} from '../Models/TinhThanh.class';
import {Ben} from '../Models/Ben.class';
import {NhaXe} from '../Models/NhaXe.class';

@Component({
  selector: 'app-xem-chi-tiet-chuyen-xe',
  templateUrl: './xem-chi-tiet-chuyen-xe.component.html',
  styleUrls: ['./xem-chi-tiet-chuyen-xe.component.css']
})
export class XemChiTietChuyenXeComponent implements OnInit, AfterViewInit {

  constructor(private xemChiTietChuyenXeService: XemChiTietChuyenXeService) {
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
  nhaXe: NhaXe[] = [];
  // @ts-ignore
  ngay: string;
  // @ts-ignore
  nhanXe: NhaXe;

  ngOnInit(): void {
    this.getTinh();
    // this.getChuyenTheoTinhDiTinhDen();
    this.maChuyenXe = 'mcx01';
    this.ngay = '11/04/2021';
    console.log('=============');
  }

  getTinh(): void {
    console.log(1);
    this.xemChiTietChuyenXeService.getTinhTheoMaTinh('mt01').subscribe(
      data => {
        this.tinhDi = data;
        this.getBen();
      },
      error => {
        console.log(error);
      }
    );

    this.xemChiTietChuyenXeService.getTinhTheoMaTinh('mt04').subscribe(
      data => {
        this.tinhDen = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getBen(): void {
    console.log(2);
    this.xemChiTietChuyenXeService.getBen().subscribe(data => {
        this.bens = data;
        this.benDis = this.bens.slice();
        this.benDis = this.xemChiTietChuyenXeService.getBenTheoTinh(this.tinhDi, this.benDis);
        this.benDens = this.bens.slice();
        this.benDens = this.xemChiTietChuyenXeService.getBenTheoTinh(this.tinhDen, this.benDens);
        this.getChuyen();
      },
      error => {
        console.log(error);
      });
  }

  getChuyen(): void {
    console.log(3);
    this.xemChiTietChuyenXeService.getChuyen().subscribe(
      data => {
        this.chuyenXes = data;
        this.nhanXe = this.chuyenXes[0].xe.nhaXe;
        this.getChuyenTheoTinhDiTinhDen();
      },
      error => {
        console.log(error);
      }
    );
  }

  getChuyenTheoTinhDiTinhDen(): void {
    // @ts-ignore
    Array.prototype.inArray = function (comparer) {
      for (var i = 0; i < this.length; i++) {
        if (comparer(this[i])) return true;
      }
      return false;
    };

// adds an element to the array if it does not already exist using a comparer
// function
    // @ts-ignore
    Array.prototype.pushIfNotExist = function (element, comparer) {
      // @ts-ignore
      if (!this.inArray(comparer)) {
        this.push(element);
      }
    };
    console.log(999);
    console.log(this.chuyenXes);
    console.log(this.benDis);
    console.log(this.benDens);
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
    // console.log('asdf');
    // console.log(this.benDiBenDen);
  }

  ngAfterViewInit(): void {
    // this.getChuyenTheoTinhDiTinhDen();
  }

  onChangeChuyenXe(value: ChuyenXe): void {
    this.nhanXe = value.xe.nhaXe;
    this.chuyenXeTheoTinhVaNhaXes = [];
    this.chuyenXeTheoTinhs.forEach(chuyenXe => {
      if (chuyenXe.xe.nhaXe.maNhaXe === this.nhanXe.maNhaXe) {
        this.chuyenXeTheoTinhVaNhaXes.push(chuyenXe);
      }
    })
    console.log(this.nhanXe);
  }

  onChangeTheoThoiGian(value: ChuyenXe): void {
    this.chuyenXe = value;
    // console.log(this.chuyenXe);
  }

  handleChange(value: ChuyenXe): void {
    // @ts-ignore
    this.benDiBenDen = value;
    console.log(value);
    this.chuyenXeTheoBenDiBenBenDens = [];
    this.chuyenXeTheoTinhs.forEach(chuyenXe => {
      if (chuyenXe.benDi.maBen === this.benDiBenDen.benDi.maBen && chuyenXe.benDen.maBen === this.benDiBenDen.benDen.maBen) {
        this.chuyenXeTheoBenDiBenBenDens.push(chuyenXe);
      }
    });
  }

}
