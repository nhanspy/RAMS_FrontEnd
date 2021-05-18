import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Ghe} from '../Models/Ghe.class';
import {QlGheService} from '../kien-s/ql-ghe.service';


@Component({
  selector: 'app-ql-ghe',
  templateUrl: './ql-ghe.component.html',
  // styleUrls: ['./ql-ghe.component.sass']
})
export class QlGheComponent implements OnInit {
  // @ts-ignore
  gheForm: FormGroup;
  // @ts-ignore
  totalRec: string;
  page: number = 1;
  isDisable = false;
  gheList: Ghe[] = [];
  gheListroot: Ghe[] = [];
// @ts-ignore
  keywordMaghe: string;
// @ts-ignore
  keywordMaloaighe: string;
  // @ts-ignore
  keywordMatrangthai: string;
  // @ts-ignore
  keywordTentrangthai: string;
  // @ts-ignore
  keywordTenloaighe: string;

  // tslint:disable-next-line:variable-name
  constructor(private _qlGheService: QlGheService) {
    this._qlGheService.getAll().subscribe(data => {
      console.log(data);
      this.gheList = data;
      this.gheListroot = data;
    }, error => {
      console.log(123);
      console.log(error);
    });
  }
  // @ts-ignore
  enableEditghe = false;
  enableEditIndexghe = -1;
  enableAddNewghe = -1;
  // @ts-ignore
  ghe: Ghe;
  // @ts-ignore
  ngOnInit(): void {
    // @ts-ignore
    this.ghe = new Ghe();
    this.gheForm = new FormGroup({
      maGhe: new FormControl('', [Validators.required]),
      maLoaiGhe: new FormControl('', [Validators.required]),
      tenLoaiGhe: new FormControl('', [Validators.required]),
      maTrangThai: new FormControl('', [Validators.required]),
      tenTrangThai: new FormControl('', [Validators.required]),

    });
  }
  // tslint:disable-next-line:typedef
  addghe() {
    // @ts-ignore
    console.log(this.gheForm.value);
    this._qlGheService.create(this.gheForm.value).subscribe(response => {
        alert('Thêm thành công!!');
        // console.log(response);
        this._qlGheService.getAll().subscribe(data => {
          console.log(data);
          this.gheList = data;
          this.gheListroot = data;
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
    this.addghe();
  }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  editghe(e, i) {
    this.enableEditghe = true;
    this.enableEditIndexghe = i;
    this.enableAddNewghe = 1;
    this.gheForm.patchValue(this.ghe);
    // @ts-ignore
    this.gheForm.get('maLoaiGhe').patchValue(this.ghe.loaiGhe.maLoaiGhe);
    // @ts-ignore
    this.gheForm.get('tenLoaiGhe').patchValue(this.ghe.loaiGhe.tenLoaiGhe);
    // @ts-ignore
    this.gheForm.get('maTrangThai').patchValue(this.ghe.trangThaiGhe.maTrangThai);
    // @ts-ignore
    this.gheForm.get('tenTrangThai').patchValue(this.ghe.trangThaiGhe.tenTrangThai);
    console.log(this.gheForm.value);
    console.log(this.gheForm);
  }
  // tslint:disable-next-line:typedef
  new(){
    // @ts-ignore
    this.ghe = new Ghe();
  }
  // tslint:disable-next-line:typedef
  removeghe(index: string, maGhe: string){
    let cf1 = confirm('Bạn có muốn xóa hay không??');
    if (cf1) {
      this._qlGheService.delete(maGhe).subscribe(
        data => {
          console.log(data);
          if (data == null) {// @ts-ignore
            this.gheList.splice(index, 1); }
        }, error => {
          console.log(error);
        }
      );
    }
  }
  // tslint:disable-next-line:typedef
  search() {
    let dem = 0;
    this.gheList = this.gheListroot;
    if (this.keywordMaghe) {
      this.gheList = this.gheList.filter(item => {
        return item.maGhe.includes(this.keywordMaghe);
      });
      dem++;
    }
    if (this.keywordMaloaighe) {
      this.gheList = this.gheList.filter(item => {
        return item.loaiGhe.maLoaiGhe.includes(this.keywordMaloaighe);
      });
      dem++;
    }
    if (this.keywordTenloaighe) {
      this.gheList = this.gheList.filter(item => {
        return item.loaiGhe.tenLoaiGhe.includes(this.keywordTenloaighe);
      });
      dem++;
    }
    if (this.keywordMatrangthai) {
      this.gheList = this.gheList.filter(item => {
        return item.trangThaiGhe.maTrangThai.includes(this.keywordMatrangthai);
      });
      dem++;
      // tslint:disable-next-line:align
    }    if (this.keywordTentrangthai) {
      this.gheList = this.gheList.filter(item => {
        return item.trangThaiGhe.tenTrangThai.includes(this.keywordTentrangthai);
      });
      dem++;
    }
    if (dem === 0) {
      this.gheList = this.gheListroot;
    }
  }
  // tslint:disable-next-line:typedef
  searchMaghe(value: string){
    this.keywordMaghe = value;
    this.search();
  }
  // tslint:disable-next-line:typedef
  searchMaloaighe(value: string){
    this.keywordMaloaighe = value;
    this.search();
  }
  // tslint:disable-next-line:typedef
  searchTenloaighe(value: string){
    this.keywordTenloaighe = value;
    this.search();
  }
  // tslint:disable-next-line:typedef
  searchMatrangthai(value: string){
    this.keywordMatrangthai = value;
    this.search();
  }
  // tslint:disable-next-line:typedef
  searchTenthangthai(value: string){
    this.keywordTentrangthai = value;
    this.search();
  }
}

