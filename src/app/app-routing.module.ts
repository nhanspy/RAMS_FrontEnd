import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KiemTraVeComponent} from './thao/kiem-tra-ve/kiem-tra-ve.component';
import {HomeComponent} from "./thao/home/home.component";
import {ProfileComponent} from "./thao/profile/profile.component";
import {BoardUserComponent} from "./thao/board-user/board-user.component";
import {BoardModeratorComponent} from "./thao/board-moderator/board-moderator.component";
import {BoardAdminComponent} from "./thao/board-admin/board-admin.component";
import {ResetPasswordComponent} from "./thao/reset-password/reset-password.component";
import {VerifyResetPasswordComponent} from "./thao/verify-reset-password/verify-reset-password.component";
import {DangNhapComponent} from "./thao/dang-nhap/dang-nhap.component";
import {DangKyComponent} from "./thao/dang-ky/dang-ky.component";
import {DangkyuserComponent} from "./thao/dangkyuser/dangkyuser.component";
import {QuenmatkhauComponent} from "./thao/quenmatkhau/quenmatkhau.component";

const routes: Routes = [
  {path: 'kiemtra', component: KiemTraVeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  {path: 'password', component: ResetPasswordComponent},
  {path: 'verifypass', component: VerifyResetPasswordComponent},
  {path: 'dangnhap', component: DangNhapComponent},
  {path: 'nguoidung', component: DangkyuserComponent},
  {path: 'quenmatkhau', component: QuenmatkhauComponent},
  {path: 'dangky', component: DangKyComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
