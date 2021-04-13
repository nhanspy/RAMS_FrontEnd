import { Component, OnInit } from '@angular/core';
import {QlNguoiDungService} from '../../Services/kien-s/ql-nguoi-dung.service';
import {Subscription} from 'rxjs';
import {User} from '../../nhan/Models/User.class';

@Component({
  selector: 'app-ql-nguoi-dung',
  templateUrl: './ql-nguoi-dung.component.html',
  styleUrls: ['./ql-nguoi-dung.component.css']
})


// @ts-ignore
export class QlNguoiDungComponent implements OnInit {
  // tslint:disable-next-line:typedef
  // @ts-ignore
  public subscription: Subscription;
  public nguoidung: User[] = [];
  isDisable = false;
  NguoidungList: User[] = [];
  NguoidungListroot: User[] = [];
  // @ts-ignore
  keywordUsername: string;
  // @ts-ignore
  keywordRole: string;
  // @ts-ignore
  keywordTen: string;
  // @ts-ignore
  keywordSodienthoai: string;
  // @ts-ignore
  keywordNgaysinh: string;
  // @ts-ignore
  keywordDaichi: string;
  // @ts-ignore
  keywordGioitinh: string;
  // @ts-ignore
  keywordEmail: string;
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _NguoidungName: string;

  // tslint:disable-next-line:variable-name
  constructor(private _qlNguoiDungService: QlNguoiDungService) {
    this._qlNguoiDungService.getAll().subscribe(data => {
      console.log(data);
      this.NguoidungList = data;
      this.NguoidungListroot = data;
    }, error => {
      console.log(123);
      console.log(error);
    });
  }
  get NguoidungName(): string {
    return this._NguoidungName;
  }

  set NguoidungName(value: string) {
    this._NguoidungName = value;
  }
  // tslint:disable-next-line:typedef
  removeNguoidung(index: number, id: number){
    let cf = confirm('Bạn có muốn xóa hay không??');
    if (cf) {
    this._qlNguoiDungService.delete(id).subscribe(
      data => {
        console.log(data);
        if (data == null) { this.NguoidungList.splice(index, 1); }
      }, error => {
        console.log(error);
      }
    );
    }
  }
  // tslint:disable-next-line:typedef
  search() {
    let dem = 0;
    this.NguoidungList = this.NguoidungListroot;
    if (this.keywordUsername) {
      this.NguoidungList = this.NguoidungList.filter(item => {
        return item.username.includes(this.keywordUsername);
      });
      dem++;
    }
    if (this.keywordRole) {
      this.NguoidungList = this.NguoidungList.filter(item => {
        return item.roles.name.includes(this.keywordRole);
      });
      dem++;
    }
    if (this.keywordTen) {
      this.NguoidungList = this.NguoidungList.filter(item => {
        return item.ten.includes(this.keywordTen);
      });
      dem++;
    }
    if (this.keywordSodienthoai) {
      this.NguoidungList = this.NguoidungList.filter(item => {
        return item.soDienThoai.includes(this.keywordSodienthoai);
      });
      dem++;
    }
    if (this.keywordNgaysinh) {
      this.NguoidungList = this.NguoidungList.filter(item => {
        return item.ngaySinh.includes(this.keywordNgaysinh);
      });
      dem++;
    }
    if (this.keywordDaichi) {
      this.NguoidungList = this.NguoidungList.filter(item => {
        return item.diaChi.includes(this.keywordDaichi);
      });
      dem++;
    }
    if (this.keywordEmail) {
      this.NguoidungList = this.NguoidungList.filter(item => {
        return item.username.includes(this.keywordEmail);
      });
      dem++;
    }
    if (dem === 0) {
      this.NguoidungList = this.NguoidungListroot;
    }
  }

  // tslint:disable-next-line:typedef
  searchUsername(value: string){
    this.keywordUsername = value;
    this.search();
  }

  // tslint:disable-next-line:typedef
  searchRole(value: string){
    this.keywordRole = value;
    this.search();
  }
  // tslint:disable-next-line:typedef
  searchTen(value: string){
    this.keywordTen = value;
    this.search();
  }

  // tslint:disable-next-line:typedef
  searchSodienthoai(value: string){
    this.keywordSodienthoai = value;
    this.search();
  }
  // tslint:disable-next-line:typedef
  searchNgaysinh(value: string){
    this.keywordNgaysinh = value;
    this.search();
  }
  // tslint:disable-next-line:typedef
  searchDiachi(value: string){
    this.keywordDaichi = value;
    this.search();
  }
  // tslint:disable-next-line:typedef
  searchEmail(value: string){
    this.keywordEmail = value;
    this.search();
  }

  // tslint:disable-next-line:typedef
  searchGioiTinh(value: string){
    this.keywordGioitinh = value;
    this.search();
  }
}

