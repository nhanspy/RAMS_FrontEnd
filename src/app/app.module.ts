import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XemChiTietChuyenXeComponent } from './nhan/xem-chi-tiet-chuyen-xe/xem-chi-tiet-chuyen-xe.component';
import { DatVeComponent } from './nhan/dat-ve/dat-ve.component';
import { XemLichSuComponent } from './trong/xem-lich-su/xem-lich-su.component';
import { TimKiemComponent } from './trong/tim-kiem/tim-kiem.component';

@NgModule({
  declarations: [
    AppComponent,
    XemChiTietChuyenXeComponent,
    DatVeComponent,
    XemLichSuComponent,
    TimKiemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
