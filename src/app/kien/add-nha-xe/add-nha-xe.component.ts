import { Component, OnInit } from '@angular/core';
import {QlNhaXeService} from '../../Services/kien-s/ql-nha-xe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Nhaxe} from '../model/nhaxe';

@Component({
  selector: 'app-add-nha-xe',
  templateUrl: './add-nha-xe.component.html',
  styleUrls: ['./add-nha-xe.component.css'],
  providers: [QlNhaXeService]
})
export class AddNhaXeComponent implements OnInit {
  // @ts-ignore
  car: Nhaxe;
  constructor(private qlNhaXeService: QlNhaXeService,
              private route: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit(): void {
    // @ts-ignore
    this.car = new Nhaxe();
  }
  // tslint:disable-next-line:typedef
  add1(){
    // @ts-ignore
    console.log(this.car);
    this.qlNhaXeService.create(this.car).subscribe(response => {
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
    this.add1();
  }
}
