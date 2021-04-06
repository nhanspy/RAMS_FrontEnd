import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {
  dktaikhoan = {
    hoten: 'Lê Thị Thảo',
    tendangnhap: 'lethao2809',
    matkhau: 'lethao1234',
    xacnhanmatkhau: 'lethao1234',
    sodienthoai: '0368992115',
    diachi: 'Quang Binh'
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onRegist(createDKTK: NgForm) {
    // console.log(createDKTK.value);
    this.dktaikhoan = createDKTK.value;
    console.log(this.dktaikhoan);
  }
}
