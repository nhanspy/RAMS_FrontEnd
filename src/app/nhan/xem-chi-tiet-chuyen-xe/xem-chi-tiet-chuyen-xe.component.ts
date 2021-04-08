import { Component, OnInit } from '@angular/core';
import {XemChiTietChuyenXeService} from '../service/xem-chi-tiet-chuyen-xe.service';
import {ChuyenXe} from '../../Models/ChuyenXe.class';

@Component({
  selector: 'app-xem-chi-tiet-chuyen-xe',
  templateUrl: './xem-chi-tiet-chuyen-xe.component.html',
  styleUrls: ['./xem-chi-tiet-chuyen-xe.component.css']
})
export class XemChiTietChuyenXeComponent implements OnInit {

  constructor(private xemChiTietChuyenXeService: XemChiTietChuyenXeService) { }

  // @ts-ignore
  chuyenXe: ChuyenXe;
  maChuyenXe = 'mcx01';

  ngOnInit(): void {
    this.maChuyenXe = 'mcx01';
    this.xemChiTietChuyenXeService.read(this.maChuyenXe).subscribe(data => {
      this.chuyenXe = data;
      console.log(this.chuyenXe);
    }, error => {
      console.log(error);
    });
  }

}
