import { Injectable } from '@angular/core';
import {XemLichSu} from '../Model/xem-lich-su';

@Injectable({
  providedIn: 'root'
})
export class XemLichSu2Service {
  private _xemlichsulist: XemLichSu[] = [
    new XemLichSu('Phuong Trang',  'Ha Noi',  'Buôn Mê Thuộc',  '20h20',  '200000'),
    new XemLichSu('Sai Gon',  'Dien Bien',  'Dak Lak',  '20h20',  '200000'),
    new XemLichSu('Sao Mai',  'Sai Gon',  'Tay Nguyen',  '20h20',  '200000'),
  ];

  constructor() { }

  get xemlichsulist(): XemLichSu[] {
    return this._xemlichsulist;
  }

  set xemlichsulist(value: XemLichSu[]) {
    this._xemlichsulist = value;
  }
}
