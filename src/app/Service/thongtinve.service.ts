import { Injectable } from '@angular/core';
import {Thongtinve} from '../Model/thongtinve.class';

@Injectable({
  providedIn: 'root'
})
export class ThongtinveService {
  // tslint:disable-next-line:variable-name
  private _thongtinveList: Thongtinve[] = [
    new Thongtinve('Le Thi Thao', '033 454 0954', 'Da Nang', 'Phuong Trang', '3', '20h30', '73H1-44111'),
  ];

  constructor() { }


  get thongtinveList(): Thongtinve[] {
    return this._thongtinveList;
  }

  set thongtinveList(value: Thongtinve[]) {
    this._thongtinveList = value;
  }
}
