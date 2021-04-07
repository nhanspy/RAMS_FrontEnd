export class Ben {
  private _maBen: string;
  private _tenBen: string;
  private _maTinh: string;


  constructor(maBen: string, tenBen: string, maTinh: string) {
    this._maBen = maBen;
    this._tenBen = tenBen;
    this._maTinh = maTinh;
  }


  get maBen(): string {
    return this._maBen;
  }

  set maBen(value: string) {
    this._maBen = value;
  }

  get tenBen(): string {
    return this._tenBen;
  }

  set tenBen(value: string) {
    this._tenBen = value;
  }

  get maTinh(): string {
    return this._maTinh;
  }

  set maTinh(value: string) {
    this._maTinh = value;
  }
}
