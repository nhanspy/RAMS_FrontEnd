import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DangKyComponent } from './thao/dang-ky/dang-ky.component';
import { DangNhapComponent } from './thao/dang-nhap/dang-nhap.component';
import {KiemTraVeComponent} from './thao/kiem-tra-ve/kiem-tra-ve.component';
import {FormsModule} from '@angular/forms';
import { XemChiTietChuyenXeComponent } from './nhan/xem-chi-tiet-chuyen-xe/xem-chi-tiet-chuyen-xe.component';
import { DatVeComponent } from './nhan/dat-ve/dat-ve.component';
import { QlNguoiDungComponent } from './kien/ql-nguoi-dung/ql-nguoi-dung.component';
import { QlTuyenXeComponent } from './kien/ql-tuyen-xe/ql-tuyen-xe.component';
import { QlNhaXeComponent } from './kien/ql-nha-xe/ql-nha-xe.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DangKyComponent,
    DangNhapComponent,
    KiemTraVeComponent,
    XemChiTietChuyenXeComponent,
    DatVeComponent,
    QlNguoiDungComponent,
    QlTuyenXeComponent,
    QlNhaXeComponent,
    DangKyComponent,
    DangNhapComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
