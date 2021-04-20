import {Component, OnInit,Input} from '@angular/core';
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
  minDate = new Date();



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
