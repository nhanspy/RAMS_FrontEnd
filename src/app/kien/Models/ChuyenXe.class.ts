import {Ben} from './Ben.class';
import {VeXe} from './VeXe.class';
import {Xe} from './Xe.class';

export class ChuyenXe {
  // tslint:disable-next-line:variable-name
  private _maChuyen: string;
  // tslint:disable-next-line:variable-name
  private _maXe: string;
  // tslint:disable-next-line:variable-name
  private _thoiGian: string;
  // tslint:disable-next-line:variable-name
  private _benDi: Ben;
  // tslint:disable-next-line:variable-name
  private _benDen: Ben;
  // tslint:disable-next-line:variable-name
  private _veXe: VeXe;
  // tslint:disable-next-line:variable-name
  private _xe: Xe;


  constructor(maChuyen: string, maXe: string, thoiGian: string, benDi: Ben, benDen: Ben, veXe: VeXe, xe: Xe) {
    this._maChuyen = maChuyen;
    this._maXe = maXe;
    this._thoiGian = thoiGian;
    this._benDi = benDi;
    this._benDen = benDen;
    this._veXe = veXe;
    this._xe = xe;
  }


  get veXe(): VeXe {
    return this._veXe;
  }

  set veXe(value: VeXe) {
    this._veXe = value;
  }

  get xe(): Xe {
    return this._xe;
  }

  set xe(value: Xe) {
    this._xe = value;
  }

  get maChuyen(): string {
    return this._maChuyen;
  }

  set maChuyen(value: string) {
    this._maChuyen = value;
  }

  get maXe(): string {
    return this._maXe;
  }

  set maXe(value: string) {
    this._maXe = value;
  }

  get thoiGian(): string {
    return this._thoiGian;
  }

  set thoiGian(value: string) {
    this._thoiGian = value;
  }


  get benDi(): Ben {
    return this._benDi;
  }

  set benDi(value: Ben) {
    this._benDi = value;
  }

  get benDen(): Ben {
    return this._benDen;
  }

  set benDen(value: Ben) {
    this._benDen = value;
  }
}
