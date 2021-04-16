import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {KiemTraVeComponent} from './thao/kiem-tra-ve/kiem-tra-ve.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { DKNHaxeComponent } from './thao/dknhaxe/dknhaxe.component';
import { HeaderComponent } from './thao/header/header.component';
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
    KiemTraVeComponent,
    DKNHaxeComponent,
    HeaderComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
