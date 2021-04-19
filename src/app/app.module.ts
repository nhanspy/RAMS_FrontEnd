import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {XemChiTietChuyenXeService} from './nhan/service/xem-chi-tiet-chuyen-xe.service';
import {FormsModule} from '@angular/forms';
import {DatVeComponent} from './nhan/dat-ve/dat-ve.component';
import {XemLichSuChuyenXeComponent} from './nhan/xem-lich-su-chuyen-xe/xem-lich-su-chuyen-xe.component';
import {XemChiTietChuyenXeComponent} from './nhan/xem-chi-tiet-chuyen-xe/xem-chi-tiet-chuyen-xe.component';

@NgModule({
  declarations: [
    AppComponent,
    DatVeComponent,
    XemLichSuChuyenXeComponent,
    XemChiTietChuyenXeComponent
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


