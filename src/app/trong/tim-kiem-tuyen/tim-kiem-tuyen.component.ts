import {Component, OnInit, Input} from '@angular/core';
import {XemLichSuService} from '../Services/xem-lich-su.service';
import {TinhThanh} from '../../nhan/Models/TinhThanh.class';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tim-kiem-tuyen',
  templateUrl: './tim-kiem-tuyen.component.html',
  styleUrls: ['./tim-kiem-tuyen.component.css']
})
export class TimKiemTuyenComponent implements OnInit {
  tinhthanhlist: TinhThanh [] = [];
  // @ts-ignore
  tinhthanh: TinhThanh;
  // @ts-ignore
  getbendi: string;
  // @ts-ignore
  getbenden: string;
  // @ts-ignore
  getthoigian: string;

  constructor(
    private xemLichSuService: XemLichSuService
  ) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // @ts-ignore
    this.xemLichSuService.getTinhThanh().subscribe(data => {
      this.tinhthanhlist = data;
    }, error => {
      console.log('loi' + error);
    });
  }

  selecttinhthanhdi(tinhthanh: string): void {
    this.getbendi = tinhthanh;
    console.log('the selected value is ' + tinhthanh);
  }

  selecttinhthanhden(tinhthanh: string): void {
    this.getbenden = tinhthanh;
    console.log('the selected value is ' + tinhthanh);
  }

  selectthoigian(thoigian: string): void {
    this.getthoigian = thoigian;
    console.log('the selected value is ' + thoigian);
  }
}
