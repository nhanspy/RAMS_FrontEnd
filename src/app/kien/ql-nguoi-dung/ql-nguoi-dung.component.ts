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
  keywordMataikhoan: string;
// @ts-ignore
  keywordMaloai: string;
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
  keywordTaikhoan: string;
  // @ts-ignore
  keywordMatkhau: string;
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _NguoidungName: string;

  // tslint:disable-next-line:variable-name
  constructor(private _qlNguoiDungService: QlNguoiDungService) {
    this._qlNguoiDungService.getAll().subscribe(data => {
      this.NguoidungList = data;
      this.NguoidungListroot = data;
      // @ts-ignore
    }, error => {
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
  removeNguoidung(index: number){
    this.NguoidungList.splice(index, 1);
  }
  // tslint:disable-next-line:typedef
  search() {
    let dem = 0;
    this.NguoidungList = this.NguoidungListroot;
    // if (this.keywordMataikhoan) {
    //   this.NguoidungList = this.NguoidungList.filter(item => {
    //     return item.maTaiKhoan.includes(this.keywordMataikhoan);
    //   });
    //   dem++;
    // }
    if (this.keywordMaloai) {
      this.NguoidungList = this.NguoidungList.filter(item => {
        return item.role.includes(this.keywordMaloai);
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
    if (this.keywordTaikhoan) {
      this.NguoidungList = this.NguoidungList.filter(item => {
        return item.userName.includes(this.keywordTaikhoan);
      });
      dem++;
    }
    if (this.keywordMatkhau) {
      this.NguoidungList = this.NguoidungList.filter(item => {
        return item.password.includes(this.keywordMatkhau);
      });
      dem++;
    }
    if (dem === 0) {
      this.NguoidungList = this.NguoidungListroot;
    }
  }

  // tslint:disable-next-line:typedef
  searchMataikhoan(value: string){
    this.keywordMataikhoan = value;
    this.search();
  }

  // tslint:disable-next-line:typedef
  searchMaloai(value: string){
    this.keywordMaloai = value;
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
  searchTaikhoan(value: string){
    this.keywordTaikhoan = value;
    this.search();
  }
  // tslint:disable-next-line:typedef
  searchMatkhau(value: string){
    this.keywordMatkhau = value;
    this.search();
  }
}

