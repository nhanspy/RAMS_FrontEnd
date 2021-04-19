import {LoaiGhe} from './LoaiGhe.class';
import {TrangThaiGhe} from './TrangThaiGhe.class';
import {VeXe} from './VeXe.class';
import {Xe} from './Xe.class';

export class Ghe {
  private _maGhe: string;
  private _tenGhe: string;
  private _loaiGhe: LoaiGhe;
  private _trangThaiGhe: TrangThaiGhe;
  private _veXe: VeXe;
  private _xe: string;
  private _soGhe: number;
  private _tang: number;
  private _hang: number;
  private _gia: number;
  private _daChon: boolean | false;

  constructor(maGhe: string, tenGhe: string, loaiGhe: LoaiGhe, trangThaiGhe: TrangThaiGhe, veXe: VeXe, xe: string, soGhe: number, tang: number, hang: number, daChon: boolean, gia: number) {
    this._maGhe = maGhe;
    this._tenGhe = tenGhe;
    this._loaiGhe = loaiGhe;
    this._trangThaiGhe = trangThaiGhe;
    this._veXe = veXe;
    this._xe = xe;
    this._soGhe = soGhe;
    this._tang = tang;
    this._hang = hang;
    this._daChon = daChon;
    this._gia = gia;
  }
  
  get gia(): number {
    return this._gia;
  }

  set gia(value: number) {
    this._gia = value;
  }

  get daChon(): boolean {
    return this._daChon;
  }

  set daChon(value: boolean) {
    this._daChon = value;
  }

  get tang(): number {
    return this._tang;
  }

  set tang(value: number) {
    this._tang = value;
  }

  get maGhe(): string {
    return this._maGhe;
  }

  set maGhe(value: string) {
    this._maGhe = value;
  }

  get tenGhe(): string {
    return this._tenGhe;
  }

  set tenGhe(value: string) {
    this._tenGhe = value;
  }

  get loaiGhe(): LoaiGhe {
    return this._loaiGhe;
  }

  set loaiGhe(value: LoaiGhe) {
    this._loaiGhe = value;
  }

  get trangThaiGhe(): TrangThaiGhe {
    return this._trangThaiGhe;
  }

  set trangThaiGhe(value: TrangThaiGhe) {
    this._trangThaiGhe = value;
  }

  get veXe(): VeXe {
    return this._veXe;
  }

  set veXe(value: VeXe) {
    this._veXe = value;
  }

  get xe(): string {
    return this._xe;
  }

  set xe(value: string) {
    this._xe = value;
  }

  get soGhe(): number {
    return this._soGhe;
  }

  set soGhe(value: number) {
    this._soGhe = value;
  }

  get hang(): number {
    return this._hang;
  }

  set hang(value: number) {
    this._hang = value;
  }
}
