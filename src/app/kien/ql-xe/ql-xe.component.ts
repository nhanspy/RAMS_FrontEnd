import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Xe} from '../Models/Xe.class';
import {QlXeService} from '../kien-s/ql-xe.service';

@Component({
  selector: 'app-ql-xe',
  templateUrl: './ql-xe.component.html',
  styleUrls: ['./ql-xe.component.css']
})
export class QlXeComponent implements OnInit {
  // @ts-ignore
  xeForm: FormGroup;
  // @ts-ignore
  totalRec: string;
  page: number = 1;
  isDisable = false;
  xeList: Xe[] = [];
  xeListRoot: Xe[] = [];
// @ts-ignore
  keywordMaxe: string;
// @ts-ignore
  keywordBiensoxe: string;
// @ts-ignore
  keywordManhaxe: string;
  // @ts-ignore
  keywordTennhaxe: string;
  // @ts-ignore
  keywordMaloaixe: string;
  // @ts-ignore
  keywordSochongoi: string;
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  constructor(private _qlXeService: QlXeService,
              private formBuilder: FormBuilder) {
    this.xeForm = this.formBuilder.group({
      maXe: new FormControl('', [Validators.required]),
      bienSoXe: new FormControl('', [Validators.required]),
      maNhaXe: new FormControl('', [Validators.required]),
      tenNhaXe: new FormControl('', [Validators.required]),
      maLoaiXe: new FormControl('', [Validators.required]),
      soChoNgoi: new FormControl('', [Validators.required]),
    });
    this._qlXeService.getAll().subscribe(data => {
      console.log(data);
      this.xeList = data;
      this.xeListRoot = data;
    }, error => {
      console.log(123);
      console.log(error);
    });
  }

  // @ts-ignore
  enableEditxe = false;
  enableEditIndexxe = -1;
  enableAddNewxe = -1;
  // @ts-ignore
  xe: Xe;

  // @ts-ignore
  validation_messages = {
    'maXe': [
      {type: 'required',message: 'Trường này không được để trống!'}
    ],
    'bienSoXe': [
      {type: 'required',message: 'Trường này không được để trống!'}
    ],
    'maNhaXe':[
      {type: 'required',message: 'Trường này không được để trống!'}
    ],
    'tenNhaXe':[
      {type: 'required',message: 'Trường này không được để trống!'}
    ],
    'maLoaiXe':[
      {type: 'required',message: 'Trường này không được để trống!'}
    ],
    'soChoNgoi':[
      {type: 'required',message: 'Trường này không được để trống!'}
    ]
  };
  ngOnInit(): void {
    // @ts-ignore
    this.xe = new Xe();
  }

  // tslint:disable-next-line:typedef
  addxe() {
    // @ts-ignore
    console.log(this.xeForm.value);
    this._qlXeService.create(this.xeForm.value).subscribe(response => {
        alert('Thêm thành công!!');
        this._qlXeService.getAll().subscribe(data => {
          console.log(data);
          this.xeList = data;
          this.xeListRoot = data;
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
    this.addxe();
  }

  // @ts-ignore
  // tslint:disable-next-line:typedef
  editxe(i, e) {
    this.enableEditxe = true;
    this.enableEditIndexxe = i;
    this.enableAddNewxe = 1;
    this.xeForm.patchValue(this.xe);
    // @ts-ignore
    this.xeForm.get('maNhaXe').patchValue(this.xe.nhaXe.maNhaXe);
    // @ts-ignore
    this.xeForm.get('tenNhaXe').patchValue(this.xe.nhaXe.tenNhaXe);
    // @ts-ignore
    this.xeForm.get('maLoaiXe').patchValue(this.xe.loaiXe.maLoaiXe);
    console.log(this.xeForm.value);
    console.log(this.xe);
  }

  // tslint:disable-next-line:typedef
  new() {
    // @ts-ignore
    this.xe = new Xe();
  }

  // tslint:disable-next-line:typedef
  removexe(index: string, maXe: string) {
    let cf2 = confirm('Bạn có muốn xóa hay không??');
    if (cf2) {
      console.log(maXe);
      this._qlXeService.delete(maXe).subscribe(
        data => {
          console.log(data);
          if (data == null) { // @ts-ignore
            this.xeList.splice(index, 1);
          }
        }, error => {
          console.log(error);
        }
      );
    }
  }

  // tslint:disable-next-line:typedef
  search() {
    let dem = 0;
    this.xeList = this.xeListRoot;
    if (this.keywordMaxe) {
      this.xeList = this.xeList.filter(item => {
        return item.maXe.includes(this.keywordMaxe);
      });
      dem++;
    }
    if (this.keywordBiensoxe) {
      this.xeList = this.xeList.filter(item => {
        // @ts-ignore
        return item.bienSoXe.includes(this.keywordBiensoxe);
      });
      dem++;
    }
    if (this.keywordManhaxe) {
      this.xeList = this.xeList.filter(item => {
        // @ts-ignore
        return item.nhaXe.maNhaXe.includes(this.keywordManhaxe);
      });
      dem++;
    }
    if (this.keywordTennhaxe) {
      this.xeList = this.xeList.filter(item => {
        return item.nhaXe.tenNhaXe.includes(this.keywordTennhaxe);
      });
      dem++;
    }
    if (this.keywordMaloaixe) {
      this.xeList = this.xeList.filter(item => {
        return item.loaiXe.maLoaiXe.includes(this.keywordMaloaixe);
      });
      dem++;
    }
    if (dem === 0) {
      this.xeList = this.xeListRoot;
    }
  }

  // tslint:disable-next-line:typedef
  searchMaxe(value: string) {
    // console.log(value);
    this.keywordMaxe = value;
    this.search();
  }

  // tslint:disable-next-line:typedef
  searchBiensoxe(value: string) {
    console.log(this.keywordBiensoxe);
    this.keywordBiensoxe = value;
    this.search();
  }

  // tslint:disable-next-line:typedef
  searchManhaxe(value: string) {
    this.keywordManhaxe = value;
    console.log(this.keywordManhaxe);
    this.search();
  }

  // tslint:disable-next-line:typedef
  searchTennhaxe(value: string) {
    this.keywordTennhaxe = value;
    console.log(this.keywordManhaxe);
    this.search();
  }

  // tslint:disable-next-line:typedef
  searchMaloaixe(value: string) {
    this.keywordMaloaixe = value;
    console.log(this.keywordMaloaixe);
    this.search();
  }
}
