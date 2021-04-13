import { Component, OnInit } from '@angular/core';
import {QlTuyenXeService} from '../../Services/kien-s/ql-tuyen-xe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ChuyenXe} from '../../nhan/Models/ChuyenXe.class';
import {Tuyenxe} from '../model/tuyenxe';
import {Form} from '@angular/forms';
import {FormChuyenXe} from '../model/FormChuyenXe';

@Component({
  selector: 'app-add-tuyen-xe',
  templateUrl: './add-tuyen-xe.component.html',
  styleUrls: ['./add-tuyen-xe.component.css']
})
export class AddTuyenXeComponent implements OnInit {
// @ts-ignore
//   tuyenXe: ChuyenXe;
  // @ts-ignore
  tuyenXe: FormChuyenXe;
  constructor(private qlTuyenXeService: QlTuyenXeService,
              private route: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit(): void {
    // @ts-ignore
    this.tuyenXe = new FormChuyenXe();
  }
  // tslint:disable-next-line:typedef
  add2(){
    // @ts-ignore
    console.log(this.tuyenXe);
    this.qlTuyenXeService.create(this.tuyenXe).subscribe(response => {
        alert('Thêm thành công!!');
        console.log(response);
      },
      // @ts-ignore
      error => {
        console.log(error);
      });
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    this.add2();
  }

}
