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

const routes: Routes = [
  {path: 'kiemtra', component: KiemTraVeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
