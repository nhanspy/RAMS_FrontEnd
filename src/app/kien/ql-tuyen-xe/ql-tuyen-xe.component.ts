import { Component, OnInit } from '@angular/core';
import {QlTuyenXeService} from '../kien-s/ql-tuyen-xe.service';
import {ChuyenXe} from '../Models/ChuyenXe.class';
import {Ben} from '../Models/Ben.class';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ql-tuyen-xe',
  templateUrl: './ql-tuyen-xe.component.html',
  // styleUrls: ['./ql-tuyen-xe.component.sass']
})
export class QlTuyenXeComponent implements OnInit {
  // @ts-ignore
  chuyenXeForm: FormGroup;
  // @ts-ignore
  totalRec: string;
  page: number = 1;
  isDisable = false;
  chuyenXeList: ChuyenXe[] = [];
  chuyenXeListRoot: ChuyenXe[] = [];
  benXeList: Ben[] = [];
  form: any;
// @ts-ignore
  keywordMaxe: string;
// @ts-ignore
  keywordBendi: Ben;
// @ts-ignore
  keywordBenden: Ben;

//   // @ts-ignore
//   keywordBendi: string;
// // @ts-ignore
//   keywordBenden: string;
  // @ts-ignore
  keywordThoigian: string;

  // @ts-ignore
  // tslint:disable-next-line:variable-name
  constructor(private _qlTuyenXeService: QlTuyenXeService,
              private router: Router) {
    this._qlTuyenXeService.getAll().subscribe(data => {
      console.log(data);
      this.chuyenXeList = data;
      this.chuyenXeListRoot = data;
    }, error => {
      console.log(123);
      console.log(error);
    });

    this._qlTuyenXeService.getAllBenXe().subscribe(
      data => {
        this.benXeList = data;
        // console.log(this.benXeList);
      },
      error => {
        console.log(error);
      }
    );
  }
  // @ts-ignore
  enableEditchuyenxe = false;
  enableEditIndexchuyenxe = -1;
  enableAddNewchuyenxe = -1;
  // @ts-ignore
  chuyenXes: ChuyenXe;
  // @ts-ignore
  chuyenXePush: ChuyenXe;
  // @ts-ignore
  ngOnInit(): void {
    // @ts-ignore
    this.chuyenXes = new ChuyenXe();
    this.chuyenXeForm = new FormGroup({
      maChuyen: new FormControl('',[Validators.required]),
      thoiGian: new FormControl('',[Validators.required]),
      benDi: new FormControl(),
      benDen: new FormControl()
    });
  }
  // tslint:disable-next-line:typedef
  addchuyenxe() {
    // @ts-ignore
    console.log(this.chuyenXeForm.value);
    this._qlTuyenXeService.create(this.chuyenXeForm.value).subscribe(response => {
        alert('Thêm thành công!!');
        // console.log(response);
        this._qlTuyenXeService.getAll().subscribe(data => {
          console.log(data);
          this.chuyenXeList = data;
          this.chuyenXeListRoot = data;
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
    // console.log(123);
    // console.log(this.chuyenXes);
    this.addchuyenxe();

  }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  editchuyenxe(i, e) {
    this.enableEditchuyenxe = true;
    this.enableEditIndexchuyenxe = i;
    this.enableAddNewchuyenxe = 1;
    this.chuyenXeForm.patchValue(this.chuyenXes);
    // this.chuyenXeForm.setValue('benDi': this.chuyenXes.benDi);
    console.log(this.chuyenXeForm.value);
    console.log(i, e);
    console.log(this.chuyenXes);
    // @ts-ignore
    // this.chuyenXeForm = new ChuyenXe();
    // console.log(this.chuyenXeForm.value);
    // // @ts-ignore
    // this.chuyenXePush.maChuyen = this.chuyenXes.maChuyen;
    // this.chuyenXePush.thoiGian = this.chuyenXes.thoiGian;
    // // this.chuyenXePush.xe = tuyenXe.xe;
    // this.chuyenXePush.benDi = this.chuyenXes.benDi;
    // this.chuyenXePush.benDen = this.chuyenXes.benDen;
    // this.enableEditchuyenxe = true;
    // this.enableEditIndexchuyenxe = i;
    // console.log(this.chuyenXePush);
    // console.log(this.chuyenXeForm.value);
    // console.log(i, e);
    // console.log(this.chuyenXeForm);
  }
  // tslint:disable-next-line:typedef
  new(){
    // @ts-ignore
    this.chuyenXes = new ChuyenXe();
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
        return item.maChuyen.includes(this.keywordMaxe);
      });
      dem++;
    }
    if (this.keywordBendi) {
      this.chuyenXeList = this.chuyenXeList.filter(item => {
        // @ts-ignore
        return item.benDi.maBen.includes(this.keywordBendi.maBen);
      });
      dem++;
    }
    if (this.keywordBenden) {
      this.chuyenXeList = this.chuyenXeList.filter(item => {
        // @ts-ignore
        return item.benDen.maBen.includes(this.keywordBenden.maBen);
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
    // console.log(value);
    this.keywordMaxe = value;
    this.search();
  }
  // tslint:disable-next-line:typedef
  searchBendi(benDi: any){
    console.log(this.keywordBendi);
    // this.keywordBendi = value;
    this.search();
  }
  // tslint:disable-next-line:typedef
  searchBenden(benDen: any){
    // this.keywordBenden = value;
    console.log(this.keywordBenden);
    this.search();
  }
  // tslint:disable-next-line:typedef
  searchThoigian(value: string){
    this.keywordThoigian = value;
    this.search();
  }

  // tslint:disable-next-line:typedef
  view(event: any){
    console.log(event);
    // @ts-ignore
    // this.chuyenXePush.benDi = this.benXeList.filter(item => {
    //   return item.maBen === event;
    // })[0];
    // this.setUp();
    // console.log(event);
    // console.log(this.chuyenXePush);
    // console.log(this.chuyenXes);
  }

  // tslint:disable-next-line:typedef
  view2(event: string){
    // @ts-ignore
    this.chuyenXePush.benDen = this.benXeList.filter(item => {
      return item.maBen === event;
    })[0];
    console.log(event);
    console.log(this.chuyenXePush);
    console.log(this.chuyenXes);
  }

  // tslint:disable-next-line:typedef
  cancelbutton(){
    console.log(this.chuyenXePush);
    // @ts-ignore
    this.chuyenXePush = new ChuyenXe();
  }

  // tslint:disable-next-line:typedef
  setBenDi(value: any){
    console.log(value.target);
    this.chuyenXePush.benDen = this.benXeList.filter(item => {
      return item.maBen === value;
    })[0];
  }

}

