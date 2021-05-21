import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {XemChiTietChuyenXeComponent} from './nhan/xem-chi-tiet-chuyen-xe/xem-chi-tiet-chuyen-xe.component';
import {XemLichSuChuyenXeComponent} from './nhan/xem-lich-su-chuyen-xe/xem-lich-su-chuyen-xe.component';
import {DatVeComponent} from './nhan/dat-ve/dat-ve.component';
import {QlNguoiDungComponent} from './kien/ql-nguoi-dung/ql-nguoi-dung.component';
import {QlNhaXeComponent} from './kien/ql-nha-xe/ql-nha-xe.component';
import {QlTuyenXeComponent} from './kien/ql-tuyen-xe/ql-tuyen-xe.component';
import {XemLichSuComponent} from './trong/xem-lich-su/xem-lich-su.component';
import {TimKiemTuyenComponent} from './trong/tim-kiem-tuyen/tim-kiem-tuyen.component';
import {XuatVeComponent} from './nhan/xuat-ve/xuat-ve.component';
import {KiemTraVeComponent} from './thao/kiem-tra-ve/kiem-tra-ve.component';
import {HomeComponent} from './thao/home/home.component';
import {ProfileComponent} from './thao/profile/profile.component';
import {BoardModeratorComponent} from './thao/board-moderator/board-moderator.component';
import {BoardAdminComponent} from './thao/board-admin/board-admin.component';
import {DangNhapComponent} from './thao/dang-nhap/dang-nhap.component';
import {DangkyuserComponent} from './thao/dangkyuser/dangkyuser.component';
import {QuenmatkhauComponent} from './thao/quenmatkhau/quenmatkhau.component';
import {DangKyComponent} from './thao/dang-ky/dang-ky.component';
import {QlGheComponent} from './kien/ql-ghe/ql-ghe.component';
import {QlXeComponent} from './kien/ql-xe/ql-xe.component';
import {HeaderThaoComponent} from './thao/header/header.component';
import {FooterThaoComponent} from './thao/footer/footer.component';
import {DoimatkhauComponent} from './thao/doimatkhau/doimatkhau.component';


const routes: Routes = [
  {path: '', redirectTo: 'timkiemtuyen', pathMatch: 'full'},
  {path: 'chitiet', component: XemChiTietChuyenXeComponent},
  {path: 'lichsu', component: XemLichSuChuyenXeComponent},
  {path: 'datve', component: DatVeComponent},
  {path: 'xemlichsu', component: XemLichSuComponent},
  {path: 'timkiemtuyen', component: TimKiemTuyenComponent},
  {path: 'xuatve', component: XuatVeComponent},
  {path: 'kiemtra', component: KiemTraVeComponent},
  {path: 'home', component: HomeComponent },
  {path: 'profile', component: ProfileComponent },
  // {path: 'user', component: BoardUserComponent },
  {path: 'mod', component: BoardModeratorComponent },
  {path: 'admin', component: BoardAdminComponent },
  // {path: 'password', component: ResetPasswordComponent},
  // {path: 'verifypass', component: VerifyResetPasswordComponent},
  {path: 'dangnhap', component: DangNhapComponent},
  {path: 'nguoidung', component: DangkyuserComponent},
  {path: 'quenmatkhau', component: QuenmatkhauComponent},
  {path: 'dangky', component: DangKyComponent},
  {path: 'qlnguoidung', component: QlNguoiDungComponent},
  {path: 'qlnhaxe', component: QlNhaXeComponent},
  {path: 'qltuyenxe', component: QlTuyenXeComponent},
  {path: 'qlghe', component: QlGheComponent},
  {path: 'qlxe', component: QlXeComponent},
  {path: 'kiemtra', component: KiemTraVeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'dangnhap', component: DangNhapComponent},
  {path: 'dangkyuser', component: DangkyuserComponent},
  {path: 'quenmatkhau', component: QuenmatkhauComponent},
  {path: 'header', component: HeaderThaoComponent},
  {path: 'footer', component: FooterThaoComponent},
  {path: 'trangchu', component: HomeComponent},
  {path: 'doimatkhau', component: DoimatkhauComponent},
  {path: 'dangky', component: DangKyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
