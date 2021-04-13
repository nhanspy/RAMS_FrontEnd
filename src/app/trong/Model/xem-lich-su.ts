export class XemLichSu {
  get tenNhaXe(): string {
    return this._tenNhaXe;
  }

  set tenNhaXe(value: string) {
    this._tenNhaXe = value;
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
  constructor(tenNhaXe: string, benDi: string, benDen: string, thoiGian: string) {
    this._tenNhaXe = tenNhaXe;
    this._benDi = benDi;
    this._benDen = benDen;
    this._thoiGian = thoiGian;
  }
  private _tenNhaXe: string;
  private _benDi: string;
  private _benDen: string;
  private _thoiGian: string;
}
