import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Nhaxe} from '../model/nhaxe';
import {QlNhaXeService} from '../../Services/kien-s/ql-nha-xe.service';

@Component({
  selector: 'app-add-nha-xe',
  templateUrl: './add-nha-xe.component.html',
  styleUrls: ['./add-nha-xe.component.css']
})
export class AddNhaXeComponent implements OnInit {
  // @ts-ignore
  public nhaxe: Nhaxe;
  // @ts-ignore
  form: FormGroup;
  // @ts-ignore
  public subscription: Subscription;
  constructor(private http: HttpClient, public qlNhaXeService: QlNhaXeService, public fb: FormBuilder) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.nhaxe = new Nhaxe();
  }
  // tslint:disable-next-line:typedef
  addnhaxe(){
    this.subscription = this.qlNhaXeService.addnhaxe(this.nhaxe).subscribe(data => {
      console.log(data);
    });
    console.log(this.nhaxe);
  }
  // tslint:disable-next-line:typedef
  Onsubmit(){
    this.addnhaxe();
  }
}
