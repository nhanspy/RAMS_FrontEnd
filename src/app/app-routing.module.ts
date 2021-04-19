import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {XemChiTietChuyenXeComponent} from './nhan/xem-chi-tiet-chuyen-xe/xem-chi-tiet-chuyen-xe.component';
import {XemLichSuChuyenXeComponent} from './nhan/xem-lich-su-chuyen-xe/xem-lich-su-chuyen-xe.component';
import {DatVeComponent} from './nhan/dat-ve/dat-ve.component';

const routes: Routes = [
  {path: '', redirectTo: 'dangnhap', pathMatch: 'full'},
  {path: 'chitiet', component: XemChiTietChuyenXeComponent},
  {path: 'lichsu', component: XemLichSuChuyenXeComponent},
  {path: 'datve', component: DatVeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
