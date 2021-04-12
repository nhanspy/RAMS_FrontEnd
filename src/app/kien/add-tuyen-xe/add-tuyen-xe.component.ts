import { Component, OnInit } from '@angular/core';
import {Tuyenxe} from '../model/tuyenxe';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {QlTuyenXeService} from '../../Services/kien-s/ql-tuyen-xe.service';

@Component({
  selector: 'app-add-tuyen-xe',
  templateUrl: './add-tuyen-xe.component.html',
  styleUrls: ['./add-tuyen-xe.component.css']
})
export class AddTuyenXeComponent implements OnInit {

  // @ts-ignore
  public tuyenxe: Tuyenxe;
  // @ts-ignore
  form: FormGroup;
  // @ts-ignore
  public subscription: Subscription;
  constructor(private http: HttpClient, public qlTuyenXeService: QlTuyenXeService, public fb: FormBuilder) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.tuyenxe = new Tuyenxe();
  }
  // tslint:disable-next-line:typedef
  addtuyenxe(){
    // @ts-ignore
    this.subscription = this.qlTuyenXeService.addtuyenxe(this.tuyenxe).subscribe(data => {
      console.log(data);
    });
    console.log(this.tuyenxe);
  }

}
