import { Component, OnInit } from '@angular/core';
import {Tuyenxe} from '../model/tuyenxe';
// @ts-ignore
import {QlTuyenXeService} from '../../Services/kien-s/ql-tuyen-xe.service';
@Component({
  selector: 'app-ql-tuyen-xe',
  templateUrl: './ql-tuyen-xe.component.html',
  styleUrls: ['./ql-tuyen-xe.component.css']
})
export class QlTuyenXeComponent implements OnInit {
  isDisable = false;
  tuyenxeList: Tuyenxe[] = [];
  tuyenxeListroot: Tuyenxe[] = [];
// @ts-ignore
  keywordMaxe: string;
// @ts-ignore
  keywordBendi: string;
// @ts-ignore
  keywordBenden: string;
  // @ts-ignore
  keywordThoigian: string;
// @ts-ignore
  // tslint:disable-next-line:variable-name
  private _tuyenxeName: string;
  // tslint:disable-next-line:variable-name
  constructor(private _qlTuyenXeService: QlTuyenXeService) {}
  ngOnInit(): void {
    // @ts-ignore
    this._qlTuyenXeService.getAll().subscribe(data => {
      this.tuyenxeList = data;
      this.tuyenxeListroot = data;
      // @ts-ignore
    }, error => {
      console.log(error);
    });
  }
  get tuyenxeName(): string {
    return this._tuyenxeName;
  }

  set tuyenxeName(value: string) {
    this._tuyenxeName = value;
  }
  // tslint:disable-next-line:typedef
  removetuyenxe(index: number){
    this.tuyenxeList.splice(index, 1);
  }

  // tslint:disable-next-line:typedef
  search() {
    let dem = 0;
    this.tuyenxeList = this.tuyenxeListroot;
    if (this.keywordMaxe) {
      this.tuyenxeList = this.tuyenxeList.filter(item => {
        return item.maXe.includes(this.keywordMaxe);
      });
      dem++;
    }
    if (this.keywordBendi) {
      this.tuyenxeList = this.tuyenxeList.filter(item => {
        return item.benDi.includes(this.keywordBendi);
      });
      dem++;
    }
    if (this.keywordBenden) {
      this.tuyenxeList = this.tuyenxeList.filter(item => {
        return item.benDen.includes(this.keywordBenden);
      });
      dem++;
    }
    if (this.keywordThoigian) {
      this.tuyenxeList = this.tuyenxeList.filter(item => {
        return item.thoiGian.includes(this.keywordThoigian);
      });
      dem++;
    }
    if (dem === 0) {
      this.tuyenxeList = this.tuyenxeListroot;
    }
  }
  // tslint:disable-next-line:typedef
  searchBienso(value: string){
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
