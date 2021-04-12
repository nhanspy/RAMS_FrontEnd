export class Nguoidung {
  // tslint:disable-next-line:variable-name
  private _userName: string;
  // tslint:disable-next-line:variable-name
  private _email: string;
  // tslint:disable-next-line:variable-name
  private _password: string;
  // tslint:disable-next-line:variable-name
  private _ten: string;
  // tslint:disable-next-line:variable-name
  private _soDienThoai: string;
  // tslint:disable-next-line:variable-name
  private _diaChi: string;
  // tslint:disable-next-line:variable-name
  private _ngaySinh: string;
  // tslint:disable-next-line:variable-name
  private _gioiTinh: boolean;
  // tslint:disable-next-line:variable-name
  private _role: string;

  constructor(userName: string, email: string, password: string, ten: string, soDienThoai: string, diaChi: string, ngaySinh: string, gioiTinh: boolean, role: string) {
    this._userName = userName;
    this._email = email;
    this._password = password;
    this._ten = ten;
    this._soDienThoai = soDienThoai;
    this._diaChi = diaChi;
    this._ngaySinh = ngaySinh;
    this._gioiTinh = gioiTinh;
    this._role = role;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get ten(): string {
    return this._ten;
  }

  set ten(value: string) {
    this._ten = value;
  }

  get soDienThoai(): string {
    return this._soDienThoai;
  }

  set soDienThoai(value: string) {
    this._soDienThoai = value;
  }

  get diaChi(): string {
    return this._diaChi;
  }

  set diaChi(value: string) {
    this._diaChi = value;
  }

  get ngaySinh(): string {
    return this._ngaySinh;
  }

  set ngaySinh(value: string) {
    this._ngaySinh = value;
  }

  get gioiTinh(): boolean {
    return this._gioiTinh;
  }

  set gioiTinh(value: boolean) {
    this._gioiTinh = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }
}
