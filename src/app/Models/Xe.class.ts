export class Xe {
  private _maXe: string;
  private _bienSoXe: string;
  private _maLoaiXe: string;
  private _maNhaXe: string;

  constructor(maXe: string, bienSoXe: string, maLoaiXe: string, maNhaXe: string) {
    this._maXe = maXe;
    this._bienSoXe = bienSoXe;
    this._maLoaiXe = maLoaiXe;
    this._maNhaXe = maNhaXe;
  }

  get maXe(): string {
    return this._maXe;
  }

  set maXe(value: string) {
    this._maXe = value;
  }

  get bienSoXe(): string {
    return this._bienSoXe;
  }

  set bienSoXe(value: string) {
    this._bienSoXe = value;
  }

  get maLoaiXe(): string {
    return this._maLoaiXe;
  }

  set maLoaiXe(value: string) {
    this._maLoaiXe = value;
  }

  get maNhaXe(): string {
    return this._maNhaXe;
  }

  set maNhaXe(value: string) {
    this._maNhaXe = value;
  }
}
