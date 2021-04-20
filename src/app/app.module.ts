import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {XemChiTietChuyenXeService} from './nhan/service/xem-chi-tiet-chuyen-xe.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {XemLichSuChuyenXeComponent} from './nhan/xem-lich-su-chuyen-xe/xem-lich-su-chuyen-xe.component';
import {QlNguoiDungComponent} from './kien/ql-nguoi-dung/ql-nguoi-dung.component';
import {QlTuyenXeComponent} from './kien/ql-tuyen-xe/ql-tuyen-xe.component';
import {QlNhaXeComponent} from './kien/ql-nha-xe/ql-nha-xe.component';
import {DatVeComponent} from './nhan/dat-ve/dat-ve.component';
import {XemChiTietChuyenXeComponent} from './nhan/xem-chi-tiet-chuyen-xe/xem-chi-tiet-chuyen-xe.component';
import {XemLichSuComponent} from './trong/xem-lich-su/xem-lich-su.component';
import {TimKiemTuyenComponent} from './trong/tim-kiem-tuyen/tim-kiem-tuyen.component';
import {TestRoutingComponent} from './trong/test-routing/test-routing.component';
import {HeaderComponent} from './trong/header/header.component';
import {FooterComponent} from './trong/footer/footer.component';
import { TestFubusComponent } from './nhan/test-fubus/test-fubus.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { XuatVeComponent } from './nhan/xuat-ve/xuat-ve.component';

@NgModule({
  declarations: [
    AppComponent,
    DatVeComponent,
    XemLichSuChuyenXeComponent,
    XemChiTietChuyenXeComponent,
    QlNguoiDungComponent,
    QlTuyenXeComponent,
    QlNhaXeComponent,
    XemLichSuComponent,
    TimKiemTuyenComponent,
    TestRoutingComponent,
    HeaderComponent,
    FooterComponent,
    TestFubusComponent,
    XuatVeComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      MatAutocompleteModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      NgxPaginationModule,
      IvyCarouselModule
    ],

  providers: [
    XemChiTietChuyenXeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


