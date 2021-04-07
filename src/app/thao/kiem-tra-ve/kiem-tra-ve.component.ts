import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {KiemTraVeService} from '../../../Service/kiem-tra-ve.service';
import {Thongtinve} from '../../Model/thongtinve.class';
import {ThongtinveService} from "../../Service/thongtinve.service";

// tslint:disable-next-line:class-name


@Component({
  selector: 'app-kiem-tra-ve',
  templateUrl: './kiem-tra-ve.component.html',
  styleUrls: ['./kiem-tra-ve.component.css']
})
export class KiemTraVeComponent implements OnInit {
  thongtinveList: Thongtinve[] = [];


  // tslint:disable-next-line:variable-name
  constructor(private _thongtinveService: ThongtinveService ) { }

  ngOnInit(): void {
    console.log(1234);
    this.thongtinveList = this._thongtinveService.thongtinveList;
  }

}
