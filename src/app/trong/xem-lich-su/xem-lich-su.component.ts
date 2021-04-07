import { Component, OnInit } from '@angular/core';
import {XemLichSu} from '../Model/xem-lich-su';
import {XemLichSu2Service} from "../Services/xem-lich-su-2.service";

@Component({
  selector: 'app-xem-lich-su',
  templateUrl: './xem-lich-su.component.html',
  styleUrls: ['./xem-lich-su.component.css']
})
export class XemLichSuComponent implements OnInit {
  xemlichsulist: XemLichSu[] = [];
  Title: string = "Xem lịch sử tuyến xe";
  // @ts-ignore
  keyword: string;

  constructor(private xemLichSu2Service: XemLichSu2Service) {
  }

  ngOnInit(): void {
    this.xemlichsulist = this.xemLichSu2Service.xemlichsulist;
  }
  updatekeyword(value: string){
    this.keyword = value;
    if (this.keyword){
      this.xemlichsulist = this.xemLichSu2Service.xemlichsulist.filter( item => {
        return item.tenNhaXe.includes(this.keyword);
      });
    }else {
      this.xemlichsulist = this.xemLichSu2Service.xemlichsulist;
    }
  }
  updatekeyword2(value: string){
    this.keyword = value;
    if (this.keyword){
      this.xemlichsulist = this.xemLichSu2Service.xemlichsulist.filter( item => {
        return item.benDi.includes(this.keyword);
      });
    }else {
      this.xemlichsulist = this.xemLichSu2Service.xemlichsulist;
    }
  }
  updatekeyword3(value: string){
    this.keyword = value;
    if (this.keyword){
      this.xemlichsulist = this.xemLichSu2Service.xemlichsulist.filter( item => {
        return item.benDen.includes(this.keyword);
      });
    }else {
      this.xemlichsulist = this.xemLichSu2Service.xemlichsulist;
    }
  }
}
