import {LoaiGhe} from './LoaiGhe.class';
import {VeXe} from './VeXe.class';

export default class Ghe {
  key?: string | null;
  maGhe?: string | null;
  tenGhe?: string;
  loaiGhe?: LoaiGhe;
  trangThaiGhe?: String;
  veXe?: VeXe;
  xe?: string;
  soGhe?: number;
  tang?: number;
  hang?: number;
  gia?: number| 0;
  daChon?: boolean | false;
  email?: string;

  constructor(maGhe: string, tenGhe: string, loaiGhe: LoaiGhe, trangThaiGhe: String, veXe: VeXe, xe: string, soGhe: number, tang: number, hang: number, daChon: boolean, gia: number) {
    this.maGhe = maGhe;
    this.tenGhe = tenGhe;
    this.loaiGhe = loaiGhe;
    this.trangThaiGhe = trangThaiGhe;
    this.veXe = veXe;
    this.xe = xe;
    this.soGhe = soGhe;
    this.tang = tang;
    this.hang = hang;
    this.daChon = daChon;
    this.gia = gia;
  }

  // get gia(): number {
  //   return this._gia;
  // }
  //
  // set gia(value: number) {
  //   this._gia = value;
  // }
  //
  // get daChon(): boolean {
  //   return this._daChon;
  // }
  //
  // set daChon(value: boolean) {
  //   this._daChon = value;
  // }
  //
  // get tang(): number {
  //   return this._tang;
  // }
  //
  // set tang(value: number) {
  //   this._tang = value;
  // }
  //
  // get maGhe(): string {
  //   return this._maGhe;
  // }
  //
  // set maGhe(value: string) {
  //   this._maGhe = value;
  // }
  //
  // get tenGhe(): string {
  //   return this._tenGhe;
  // }
  //
  // set tenGhe(value: string) {
  //   this._tenGhe = value;
  // }
  //
  // get loaiGhe(): LoaiGhe {
  //   return this._loaiGhe;
  // }
  //
  // set loaiGhe(value: LoaiGhe) {
  //   this._loaiGhe = value;
  // }
  //
  // get trangThaiGhe(): TrangThaiGhe {
  //   return this._trangThaiGhe;
  // }
  //
  // set trangThaiGhe(value: TrangThaiGhe) {
  //   this._trangThaiGhe = value;
  // }
  //
  // get veXe(): VeXe {
  //   return this._veXe;
  // }
  //
  // set veXe(value: VeXe) {
  //   this._veXe = value;
  // }
  //
  // get xe(): string {
  //   return this._xe;
  // }
  //
  // set xe(value: string) {
  //   this._xe = value;
  // }
  //
  // get soGhe(): number {
  //   return this._soGhe;
  // }
  //
  // set soGhe(value: number) {
  //   this._soGhe = value;
  // }
  //
  // get hang(): number {
  //   return this._hang;
  // }
  //
  // set hang(value: number) {
  //   this._hang = value;
  // }
}
