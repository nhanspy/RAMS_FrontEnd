import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { XemChiTietChuyenXeComponent } from './nhan/xem-chi-tiet-chuyen-xe/xem-chi-tiet-chuyen-xe.component';
import { DatVeComponent } from './nhan/dat-ve/dat-ve.component';
import { QlNguoiDungComponent } from './kien/ql-nguoi-dung/ql-nguoi-dung.component';
import { QlTuyenXeComponent } from './kien/ql-tuyen-xe/ql-tuyen-xe.component';
import { QlNhaXeComponent } from './kien/ql-nha-xe/ql-nha-xe.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddNguoidungComponent } from './kien/add-nguoidung/add-nguoidung.component';
import { AddNhaXeComponent } from './kien/add-nha-xe/add-nha-xe.component';
import { AddTuyenXeComponent } from './kien/add-tuyen-xe/add-tuyen-xe.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
    declarations: [
        AppComponent,
        XemChiTietChuyenXeComponent,
        DatVeComponent,
        QlNguoiDungComponent,
        QlTuyenXeComponent,
        QlNhaXeComponent,
        // DangKyComponent,
        // DangNhapComponent,
        // KiemTraVeComponent,
        // XemLichSuComponent,
        // TimKiemComponent,
        AddNguoidungComponent,
        AddNhaXeComponent,
        AddTuyenXeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
