import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {KiemTraVeComponent} from './thao/kiem-tra-ve/kiem-tra-ve.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HomeComponent} from "./thao/home/home.component";
import {ProfileComponent} from "./thao/profile/profile.component";
import {BoardAdminComponent} from "./thao/board-admin/board-admin.component";
import {BoardModeratorComponent} from "./thao/board-moderator/board-moderator.component";
import {APP_BASE_HREF} from "@angular/common";
import {authInterceptorProviders} from "./thao/_helpers/auth.interceptor";
import { HeaderComponent } from './thao/header/header.component';
import { FooterComponent } from './thao/footer/footer.component';
import {FormGroupDirective, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import { DangNhapComponent } from './thao/dang-nhap/dang-nhap.component';
import { DangKyComponent } from './thao/dang-ky/dang-ky.component';
import { DangkyuserComponent } from './thao/dangkyuser/dangkyuser.component';
import { QuenmatkhauComponent } from './thao/quenmatkhau/quenmatkhau.component';
import { DoimatkhauComponent } from './thao/doimatkhau/doimatkhau.component';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule
} from "angularx-social-login";
import {productoInterceptor} from "./thao/interceptors/producto.interceptor";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    KiemTraVeComponent,
    HeaderComponent,
    FooterComponent,
    DangNhapComponent,
    DangKyComponent,
    DangkyuserComponent,
    QuenmatkhauComponent,
    DoimatkhauComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    authInterceptorProviders,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '326374744185-ti75keqf9ob27h5camp4cvd4sji3o2uo.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('804399990450734'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    productoInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
