import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {XemChiTietChuyenXeComponent} from './nhan/xem-chi-tiet-chuyen-xe/xem-chi-tiet-chuyen-xe.component';
import {XemLichSuChuyenXeComponent} from './nhan/xem-lich-su-chuyen-xe/xem-lich-su-chuyen-xe.component';
import {DatVeComponent} from './nhan/dat-ve/dat-ve.component';
import {QlNguoiDungComponent} from './kien/ql-nguoi-dung/ql-nguoi-dung.component';
import {QlNhaXeComponent} from './kien/ql-nha-xe/ql-nha-xe.component';
import {QlTuyenXeComponent} from './kien/ql-tuyen-xe/ql-tuyen-xe.component';
import {DangKyComponent} from './thao/dang-ky/dang-ky.component';
import {DangNhapComponent} from './thao/dang-nhap/dang-nhap.component';
import {KiemTraVeComponent} from './thao/kiem-tra-ve/kiem-tra-ve.component';
import {XemLichSuComponent} from './trong/xem-lich-su/xem-lich-su.component';
import {TimKiemTuyenComponent} from './trong/tim-kiem-tuyen/tim-kiem-tuyen.component';
import {HeaderComponent} from './trong/header/header.component';
import {FooterComponent} from './trong/footer/footer.component';

const routes: Routes = [
  {path: '', redirectTo: 'timkiemtuyen', pathMatch: 'full'},
  {path: 'chitiet', component: XemChiTietChuyenXeComponent},
  {path: 'lichsu', component: XemLichSuChuyenXeComponent},
  {path: 'datve', component: DatVeComponent},
  {path: 'qlnguoidung', component: QlNguoiDungComponent},
  {path: 'qlnhaxe', component: QlNhaXeComponent},
  {path: 'qltuyenxe', component: QlTuyenXeComponent},
  {path: 'dangky', component: DangKyComponent},
  {path: 'dangnhap', component: DangNhapComponent},
  {path: 'kiemtra', component: KiemTraVeComponent},
  {path: 'xemlichsu', component: XemLichSuComponent},
  {path: 'timkiemtuyen', component: TimKiemTuyenComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
