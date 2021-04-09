export class Tuyenxe {
  // tslint:disable-next-line:variable-name
  private _maXe: string;
  // tslint:disable-next-line:variable-name
  private _benDi: string;
  // tslint:disable-next-line:variable-name
  private _benDen: string;
  // tslint:disable-next-line:variable-name
  private _thoiGian: string;


  constructor(maXe: string, benDi: string, benDen: string, thoiGian: string) {
    this._maXe = maXe;
    this._benDi = benDi;
    this._benDen = benDen;
    this._thoiGian = thoiGian;
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
