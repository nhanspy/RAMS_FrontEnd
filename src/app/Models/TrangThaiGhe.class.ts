export class TrangThaiGhe {
  private _maTrangThai: string;
  private _tenTrangThai: string;

  constructor(maTrangThai: string, tenTrangThai: string) {
    this._maTrangThai = maTrangThai;
    this._tenTrangThai = tenTrangThai;
  }

  get maTrangThai(): string {
    return this._maTrangThai;
  }

  set maTrangThai(value: string) {
    this._maTrangThai = value;
  }

  get tenTrangThai(): string {
    return this._tenTrangThai;
  }

  set tenTrangThai(value: string) {
    this._tenTrangThai = value;
  }
}
