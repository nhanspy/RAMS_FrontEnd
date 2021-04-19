import { Component, OnInit } from '@angular/core';
import {QlNhaXeService} from '../../Services/kien-s/ql-nha-xe.service';
import {NhaXe} from '../../nhan/Models/NhaXe.class';

@Component({
  selector: 'app-ql-nha-xe',
  templateUrl: './ql-nha-xe.component.html',
  styleUrls: ['./ql-nha-xe.component.css']
})
export class QlNhaXeComponent implements OnInit {
  // @ts-ignore
  totalRec: string;
  page: number = 1;
  isDisable = false;
  nhaxeList: NhaXe[] = [];
  nhaxeListroot: NhaXe[] = [];
// @ts-ignore
  keywordManhaxe: string;
// @ts-ignore
  keywordTennhaxe: string;
  // tslint:disable-next-line:variable-name
  constructor(private _qlNhaXeService: QlNhaXeService) {
    this._qlNhaXeService.getAll().subscribe(data => {
    console.log(data);
    this.nhaxeList = data;
    this.nhaxeListroot = data;
  }, error => {
    console.log(123);
    console.log(error);
  });
  }
  // @ts-ignore
  enableEditnhaxe = false;
  enableEditIndexnhaxe = -1;
  enableAddNewnhaxe = -1;
  // @ts-ignore
  nhaXe: NhaXe;
  // @ts-ignore
  ngOnInit(): void {
    // @ts-ignore
    this.nhaXe = new NhaXe();
  }
  // tslint:disable-next-line:typedef
  addnhaxe() {
    // @ts-ignore
    console.log(this.nhaXe);
    this._qlNhaXeService.create(this.nhaXe).subscribe(response => {
        alert('Thêm thành công!!');
        console.log(response);
      },
      // @ts-ignore
      error => {
        console.log(error);
      });
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(123);
    console.log(this.nhaXe)
    this.addnhaxe();
  }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  editNhaxe(e, i) {
    this.enableEditnhaxe = true;
    this.enableEditIndexnhaxe = i;
    console.log(i, e);
  }
  // tslint:disable-next-line:typedef
  new(){
    // @ts-ignore
    this.nhaXe = new NhaXe();
  }
  // tslint:disable-next-line:typedef
  removeNhaxe(index: string, maNhaxe: string){
    let cf1 = confirm('Bạn có muốn xóa hay không??');
    if (cf1) {
      this._qlNhaXeService.delete(maNhaxe).subscribe(
        data => {
          console.log(data);
          if (data == null) { // @ts-ignore
            this.nhaxeList.splice(index, 1); }
        }, error => {
          console.log(error);
        }
      );
    }
  }
  // tslint:disable-next-line:typedef
  search() {
    let dem = 0;
    this.nhaxeList = this.nhaxeListroot;
    if (this.keywordManhaxe) {
      this.nhaxeList = this.nhaxeList.filter(item => {
        return item.maNhaXe.includes(this.keywordManhaxe);
      });
      dem++;
    }
    if (this.keywordTennhaxe) {
      this.nhaxeList = this.nhaxeList.filter(item => {
        return item.tenNhaXe.includes(this.keywordTennhaxe);
      });
      dem++;
    }
    if (dem === 0) {
      this.nhaxeList = this.nhaxeListroot;
    }
  }
  // tslint:disable-next-line:typedef
  searchTennhaxe(value: string){
    this.keywordTennhaxe = value;
    this.search();
  }
  // tslint:disable-next-line:typedef
  searchManhaxe(value: string){
    this.keywordManhaxe = value;
    this.search();
  }
}
