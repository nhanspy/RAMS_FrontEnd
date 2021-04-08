export class NhanXe {
  private _maNhaXe: string;
  private _tenNhaXe: string;


  constructor(maNhaXe: string, tenNhaXe: string) {
    this._maNhaXe = maNhaXe;
    this._tenNhaXe = tenNhaXe;
  }

  get maNhaXe(): string {
    return this._maNhaXe;
  }

  set maNhaXe(value: string) {
    this._maNhaXe = value;
  }

  get tenNhaXe(): string {
    return this._tenNhaXe;
  }

  set tenNhaXe(value: string) {
    this._tenNhaXe = value;
  }
}
