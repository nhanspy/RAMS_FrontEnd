import { Component, OnInit } from '@angular/core';
import {QlNguoiDungService} from '../kien-s/ql-nguoi-dung.service';
import {User} from '../Models/User.class';
import {SignupRequest} from '../Models/SignupRequest.class';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {dateOfBirth} from './validator-customer/date-of-birth.validator';

@Component({
  selector: 'app-ql-nguoi-dung',
  templateUrl: './ql-nguoi-dung.component.html',
  styleUrls: ['./ql-nguoi-dung.component.sass']
})
export class QlNguoiDungComponent implements OnInit {
  // @ts-ignore
  totalRec: string;
  page: number = 1;
  // @ts-ignore
  user: SignupRequest;
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
  listError: any = "";
  // @ts-ignore
  keywordEmail: string;
  // @ts-ignore
  nguoiDungForm: FormGroup;
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
  enableEdit = false;
  enableEditIndex = -1;
  enableAddNew = -1;
  // @ts-ignore
  nguoiDung: User;
  ngOnInit(): void {
    // @ts-ignore
    this.user = new User();
    this.nguoiDungForm = new FormGroup({
      // tslint:disable-next-line:max-line-length
      username: new FormControl('', [Validators.required, Validators.pattern('^[^\\d\\t` ~!@#$%^&*()_\\-+=|\\\\{}\\[\\]:;"\'<>,.?\/]{6,20}$')]),
      // tslint:disable-next-line:max-line-length
      ten: new FormControl('', [Validators.required, Validators.pattern('^[^\\d\\t`~!@#$%^&*()_\\-+=|\\\\{}\\[\\]:;"\'<>,.?\/]{3,15}$'), Validators.maxLength(15), Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@(?!.*gmai\\.com|mail|gmial|gail|gmil|gmal|gmaiil|gmeo|gmaill|gnail\\.com|gmail\\.con|outlook\\.com\\.vn|mytam\\.info|mytamentertainment\\.com|yhoo\\.com|yaho\\.com|yahu\\.com|gmail\\.com\\.vn|gamil\\.com|email\\.com.*)([\\w-]+\\.)+[\\w-]{2,4}$')]),
      soDienThoai: new FormControl('', [Validators.pattern('^(\\+84|0)\\d{9,10}'), Validators.required]),
      ngaySinh: new FormControl('', [Validators.required, dateOfBirth] ),
      // diaChi: new FormControl('', [Validators.required]),
      gioiTinh: new FormControl('', [Validators.required])
    });
  }
  // tslint:disable-next-line:typedef
  addnguoidung() {
    // @ts-ignore
    console.log(this.nguoiDungForm.value);
    this._qlNguoiDungService.create(this.nguoiDungForm.value).subscribe(response => {
        alert('Thêm thành công!!');
        this._qlNguoiDungService.getAll().subscribe(data => {
          console.log(data);
          this.NguoidungList = data;
          this.NguoidungListroot = data;
        }, error => {
          console.log(123);
          console.log(error);
        });
      },
      // @ts-ignore
      error => {
        console.log(error);
      });
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.addnguoidung();
  }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  editNguoidung(e, i) {
    this.enableEdit = true;
    this.enableEditIndex = i;
    this.enableAddNew = 1;

    this.nguoiDungForm.patchValue(this.nguoiDung);
    console.log(this.nguoiDungForm.value);
    console.log(i, e);
    console.log(this.enableAddNew);
  }
  // tslint:disable-next-line:typedef
  new(){
    // @ts-ignore
    this.nguoiDung = new User();
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
}
