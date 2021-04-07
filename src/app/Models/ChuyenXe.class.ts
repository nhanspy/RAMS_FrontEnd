export class ChuyenXe {
  private _maChuyen: string;
  private _maXe: string;
  private _benDi: string;
  private _benDen: string;
  private _thoiGian: string;


  constructor(maChuyen: string, maXe: string, benDi: string, benDen: string, thoiGian: string) {
    this._maChuyen = maChuyen;
    this._maXe = maXe;
    this._benDi = benDi;
    this._benDen = benDen;
    this._thoiGian = thoiGian;
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

  get benDi(): string {
    return this._benDi;
  }

  set benDi(value: string) {
    this._benDi = value;
  }

  get benDen(): string {
    return this._benDen;
  }

  set benDen(value: string) {
    this._benDen = value;
  }

  get thoiGian(): string {
    return this._thoiGian;
  }

  set thoiGian(value: string) {
    this._thoiGian = value;
  }
}
