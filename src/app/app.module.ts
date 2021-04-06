import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DangKyComponent } from './thao/dang-ky/dang-ky.component';
import { DangNhapComponent } from './thao/dang-nhap/dang-nhap.component';

import { XemChiTietChuyenXeComponent } from './nhan/xem-chi-tiet-chuyen-xe/xem-chi-tiet-chuyen-xe.component';
import { DatVeComponent } from './nhan/dat-ve/dat-ve.component';
import {HttpClientModule} from '@angular/common/http';
import {XemChiTietChuyenXeService} from './nhan/service/xem-chi-tiet-chuyen-xe.service';
import { XemLichSuComponent } from './trong/xem-lich-su/xem-lich-su.component';
import { TimKiemComponent } from './trong/tim-kiem/tim-kiem.component';
import { QlNguoiDungComponent } from './kien/ql-nguoi-dung/ql-nguoi-dung.component';
import { QlTuyenXeComponent } from './kien/ql-tuyen-xe/ql-tuyen-xe.component';
import { QlNhaXeComponent } from './kien/ql-nha-xe/ql-nha-xe.component';
import {KiemTraVeComponent} from './thao/kiem-tra-ve/kiem-tra-ve.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    XemChiTietChuyenXeComponent,
    DatVeComponent,
    QlNguoiDungComponent,
    QlTuyenXeComponent,
    QlNhaXeComponent,
    DangKyComponent,
    DangNhapComponent,
    KiemTraVeComponent,
    XemLichSuComponent,
    TimKiemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [
    XemChiTietChuyenXeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
