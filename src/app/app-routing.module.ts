import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KiemTraVeComponent} from './thao/kiem-tra-ve/kiem-tra-ve.component';
import {HomeComponent} from "./thao/home/home.component";
import {ProfileComponent} from "./thao/profile/profile.component";
import {BoardModeratorComponent} from "./thao/board-moderator/board-moderator.component";
import {BoardAdminComponent} from "./thao/board-admin/board-admin.component";
import {DangNhapComponent} from "./thao/dang-nhap/dang-nhap.component";
import {DangKyComponent} from "./thao/dang-ky/dang-ky.component";
import {DangkyuserComponent} from "./thao/dangkyuser/dangkyuser.component";
import {QuenmatkhauComponent} from "./thao/quenmatkhau/quenmatkhau.component";
import {DoimatkhauComponent} from "./thao/doimatkhau/doimatkhau.component";
import {HeaderComponent} from "./thao/header/header.component";
import {FooterComponent} from "./thao/footer/footer.component";

const routes: Routes = [
  {path: 'kiemtra', component: KiemTraVeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  {path: 'dangnhap', component: DangNhapComponent},
  {path: 'dangkyuser', component: DangkyuserComponent},
  {path: 'quenmatkhau', component: QuenmatkhauComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'trangchu', component: HomeComponent},
  {path: 'doimatkhau', component: DoimatkhauComponent},
  {path: 'dangky', component: DangKyComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
