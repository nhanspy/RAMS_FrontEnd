import { Component, OnInit } from '@angular/core';
import {QlNhaXeService} from '../../Services/kien-s/ql-nha-xe.service';
import {Subscription} from 'rxjs';
import {NhaXe} from '../../nhan/Models/NhaXe.class';


@Component({
  selector: 'app-ql-nha-xe',
  templateUrl: './ql-nha-xe.component.html',
  styleUrls: ['./ql-nha-xe.component.css']
})
export class QlNhaXeComponent implements OnInit {
  isDisable = false;
  nhaxeList: NhaXe[] = [];
  nhaxeListroot: NhaXe[] = [];
// @ts-ignore
  keywordManhaxe: string;
// @ts-ignore
  keywordTennhaxe: string;
  // @ts-ignore
  public subcription: Subscription;
  public nhaxe: NhaXe[] = [];
// @ts-ignore
  // tslint:disable-next-line:variable-name
  private _nhaxeName: string;
  // tslint:disable-next-line:variable-name
  constructor(private _qlNhaXeService: QlNhaXeService) {}
  ngOnInit(): void {
    this._qlNhaXeService.getAll().subscribe(data => {
      this.nhaxeList = data;
      this.nhaxeListroot = data;
    }, error => {
      console.log(123);
      console.log(error);
    });
  }
  get nhaxeName(): string {
    return this._nhaxeName;
  }

  set nhaxeName(value: string) {
    this._nhaxeName = value;
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
