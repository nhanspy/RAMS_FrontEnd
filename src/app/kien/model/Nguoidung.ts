export class Nguoidung {
  // tslint:disable-next-line:variable-name
  private _name: string;
  // tslint:disable-next-line:variable-name
  private _user: string;
  // tslint:disable-next-line:variable-name
  private _password: string;
  // tslint:disable-next-line:variable-name
  private _phone: string;
  // tslint:disable-next-line:variable-name
  private _gender: string;

  constructor(name: string, user: string, password: string, phone: string, gender: string) {
    this._name = name;
    this._user = user;
    this._password = password;
    this._phone = phone;
    this._gender = gender;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get user(): string {
    return this._user;
  }

  set user(value: string) {
    this._user = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }
}
