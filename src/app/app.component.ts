import { Component } from '@angular/core';
import {Nguoidung} from './kien/model/Nguoidung';
import {QlNguoiDungService} from './Services/kien-s/ql-nguoi-dung.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';
  nguoidungs: Nguoidung[] | undefined;
  qlnguoidungService: QlNguoiDungService;
  constructor() {
    this.qlnguoidungService = new QlNguoiDungService();
  }
  // tslint:disable-next-line:typedef
  public getNguoidungs(){
    this.nguoidungs = this.qlnguoidungService.getNguoidungs();
  }
}
