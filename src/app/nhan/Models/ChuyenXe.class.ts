import {Ben} from './Ben.class';
import {VeXe} from './VeXe.class';
import {Xe} from './Xe.class';

export class ChuyenXe {
  private _maChuyen: string;
  private _thoiGian: string;
  private _benDi: Ben;
  private _benDen: Ben;
  private _veXes: VeXe;
  private _xe: Xe;


  constructor(maChuyen: string, thoiGian: string, benDi: Ben, benDen: Ben, veXe: VeXe, xe: Xe) {
    this._maChuyen = maChuyen;
    this._thoiGian = thoiGian;
    this._benDi = benDi;
    this._benDen = benDen;
    this._veXes = veXe;
    this._xe = xe;
  }


  get veXe(): VeXe {
    return this._veXes;
  }

  set veXe(value: VeXe) {
    this._veXes = value;
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
