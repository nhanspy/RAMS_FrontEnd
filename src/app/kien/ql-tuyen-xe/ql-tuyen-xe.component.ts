import { Component, OnInit } from '@angular/core';
import {QlTuyenXeService} from '../../Services/kien-s/ql-tuyen-xe.service';
import {Subscription} from 'rxjs';
import {ChuyenXe} from '../../nhan/Models/ChuyenXe.class';

@Component({
  selector: 'app-ql-tuyen-xe',
  templateUrl: './ql-tuyen-xe.component.html',
  styleUrls: ['./ql-tuyen-xe.component.css']
})
export class QlTuyenXeComponent implements OnInit {
  isDisable = false;
  chuyenXeList: ChuyenXe[] = [];
  chuyenXeListRoot: ChuyenXe[] = [];
// @ts-ignore
  keywordMaxe: string;
// @ts-ignore
  keywordBendi: string;
// @ts-ignore
  keywordBenden: string;
  // @ts-ignore
  keywordThoigian: string;
  // @ts-ignore
  public subcription: Subscription;
  public chyenxe: ChuyenXe[] = [];
// @ts-ignore
  // tslint:disable-next-line:variable-name
  private _chuyenXeName: string;
  // tslint:disable-next-line:variable-name
  constructor(private _qlTuyenXeService: QlTuyenXeService) {}
  ngOnInit(): void {
    // @ts-ignore
    this._qlTuyenXeService.getAll().subscribe(data => {
      this.chuyenXeList = data;
      this.chuyenXeListRoot = data;
      // @ts-ignore
    }, error => {
      console.log(123);
      console.log(error);
    });
  }
  get tuyenxeName(): string {
    return this._chuyenXeName;
  }

  set tuyenxeName(value: string) {
    this._chuyenXeName = value;
  }
  // tslint:disable-next-line:typedef
  removeChuyenxe(index: string, maChuyen: string){
    let cf2 = confirm('Bạn có muốn xóa hay không??');
    if (cf2) {
      this._qlTuyenXeService.delete(maChuyen).subscribe(
        data => {
          console.log(data);
          if (data == null) { // @ts-ignore
            this.chuyenXeList.splice(index, 1); }
        }, error => {
          console.log(error);
        }
      );
    }
  }

  // tslint:disable-next-line:typedef
  search() {
    let dem = 0;
    this.chuyenXeList = this.chuyenXeListRoot;
    if (this.keywordMaxe) {
      this.chuyenXeList = this.chuyenXeList.filter(item => {
        return item.maXe.includes(this.keywordMaxe);
      });
      dem++;
    }
    if (this.keywordBendi) {
      this.chuyenXeList = this.chuyenXeList.filter(item => {
        // @ts-ignore
        return item.benDi.includes(this.keywordBendi);
      });
      dem++;
    }
    if (this.keywordBenden) {
      this.chuyenXeList = this.chuyenXeList.filter(item => {
        // @ts-ignore
        return item.benDen.includes(this.keywordBenden);
      });
      dem++;
    }
    if (this.keywordThoigian) {
      this.chuyenXeList = this.chuyenXeList.filter(item => {
        return item.thoiGian.includes(this.keywordThoigian);
      });
      dem++;
    }
    if (dem === 0) {
      this.chuyenXeList = this.chuyenXeListRoot;
    }
  }
  // tslint:disable-next-line:typedef
  searchMaxe(value: string){
    this.keywordMaxe = value;
    this.search();
  }
  // tslint:disable-next-line:typedef
  searchBendi(value: string){
    this.keywordBendi = value;
    this.search();
  }
  // tslint:disable-next-line:typedef
  searchBenden(value: string){
    this.keywordBenden = value;
    this.search();
  }
  // tslint:disable-next-line:typedef
  searchThoigian(value: string){
    this.keywordThoigian = value;
    this.search();
  }
}
