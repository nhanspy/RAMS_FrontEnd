import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from '../../Services/trong-s/loadcss.Services';
import {XemLichSu} from '../../Model/trong/xem-lich-su';

@Component({
  selector: 'app-xem-lich-su',
  templateUrl: './xem-lich-su.component.html',
  styleUrls: ['./xem-lich-su.component.css']
})
export class XemLichSuComponent implements OnInit {
  xemlichsus: XemLichSu[] = [
    {id: 1, tenNhaXe: 'Phuong Trang', benDi: 'Ha Noi', benDen: 'Sai Gon', thoiGian: '20h20', giaThanh: '200000'},
    {id: 1, tenNhaXe: 'Phuong Trang', benDi: 'Ha Noi', benDen: 'Sai Gon', thoiGian: '20h20', giaThanh: '200000'},
    {id: 1, tenNhaXe: 'Phuong Trang', benDi: 'Ha Noi', benDen: 'Sai Gon', thoiGian: '20h20', giaThanh: '200000'},
  ]
  constructor(private  loadcssServices: LoadcssServices) {
    this.loadcssServices.loadddCss('/assets/trong/css/style.css');
    this.loadcssServices.loadddCss('/assets/trong/css/bootstrap.css');
   setTimeout(() => {
     this.loadcssServices.loadScript('/assets/trong/js/boostrapjs.js');
     this.loadcssServices.loadScript('/assets/trong/js/queryjs.js');
     this.loadcssServices.loadScript('/assets/trong/js/jsselect.js');
     this.loadcssServices.loadScript('/assets/jquery-3.6.0.min.js');
   }, 300);

  }

  ngOnInit(): void {
  }

}
