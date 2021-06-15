import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChuyenXe} from '../../nhan/Models/ChuyenXe.class';
import {XemLichSuService} from '../Services/xem-lich-su.service';
import {DatePipe} from '@angular/common';



@Component({
  selector: 'app-xem-lich-su',
  templateUrl: './xem-lich-su.component.html',
  styleUrls: ['./xem-lich-su.component.css',
    '../../../assets/trong/css/style.css']
})
export class XemLichSuComponent implements OnInit, OnChanges {
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

  constructor(private xemLichSuService: XemLichSuService,
              private datePipe: DatePipe) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // this.xemlichsulist = this.xemLichSu2Service.xemlichsulist;
    this.xemLichSuService.readAll().subscribe(data => {
      this.xemlichsulist = data;
      this.xemlichsulistRoot = data;
    }, error => {
      console.log('loi me roi: ' + error);
    });
    // @ts-ignore
    // this.xemLichSuService.getNhaXe().subscribe(data => {
    //   this.nhaxelist = data;
    // }, error => {
    //   console.log('loi' + error);
    // });


    // console.log(this.xemLichSuService.getXeTheoChuyenXe(this.xemlichsulist[0]));
  }
  // tslint:disable-next-line:typedef
  search(){
    let dem = 0;
    this.xemlichsulist = this.xemlichsulistRoot;
    if (this.keywordMaChuyen){
      this.xemlichsulist = this.xemlichsulist.filter( item => {
        return item.maChuyen.toLowerCase().includes(this.keywordMaChuyen.toLowerCase());
      });
      dem++;
    }
    if (this.keywordBenDi){
      this.xemlichsulist = this.xemlichsulist.filter( item => {
        return item.benDi.tenBen.toLowerCase().includes(this.keywordBenDi.toLowerCase());
      });
      dem++;
    }
    if (this.keywordBenDen){
      this.xemlichsulist = this.xemlichsulist.filter( item => {
        return item.benDen.tenBen.toLowerCase().includes(this.keywordBenDen.toLowerCase());
      });
      dem++;
    }
    if (this.keywordThoiGian){
      this.xemlichsulist = this.xemlichsulist.filter( item => {
        // @ts-ignore
        // console.log(this.datePipe.transform(item.thoiGian, 'dd/MM/yyyy'));
        // @ts-ignore
        return this.datePipe.transform(item.thoiGian, 'dd/MM/yyyy').includes(this.keywordThoiGian);
      });
      dem++;
    }
    if (this.keywordMaXe){
      this.xemlichsulist = this.xemlichsulist.filter( item => {
        return item.xe.nhaXe.tenNhaXe.toLowerCase().includes(this.keywordMaXe.toLowerCase());
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
    console.log(value);
    this.search();
  }
  searchMaXe(value: string){
    this.keywordMaXe = value;
    this.search();
  }

}
