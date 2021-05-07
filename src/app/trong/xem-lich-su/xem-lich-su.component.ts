import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChuyenXe} from '../../nhan/Models/ChuyenXe.class';
import {XemLichSuService} from '../Services/xem-lich-su.service';
import {Xe} from "../Model/Xe.class";


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
  // totalRec: string;
  // page: number = 1;
  Title = 'XEM LỊCH SỬ TUYẾN XE';
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
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [5, 7, 9];
  // @ts-ignore
  currentTutorial: ChuyenXe;
  currentIndex = -1;
  // @ts-ignore
  title: '';

  constructor(private xemLichSuService: XemLichSuService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
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
    // @ts-ignore
    // this.xemLichSuService.getNhaXe().subscribe(data => {
    //   this.nhaxelist = data;
    // }, error => {
    //   console.log('loi' + error);
    // });


    // console.log(this.xemLichSuService.getXeTheoChuyenXe(this.xemlichsulist[0]));
  }
  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    const params: any = {};

    if (searchTitle) {
      params[`title`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }

  retrieveTutorials(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);

    this.xemLichSuService.readAll()
      .subscribe(
        response => {
          const { xemlichsulist, totalItems } = response;
          this.xemlichsulist = xemlichsulist;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
    console.log(params);
  }

  handlePageChange(event: number): void {
    console.log('1234');
    this.page = event;
    this.retrieveTutorials();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveTutorials();
  }
  refreshList(): void {
    this.retrieveTutorials();
    // this.currentTutorial = undefined;
    // this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: ChuyenXe, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  // tslint:disable-next-line:typedef
  search() {
    let dem = 0;
    this.xemlichsulist = this.xemlichsulistRoot;
    if (this.keywordMaChuyen) {
      this.xemlichsulist = this.xemlichsulist.filter(item => {
        return item.maChuyen.includes(this.keywordMaChuyen);
      });
      dem++;
    }
    if (this.keywordBenDi) {
      this.xemlichsulist = this.xemlichsulist.filter(item => {
        return item.benDi.tenBen.includes(this.keywordBenDi);
      });
      dem++;
    }
    if (this.keywordBenDen) {
      this.xemlichsulist = this.xemlichsulist.filter(item => {
        return item.benDen.tenBen.includes(this.keywordBenDen);
      });
      dem++;
    }
    if (this.keywordThoiGian) {
      this.xemlichsulist = this.xemlichsulist.filter(item => {
        return item.thoiGian.includes(this.keywordThoiGian);
      });
      dem++;
    }
    if (this.keywordMaXe) {
      this.xemlichsulist = this.xemlichsulist.filter(item => {
        return item.xe.nhaXe.tenNhaXe.includes(this.keywordMaXe);
      });
      dem++;
    }
    // tslint:disable-next-line:triple-equals
    if (dem === 0) {
      this.xemlichsulist = this.xemlichsulistRoot;
    }
  }

  searchMaChuyen(value: string) {
    this.keywordMaChuyen = value;
    this.search();
  }

  searchBenDi(value: string) {
    this.keywordBenDi = value;
    this.search();
  }

  searchBenDen(value: string) {
    this.keywordBenDen = value;
    this.search();
  }

  searchThoiGian(value: string) {
    this.keywordThoiGian = value;
    this.search();
  }

  searchMaXe(value: string) {
    this.keywordMaXe = value;
    this.search();
  }

}
