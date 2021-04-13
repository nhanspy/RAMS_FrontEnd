import { Component, OnInit } from '@angular/core';
import {XemLichSu} from '../Model/xem-lich-su';
import {ChuyenXe} from '../../nhan/Models/ChuyenXe.class';
import {XemLichSuService} from '../Services/xem-lich-su.service';


@Component({
  selector: 'app-xem-lich-su',
  templateUrl: './xem-lich-su.component.html',
  styleUrls: ['./xem-lich-su.component.css']
})
export class XemLichSuComponent implements OnInit {
  xemlichsulist: ChuyenXe[] = [];
  xemlichsulistRoot: ChuyenXe[] = [];
  // @ts-ignore
  totalRec: string;
  page: number = 1;
  Title = 'Xem lịch sử tuyến xe';
  // @ts-ignore
  keywordMaChuyen: string | '';
  // @ts-ignore
  keywordBenDi: string | '';
  // @ts-ignore
  keywordBenDen: string | '';
  // @ts-ignore
  keywordThoiGian: string | '';
  // @ts-ignore
  keywordMaXe: string | '';
  // @ts-ignore
  xe: Xe;
  // @ts-ignore
  tenNhaXe: string;
  // @ts-ignore
  nhaXe: NhaXe;
  Data: any;

  constructor(private xemLichSuService: XemLichSuService) {
  }

  ngOnInit(): void {
    // this.xemlichsulist = this.xemLichSu2Service.xemlichsulist;
    this.xemLichSuService.readAll().subscribe(data => {
      this.xemlichsulist = data;
      this.xemlichsulistRoot = data;
      // @ts-ignore
      // this.totalRec = this.xemlichsulist.length;
      // console.log(this.totalRec);
      // console.log(this.page);
      // tslint:disable-next-line:no-shadowed-variable
      // this.xemLichSuService.getXeTheoChuyenXe(this.xemlichsulist[0]).subscribe(data => {
      //   // @ts-ignore
      //   this.xe = data;
      //   this.xemLichSuService.getNhaXeTheoXe(this.xe).subscribe(data => {
      //     // @ts-ignore
      //     this.nhaXe = data;
      //     this.tenNhaXe = this.nhaXe.tenNhaXe;
      //     console.log(this.tenNhaXe);
      //   });
      // }, error => {
      //   console.log('loi: ' + error);
      // });
    }, error => {
      console.log('loi me roi: ' + error);
    });

    // console.log(this.xemLichSuService.getXeTheoChuyenXe(this.xemlichsulist[0]));
  }
  // tslint:disable-next-line:typedef
  search(){
    let dem = 0;
    this.xemlichsulist = this.xemlichsulistRoot;
    if (this.keywordMaChuyen){
      this.xemlichsulist = this.xemlichsulist.filter( item => {
        return item.maChuyen.includes(this.keywordMaChuyen);
      });
      dem++;
    }
    if (this.keywordBenDi){
      this.xemlichsulist = this.xemlichsulist.filter( item => {
        return item.benDi.tenBen.includes(this.keywordBenDi);
      });
      dem++;
    }
    if (this.keywordBenDen){
      this.xemlichsulist = this.xemlichsulist.filter( item => {
        return item.benDen.tenBen.includes(this.keywordBenDen);
      });
      dem++;
    }
    if (this.keywordThoiGian){
      this.xemlichsulist = this.xemlichsulist.filter( item => {
        return item.thoiGian.includes(this.keywordThoiGian);
      });
      dem++;
    }
    if (this.keywordMaXe){
      this.xemlichsulist = this.xemlichsulist.filter( item => {
        return item.xe.nhaXe.tenNhaXe.includes(this.keywordMaXe);
      });
      dem++;
    }
    // tslint:disable-next-line:triple-equals
    if (dem === 0) {
      this.xemlichsulist = this.xemlichsulistRoot;
    }
  }
  searchMaChuyen(value: string){
    this.keywordMaChuyen = value;
    this.search();
  }
  searchBenDi(value: string){
    this.keywordBenDi = value;
    this.search();
  }
  searchBenDen(value: string){
    this.keywordBenDen = value;
    this.search();
  }
  searchThoiGian(value: string){
    this.keywordThoiGian = value;
    this.search();
  }
  searchMaXe(value: string){
    this.keywordMaXe = value;
    this.search();
  }

}
