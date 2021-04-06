import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit {
  tttaikhoan = {
    taikhoan: 'lethithao2809',
    matkhau: '12345678'
  }

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(createTK: NgForm) {
    this.tttaikhoan = createTK.value;
    console.log(this.tttaikhoan);
  }
}




