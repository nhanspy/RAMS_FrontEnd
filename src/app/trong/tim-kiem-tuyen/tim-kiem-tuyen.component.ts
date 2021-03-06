import {Component, OnInit, Input} from '@angular/core';
import {TinhThanh} from "../Model/TinhThanh";
import {XemLichSuService} from "../Services/xem-lich-su.service";

@Component({
  selector: 'app-tim-kiem-tuyen',
  templateUrl: './tim-kiem-tuyen.component.html',
  styleUrls: ['./tim-kiem-tuyen.component.css',
    '../../../assets/trong/css/fubus.css',
    '../../../assets/trong/css/add.css']
})
export class TimKiemTuyenComponent implements OnInit {
  tinhthanhlist: TinhThanh [] = [];
  // @ts-ignore
  tinhthanh: TinhThanh;
  // @ts-ignore
  @Input() getbendi: string;
  // @ts-ignore
  @Input() getbenden: string;
  // @ts-ignore
  @Input() getthoigian: string;
  // minDate = new Date();
  // @ts-ignore
  // check_Date=new Date();
// @ts-ignore
  localCompleteDate: string;
  date: Date = new Date();


  constructor(private xemLichSuService: XemLichSuService) {
    // this.check_Date.setSeconds(0);
    // this.check_Date.setMilliseconds(0);
    // this.localCompleteDate = this.check_Date.toISOString();
    // this.localCompleteDate = this.localCompleteDate.substring(0, this.localCompleteDate.length - 1);
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
