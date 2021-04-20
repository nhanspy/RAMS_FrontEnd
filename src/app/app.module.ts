import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {KiemTraVeComponent} from './thao/kiem-tra-ve/kiem-tra-ve.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RegisterComponent} from "./thao/register/register.component";
import {LoginComponent} from "./thao/login/login.component";
import {HomeComponent} from "./thao/home/home.component";
import {ProfileComponent} from "./thao/profile/profile.component";
import {BoardAdminComponent} from "./thao/board-admin/board-admin.component";
import {BoardModeratorComponent} from "./thao/board-moderator/board-moderator.component";
import {BoardUserComponent} from "./thao/board-user/board-user.component";
import {TestComponent} from "./thao/test/test.component";
import {APP_BASE_HREF} from "@angular/common";
import {authInterceptorProviders} from "./thao/_helpers/auth.interceptor";
import { HeaderComponent } from './thao/header/header.component';
import { FooterComponent } from './thao/footer/footer.component';
import { DangkyComponent } from './thao/dangky/dangky.component';
import {FormsModule} from "@angular/forms";
import {VerifyResetPasswordComponent} from "./thao/verify-reset-password/verify-reset-password.component";
import {ResetPasswordComponent} from "./thao/reset-password/reset-password.component";
import { QuenmatkhauComponent } from './thao/quenmatkhau/quenmatkhau.component';
import { DoimatkhauComponent } from './thao/doimatkhau/doimatkhau.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    TestComponent,
    ResetPasswordComponent,
    VerifyResetPasswordComponent,
    KiemTraVeComponent,
    HeaderComponent,
    DangkyComponent,
    FooterComponent,
    DangkyComponent,
    QuenmatkhauComponent,
    DoimatkhauComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
