export class Thongtinve {
  private _tenkhachang: string;
  private _sodienthoai: string;
  private _noidi: string;
  private _nhaxe: string;
  private _machuyen: string;
  private _thoigian: string;
  private _biensoxe: string;

  // tslint:disable-next-line:max-line-length
  constructor(tenkhachang: string, sodienthoai: string, noidi: string, nhaxe: string, machuyen: string, thoigian: string, biensoxe: string) {
    this._tenkhachang = tenkhachang;
    this._sodienthoai = sodienthoai;
    this._noidi = noidi;
    this._nhaxe = nhaxe;
    this._machuyen = machuyen;
    this._thoigian = thoigian;
    this._biensoxe = biensoxe;
  }

  get tenkhachang(): string {
    return this._tenkhachang;
  }

  set tenkhachang(value: string) {
    this._tenkhachang = value;
  }


  get sodienthoai(): string {
    return this._sodienthoai;
  }

  set sodienthoai(value: string) {
    this._sodienthoai = value;
  }

  get noidi(): string {
    return this._noidi;
  }

  set noidi(value: string) {
    this._noidi = value;
  }

  get nhaxe(): string {
    return this._nhaxe;
  }

  set nhaxe(value: string) {
    this._nhaxe = value;
  }

  get machuyen(): string {
    return this._machuyen;
  }

  set machuyen(value: string) {
    this._machuyen = value;
  }

  get thoigian(): string {
    return this._thoigian;
  }

  set thoigian(value: string) {
    this._thoigian = value;
  }

  get biensoxe(): string {
    return this._biensoxe;
  }

  set biensoxe(value: string) {
    this._biensoxe = value;
  }
}
