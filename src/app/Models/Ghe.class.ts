export class Ghe {
  private _maGhe: string;
  private _tenGhe: string;
  private _maLoaiGhe: string;
  private _maTrangThai: string;

  constructor(maGhe: string, tenGhe: string, maLoaiGhe: string, maTrangThai: string) {
    this._maGhe = maGhe;
    this._tenGhe = tenGhe;
    this._maLoaiGhe = maLoaiGhe;
    this._maTrangThai = maTrangThai;
  }

  get maGhe(): string {
    return this._maGhe;
  }

  set maGhe(value: string) {
    this._maGhe = value;
  }

  get tenGhe(): string {
    return this._tenGhe;
  }

  set tenGhe(value: string) {
    this._tenGhe = value;
  }

  get maLoaiGhe(): string {
    return this._maLoaiGhe;
  }

  set maLoaiGhe(value: string) {
    this._maLoaiGhe = value;
  }

  get maTrangThai(): string {
    return this._maTrangThai;
  }

  set maTrangThai(value: string) {
    this._maTrangThai = value;
  }
}
