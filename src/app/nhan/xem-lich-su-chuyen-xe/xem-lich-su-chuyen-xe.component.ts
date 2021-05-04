import { Component, OnInit } from '@angular/core';
import {ChuyenXe} from '../Models/ChuyenXe.class';
import {TinhThanh} from '../Models/TinhThanh.class';
import {Ben} from '../Models/Ben.class';
import {NhaXe} from '../Models/NhaXe.class';
import {TrangThaiGhe} from '../Models/TrangThaiGhe.class';
import {Ghe} from '../Models/Ghe.class';

@Component({
  selector: 'app-xem-lich-su-chuyen-xe',
  templateUrl: './xem-lich-su-chuyen-xe.component.html',
  styleUrls: ['./xem-lich-su-chuyen-xe.component.css', '../../../assets/css/material-kit.css?v=2.1.1', '../../../assets/nhan/css/css.css']
})
export class XemLichSuChuyenXeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
