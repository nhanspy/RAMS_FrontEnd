export class TinhThanh {
  private _maTinh: string;
  private _tenTinh: string;

  constructor(maTinh: string, tenTinh: string) {
    this._maTinh = maTinh;
    this._tenTinh = tenTinh;
  }

  get maTinh(): string {
    return this._maTinh;
  }

  set maTinh(value: string) {
    this._maTinh = value;
  }

  get tenTinh(): string {
    return this._tenTinh;
  }

  set tenTinh(value: string) {
    this._tenTinh = value;
  }
}
