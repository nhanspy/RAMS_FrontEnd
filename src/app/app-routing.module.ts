import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {XemChiTietChuyenXeComponent} from './nhan/xem-chi-tiet-chuyen-xe/xem-chi-tiet-chuyen-xe.component';
import {XemLichSuChuyenXeComponent} from './nhan/xem-lich-su-chuyen-xe/xem-lich-su-chuyen-xe.component';
import {DatVeComponent} from './nhan/dat-ve/dat-ve.component';
import {QlNguoiDungComponent} from './kien/ql-nguoi-dung/ql-nguoi-dung.component';
import {QlNhaXeComponent} from './kien/ql-nha-xe/ql-nha-xe.component';
import {QlTuyenXeComponent} from './kien/ql-tuyen-xe/ql-tuyen-xe.component';
// import {DangKyComponent} from './thao/dang-ky/dang-ky.component';
// import {DangNhapComponent} from './thao/dang-nhap/dang-nhap.component';
// import {KiemTraVeComponent} from './thao/kiem-tra-ve/kiem-tra-ve.component';
// import {TimKiemComponent} from './trong/tim-kiem/tim-kiem.component';
// import {XemLichSuComponent} from './trong/xem-lich-su/xem-lich-su.component';

const routes: Routes = [
  {path: '', redirectTo: 'dangnhap', pathMatch: 'full'},
  {path: 'chitiet', component: XemChiTietChuyenXeComponent},
  {path: 'lichsuchuyen', component: XemLichSuChuyenXeComponent},
  {path: 'datve', component: DatVeComponent},
  {path: 'qlnguoidung', component: QlNguoiDungComponent},
  {path: 'qlnhaxe', component: QlNhaXeComponent},
  {path: 'qltuyenxe', component: QlTuyenXeComponent},
  // {path: 'dangky', component: DangKyComponent},
  // {path: 'dangnhap', component: DangNhapComponent},
  // {path: 'kiemtra', component: KiemTraVeComponent},
  // {path: 'timkiem', component: TimKiemComponent},
  // {path: 'dslichsu', component: XemLichSuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
