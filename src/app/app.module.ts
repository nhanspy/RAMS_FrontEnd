import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DangKyComponent } from './thao/dang-ky/dang-ky.component';
import { DangNhapComponent } from './thao/dang-nhap/dang-nhap.component';
import {KiemTraVeComponent} from "./thao/kiem-tra-ve/kiem-tra-ve.component";
import {FormsModule} from "@angular/forms";
// import {KiemTraVeComponent} from "./thao/kiem-tra-ve/kiem-tra-ve.component";

@NgModule({
  declarations: [
    AppComponent,
    DangKyComponent,
    DangNhapComponent,
    KiemTraVeComponent,
    // KiemTraVeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
