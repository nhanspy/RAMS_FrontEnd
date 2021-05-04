import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import {VeXe} from '../../nhan/Models/VeXe.class';
import {KiemTraVeService} from '../_services/thongtinve.service';
// import {Thongtinve} from '../../Model/thongtinve.class';

// tslint:disable-next-line:class-name


@Component({
  selector: 'app-kiem-tra-ve',
  templateUrl: './kiem-tra-ve.component.html',
  styleUrls: ['./kiem-tra-ve.component.css']
})
export class KiemTraVeComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  constructor(private _kiemTraVeService: KiemTraVeService) {
    console.log(123);
  }

  // @ts-ignore
  veXe: VeXe;
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _maVe: string;
  get maVe(): string {
    return this._maVe;
  }

  @Input()
  set maVe(value: string) {
    this._maVe = value;
    console.log('da qua cp con: ' + value);
    if (this.maVe) {
      // @ts-ignore
      this.ve = this._thongtinveService.thongtinveList.filter(item => {
        return item.maVe.includes(this.maVe);
      });
    } else {
      // @ts-ignore
      this.thongtinveList = this._thongtinveService.thongtinveList;
    }
  }

  ngOnInit(): void {
    this._maVe = 'mv02';
    console.log(123);
    this._kiemTraVeService.readById(this._maVe).subscribe(data => {
      // @ts-ignore
      this.veXe = data;
      console.log(data);
      console.log(this.veXe);

    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  search(maVe: any, event: any){

    if (event.code === 'Enter'){
      this._maVe = maVe;
      console.log(123);
      this._kiemTraVeService.readById(this._maVe).subscribe(data => {
        // @ts-ignore
        this.veXe = data;
        console.log(data);
        console.log(this.veXe);

      }, error => {
        console.log(error);
        alert('Không có mã vé');
      });
    }
  }
}
