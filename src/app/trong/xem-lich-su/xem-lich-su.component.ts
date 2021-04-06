import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from '../../Services/trong-s/loadcss.Services';

@Component({
  selector: 'app-xem-lich-su',
  templateUrl: './xem-lich-su.component.html',
  styleUrls: ['./xem-lich-su.component.css']
})
export class XemLichSuComponent implements OnInit {

  constructor(private  loadcssServices: LoadcssServices) {
    this.loadcssServices.loadddCss('/assets/trong/css/style.css');
    this.loadcssServices.loadddCss('/assets/trong/css/bootstrap.css');
    this.loadcssServices.loadScript('/assets/trong/js/boostrapjs.js');
    this.loadcssServices.loadScript('/assets/trong/js/queryjs.js');
  }

  ngOnInit(): void {
  }

}
