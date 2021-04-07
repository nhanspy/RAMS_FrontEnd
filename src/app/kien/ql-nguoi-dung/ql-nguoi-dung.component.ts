import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Nguoidung} from '../model/Nguoidung';
//
$('#elemId').width();
@Component({
  selector: 'app-ql-nguoi-dung',
  templateUrl: './ql-nguoi-dung.component.html',
  styleUrls: ['./ql-nguoi-dung.component.css']
})
export class QlNguoiDungComponent implements OnInit {
  constructor() { }
  qlnguoidungs: Nguoidung[] = [
    new Nguoidung( 'Trần Viết Nhân', 'nhan123', '******', '0123456789', 'Nam' ),
    new Nguoidung( 'Lê Thị Thảo', 'thao123', '******', '0123456789', 'Nữ' ),
    new Nguoidung( 'Nguyễn Viết Trọng', 'viettrong', '******', '0123456789', 'Nam' ),
    new Nguoidung( 'Vũ Trung Kiên', 'trungkien', '******', '0123456789', 'Nam' ),
  ]
  // tslint:disable-next-line:typedef
  isDisable = false;

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  removenguoidungs(index: number){
    this.qlnguoidungs.splice(index,1);
  }
}
