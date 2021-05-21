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
import {HeaderComponent} from './trong/header/header.component';
import {FooterComponent} from './trong/footer/footer.component';
import { TestFubusComponent } from './nhan/test-fubus/test-fubus.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { XuatVeComponent } from './nhan/xuat-ve/xuat-ve.component';
import { NewTemplateComponent } from './nhan/new-template/new-template.component';
import {HomeComponent} from './thao/home/home.component';
import {ProfileComponent} from './thao/profile/profile.component';
import {BoardAdminComponent} from './thao/board-admin/board-admin.component';
import {BoardModeratorComponent} from './thao/board-moderator/board-moderator.component';
// import {BoardUserComponent} from './thao/board-user/board-user.component';
// import {ResetPasswordComponent} from './thao/reset-password/reset-password.component';
// import {VerifyResetPasswordComponent} from './thao/verify-reset-password/verify-reset-password.component';
import {KiemTraVeComponent} from './thao/kiem-tra-ve/kiem-tra-ve.component';
import {DangNhapComponent} from './thao/dang-nhap/dang-nhap.component';
import {DangKyComponent} from './thao/dang-ky/dang-ky.component';
import {DangkyuserComponent} from './thao/dangkyuser/dangkyuser.component';
import {QuenmatkhauComponent} from './thao/quenmatkhau/quenmatkhau.component';
import {DoimatkhauComponent} from './thao/doimatkhau/doimatkhau.component';
import {ToastrModule} from 'ngx-toastr';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {QlXeComponent} from './kien/ql-xe/ql-xe.component';
import {QlGheComponent} from './kien/ql-ghe/ql-ghe.component';
import {HeaderThaoComponent} from './thao/header/header.component';
import {FooterThaoComponent} from './thao/footer/footer.component';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig} from 'angularx-social-login';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    DatVeComponent,
    XemLichSuChuyenXeComponent,
    XemChiTietChuyenXeComponent,
    XemLichSuComponent,
    TimKiemTuyenComponent,
    HeaderComponent,
    FooterComponent,
    TestFubusComponent,
    XuatVeComponent,
    NewTemplateComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    // BoardUserComponent,
    // ResetPasswordComponent,
    // VerifyResetPasswordComponent,
    KiemTraVeComponent,
    HeaderComponent,
    FooterComponent,
    DangNhapComponent,
    DangKyComponent,
    DangkyuserComponent,
    QuenmatkhauComponent,
    DoimatkhauComponent,
    QlNguoiDungComponent,
    QlTuyenXeComponent,
    QlNhaXeComponent,
    QlXeComponent,
    QlGheComponent,
    HeaderThaoComponent,
    FooterThaoComponent
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
      IvyCarouselModule,
      AppRoutingModule,
      ToastrModule.forRoot(),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
    ],

  providers: [
    XemChiTietChuyenXeService
  ],
  // provide: 'SocialAuthServiceConfig',
  // useValue: {
  //   autoLogin: false,
  //   providers: [
  //     {
  //       id: GoogleLoginProvider.PROVIDER_ID,
  //       provider: new GoogleLoginProvider(
  //         '326374744185-ti75keqf9ob27h5camp4cvd4sji3o2uo.apps.googleusercontent.com'
  //       ),
  //     },
  //     {
  //       id: FacebookLoginProvider.PROVIDER_ID,
  //       provider: new FacebookLoginProvider('804399990450734'),
  //     },
  //   ],
  // } as SocialAuthServiceConfig,
  bootstrap: [AppComponent]
})
export class AppModule { }


