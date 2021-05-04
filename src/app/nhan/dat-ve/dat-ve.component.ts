import { Component, OnInit } from '@angular/core';
import {DatVeService} from '../service/dat-ve.service';
import {VeXe} from '../Models/VeXe.class';
import {Router} from '@angular/router';
import {ChuyenXe} from '../Models/ChuyenXe.class';
import {Ghe} from '../Models/Ghe.class';
import {Location} from '@angular/common';
@Component({
  selector: 'app-dat-ve',
  templateUrl: './dat-ve.component.html',
  styleUrls: ['./dat-ve.component.css',  '../../../assets/nhan/css/css.css', '../../../assets/css/material-kit.css?v=2.1.1']
})
export class DatVeComponent implements OnInit {

  // @ts-ignore
  price: number;
  maVe = 'mv02';
  // tslint:disable-next-line:variable-name
  constructor(private datVeService: DatVeService, private router: Router, private _location: Location) {

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

  ngOnInit(): void {
    if (localStorage.getItem('chuyenXe')) {
      // @ts-ignore
      this.chuyenXe = JSON.parse(localStorage.getItem('chuyenXe'));
    }
    if (localStorage.getItem('gheDaChons')) {
      // @ts-ignore
      this.gheDaChons = JSON.parse(localStorage.getItem('gheDaChons'));
    }
    this.setTongTien();
  }

  setTongTien(): void{
    this.tongGheDaChon = 0;
    this.tongTien = 0;
    this.strGheDaChon = '';
    this.gheDaChons.forEach(
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
        if (data) {
          localStorage.setItem('maVeChuaThanhToan', JSON.stringify(data));
        }
        window.location.href = 'http://localhost:8080/' + this.tongTien;
      },
      error => {
        console.log(error);
      }
    );
  }
  backClicked(): void {
    this._location.back();
  }

}
