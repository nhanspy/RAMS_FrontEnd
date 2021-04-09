import { Component, OnInit } from '@angular/core';
import {Nguoidung} from '../model/Nguoidung';
import {QlNguoiDungService} from '../../Services/kien-s/ql-nguoi-dung.service';

@Component({
  selector: 'app-ql-nguoi-dung',
  templateUrl: './ql-nguoi-dung.component.html',
  styleUrls: ['./ql-nguoi-dung.component.css']
})


// @ts-ignore
export class QlNguoiDungComponent implements OnInit {
  isDisable = false;
  NguoidungList: Nguoidung[] = [];
  NguoidungListroot: Nguoidung[] = [];
// @ts-ignore
  keywordName: string;
// @ts-ignore
  keywordUser: string;
// @ts-ignore
  keywordPassword: string;
// @ts-ignore
  keywordPhone: string;
// @ts-ignore
  keywordGender: string;
// @ts-ignore
  // tslint:disable-next-line:variable-name
  private _NguoidungName: string;

  // tslint:disable-next-line:variable-name
  constructor(private _qlNguoiDungService: QlNguoiDungService) {}

  // ngOnInit(): void {
  //   this.NguoidungList = this._qlNguoiDungService.;
  //   this.NguoidungListroot = this._qlNguoiDungService.nguoidungList;
  // }



  get NguoidungName(): string {
    return this._NguoidungName;
  }

  set NguoidungName(value: string) {
    this._NguoidungName = value;
  }
  // tslint:disable-next-line:typedef
  removeNguoidung(index: number){
    this.NguoidungList.splice(index, 1);
  }

  // tslint:disable-next-line:typedef
  search() {
    let dem = 0;
    this.NguoidungList = this.NguoidungListroot;
    if (this.keywordName) {
      this.NguoidungList = this.NguoidungList.filter(item => {
        return item.name.includes(this.keywordName);
      });
      dem++;
    }
    if (this.keywordUser) {
      this.NguoidungList = this.NguoidungList.filter(item => {
        return item.name.includes(this.keywordUser);
      });
      dem++;
    }
    if (this.keywordPassword) {
      this.NguoidungList = this.NguoidungList.filter(item => {
        return item.name.includes(this.keywordPassword);
      });
      dem++;
    }
    if (this.keywordPhone) {
      this.NguoidungList = this.NguoidungList.filter(item => {
        return item.name.includes(this.keywordPhone);
      });
      dem++;
    }
    if (this.keywordGender) {
      this.NguoidungList = this.NguoidungList.filter(item => {
        return item.name.includes(this.keywordGender);
      });
      dem++;
    }
    if (dem === 0) {
      this.NguoidungList = this.NguoidungListroot;
    }
  }

  // tslint:disable-next-line:typedef
  searchName(value: string){
    this.keywordName = value;
    this.search();
  }

  // tslint:disable-next-line:typedef
  searchUser(value: string){
    this.keywordUser = value;
    this.search();
  }
  // tslint:disable-next-line:typedef
  searchPassword(value: string){
    this.keywordPassword = value;
    this.search();
  }

  // tslint:disable-next-line:typedef
  searchPhone(value: string){
    this.keywordPhone = value;
    this.search();
  }
}

