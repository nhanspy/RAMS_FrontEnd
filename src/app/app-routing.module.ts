import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {XemChiTietChuyenXeComponent} from './nhan/xem-chi-tiet-chuyen-xe/xem-chi-tiet-chuyen-xe.component';
import {XemLichSuChuyenXeComponent} from './nhan/xem-lich-su-chuyen-xe/xem-lich-su-chuyen-xe.component';
import {DatVeComponent} from './nhan/dat-ve/dat-ve.component';
import {QlNguoiDungComponent} from './kien/ql-nguoi-dung/ql-nguoi-dung.component';
import {QlNhaXeComponent} from './kien/ql-nha-xe/ql-nha-xe.component';
import {QlTuyenXeComponent} from './kien/ql-tuyen-xe/ql-tuyen-xe.component';
import {DangKyComponent} from './thao/dang-ky/dang-ky.component';
import {DangNhapComponent} from './thao/dang-nhap/dang-nhap.component';
import {KiemTraVeComponent} from './thao/kiem-tra-ve/kiem-tra-ve.component';
import {AddNguoidungComponent} from './kien/add-nguoidung/add-nguoidung.component';
import {AddNhaXeComponent} from './kien/add-nha-xe/add-nha-xe.component';
import {AddTuyenXeComponent} from './kien/add-tuyen-xe/add-tuyen-xe.component';

const routes: Routes = [
  {path: '', component: QlNguoiDungComponent},
  // {path: 'chitiet', component: XemChiTietChuyenXeComponent},
  // {path: 'lichsu', component: XemLichSuChuyenXeComponent},
  // {path: 'datve', component: DatVeComponent},
  // {path: 'dangky', component: DangKyComponent},
  // {path: 'dangnhap', component: DangNhapComponent},
  // {path: 'kiemtra', component: KiemTraVeComponent},
  {path: 'qlnguoidung', component: QlNguoiDungComponent},
  {path: 'qlnhaxe', component: QlNhaXeComponent},
  {path: 'qltuyenxe', component: QlTuyenXeComponent},
  {path: 'addnguoidung', component: AddNguoidungComponent},
  {path: 'addnhaxe', component: AddNhaXeComponent},
  {path: 'addtuyenxe', component: AddTuyenXeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
