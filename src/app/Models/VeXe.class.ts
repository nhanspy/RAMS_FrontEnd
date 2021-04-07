export class VeXe {
  private _maVe: string;
  private _maTaiKhoanNhaXe: string;
  private _maChuyen: string;
  private _thoiGian: string;
  private _maNguoiDung: string;
  private _giaTien: string;
  private _maGhe: string;

  constructor(maVe: string, maTaiKhoanNhaXe: string, maChuyen: string, thoiGian: string, maNguoiDung: string, giaTien: string, maGhe: string) {
    this._maVe = maVe;
    this._maTaiKhoanNhaXe = maTaiKhoanNhaXe;
    this._maChuyen = maChuyen;
    this._thoiGian = thoiGian;
    this._maNguoiDung = maNguoiDung;
    this._giaTien = giaTien;
    this._maGhe = maGhe;
  }


  get maVe(): string {
    return this._maVe;
  }

  set maVe(value: string) {
    this._maVe = value;
  }

  get maTaiKhoanNhaXe(): string {
    return this._maTaiKhoanNhaXe;
  }

  set maTaiKhoanNhaXe(value: string) {
    this._maTaiKhoanNhaXe = value;
  }

  get maChuyen(): string {
    return this._maChuyen;
  }

  set maChuyen(value: string) {
    this._maChuyen = value;
  }

  get thoiGian(): string {
    return this._thoiGian;
  }

  set thoiGian(value: string) {
    this._thoiGian = value;
  }

  get maNguoiDung(): string {
    return this._maNguoiDung;
  }

  set maNguoiDung(value: string) {
    this._maNguoiDung = value;
  }

  get giaTien(): string {
    return this._giaTien;
  }

  set giaTien(value: string) {
    this._giaTien = value;
  }

  get maGhe(): string {
    return this._maGhe;
  }

  set maGhe(value: string) {
    this._maGhe = value;
  }
}
