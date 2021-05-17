import Ghe from './Ghe.class';
import {ChuyenXe} from './ChuyenXe.class';
import {User} from './User.class';

export class VeXe {
  private _maVe: string;
  // @ts-ignore
  private _thoiGian: string;
  // @ts-ignore
  private _giaTien: number;
  // @ts-ignore
  private _ghe: Ghe[];
  // @ts-ignore
  private _chuyenXe: ChuyenXe;
  // @ts-ignore
  private _userNguoiDung: User;
  // @ts-ignore
  private _userNhaXe: User;

  // @ts-ignore
  private _isThanhToan: boolean;

  constructor(maVe: string, thoiGian: string, giaTien: number, ghe: Ghe[], chuyenXe: ChuyenXe, isThanhToan: boolean) {
    this._maVe = maVe;
    this._thoiGian = thoiGian;
    this._giaTien = giaTien;
    this._ghe = ghe;
    this._chuyenXe = chuyenXe;
    this._isThanhToan = isThanhToan;
  }

  get isThanhToan(): boolean {
    return this._isThanhToan;
  }

  set isThanhToan(value: boolean) {
    this._isThanhToan = value;
  }

  get userNguoiDung(): User {
    return this._userNguoiDung;
  }

  set userNguoiDung(value: User) {
    this._userNguoiDung = value;
  }

  get userNhaXe(): User {
    return this._userNhaXe;
  }

  set userNhaXe(value: User) {
    this._userNhaXe = value;
  }

  get maVe(): string {
    return this._maVe;
  }

  set maVe(value: string) {
    this._maVe = value;
  }

  get thoiGian(): string {
    return this._thoiGian;
  }

  set thoiGian(value: string) {
    this._thoiGian = value;
  }


  get giaTien(): number {
    return this._giaTien;
  }

  set giaTien(value: number) {
    this._giaTien = value;
  }

  get ghe(): Ghe[] {
    return this._ghe;
  }

  set ghe(value: Ghe[]) {
    this._ghe = value;
  }

  get chuyenXe(): ChuyenXe {
    return this._chuyenXe;
  }

  set chuyenXe(value: ChuyenXe) {
    this._chuyenXe = value;
  }
}
