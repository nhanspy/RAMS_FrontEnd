export class LoaiXe {
  private _maLoaiXe: string;
  private _tenLoaiXe: string;

  constructor(maLoaiXe: string, tenLoaiXe: string) {
    this._maLoaiXe = maLoaiXe;
    this._tenLoaiXe = tenLoaiXe;
  }

  get maLoaiXe(): string {
    return this._maLoaiXe;
  }

  set maLoaiXe(value: string) {
    this._maLoaiXe = value;
  }

  get tenLoaiXe(): string {
    return this._tenLoaiXe;
  }

  set tenLoaiXe(value: string) {
    this._tenLoaiXe = value;
  }
}
