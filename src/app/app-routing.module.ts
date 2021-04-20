import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KiemTraVeComponent} from './thao/kiem-tra-ve/kiem-tra-ve.component';
import {LoginComponent} from "./thao/login/login.component";
import {RegisterComponent} from "./thao/register/register.component";
import {HomeComponent} from "./thao/home/home.component";
import {ProfileComponent} from "./thao/profile/profile.component";
import {BoardUserComponent} from "./thao/board-user/board-user.component";
import {BoardModeratorComponent} from "./thao/board-moderator/board-moderator.component";
import {BoardAdminComponent} from "./thao/board-admin/board-admin.component";
import {ResetPasswordComponent} from "./thao/reset-password/reset-password.component";
import {VerifyResetPasswordComponent} from "./thao/verify-reset-password/verify-reset-password.component";
import {DangkyComponent} from "./thao/dangky/dangky.component";

const routes: Routes = [
  {path: 'kiemtra', component: KiemTraVeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  {path: 'password', component: ResetPasswordComponent},
  {path: 'verifypass', component: VerifyResetPasswordComponent},
  {path: 'dangky', component: DangkyComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
