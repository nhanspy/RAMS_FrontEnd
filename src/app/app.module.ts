import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {XemChiTietChuyenXeComponent} from './nhan/xem-chi-tiet-chuyen-xe/xem-chi-tiet-chuyen-xe.component';
import {DatVeComponent} from './nhan/dat-ve/dat-ve.component';
import {HttpClientModule} from '@angular/common/http';
import {XemChiTietChuyenXeService} from './nhan/service/xem-chi-tiet-chuyen-xe.service';
import {XemLichSuComponent} from './trong/xem-lich-su/xem-lich-su.component';
import {QlNguoiDungComponent} from './kien/ql-nguoi-dung/ql-nguoi-dung.component';
import {QlTuyenXeComponent} from './kien/ql-tuyen-xe/ql-tuyen-xe.component';
import {QlNhaXeComponent} from './kien/ql-nha-xe/ql-nha-xe.component';
// import {FormsModule} from '@angular/forms';
import {DropDownListModule} from '@syncfusion/ej2-angular-dropdowns';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {TimKiemTuyenComponent} from './trong/tim-kiem-tuyen/tim-kiem-tuyen.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DangKyComponent} from './thao/dang-ky/dang-ky.component';
import {DangNhapComponent} from './thao/dang-nhap/dang-nhap.component';
import {KiemTraVeComponent} from './thao/kiem-tra-ve/kiem-tra-ve.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgxPaginationModule} from 'ngx-pagination';
import {HeaderComponent} from './trong/header/header.component';
import {FooterComponent} from './trong/footer/footer.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {TestComponent} from './trong/test/test.component';


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
    TimKiemTuyenComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DropDownListModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    NgxPaginationModule,
    IvyCarouselModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [
    XemChiTietChuyenXeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
