import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {TinhThanh} from "../Model/TinhThanh";
import {XemLichSuService} from "../Services/xem-lich-su.service";

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

  constructor(private xemLichSuService: XemLichSuService) {
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

  selecttinhthanh(tinhthanh: string) {
    console.log("the selected value is " + tinhthanh);
  }
  selectthoigian(thoigian: string) {
    console.log("the selected value is " + thoigian);
  }
}
