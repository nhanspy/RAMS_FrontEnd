export class LoaiGhe {
  private _maLoaiGhe: string;
  private _tenLoaiGhe: string;

  constructor(maLoaiGhe: string, tenLoaiGhe: string) {
    this._maLoaiGhe = maLoaiGhe;
    this._tenLoaiGhe = tenLoaiGhe;
  }

  get maLoaiGhe(): string {
    return this._maLoaiGhe;
  }

  set maLoaiGhe(value: string) {
    this._maLoaiGhe = value;
  }

  get tenLoaiGhe(): string {
    return this._tenLoaiGhe;
  }

  set tenLoaiGhe(value: string) {
    this._tenLoaiGhe = value;
  }
}
