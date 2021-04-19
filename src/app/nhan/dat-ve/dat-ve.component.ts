import { Component, OnInit } from '@angular/core';
import {DatVeService} from '../service/dat-ve.service';
import {VeXe} from '../Models/VeXe.class';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dat-ve',
  templateUrl: './dat-ve.component.html',
  styleUrls: ['./dat-ve.component.css']
})
export class DatVeComponent implements OnInit {

  // @ts-ignore
  price: number;
  maVe = 'mv02';
  constructor(private datVeService: DatVeService, private router: Router) {
    // this.datVeService.getAll().subscribe(
    //   data => {
    //     this.veXes = data;
    //     console.log(this.veXes);
    //   },
    //   error => {
    //     console.log('------------');
    //     console.log(error);
    //   }
    // );

    this.datVeService.getById(this.maVe).subscribe(
      data => {
        console.log(data);
        this.veXe = data;
        this.price = this.veXe.giaTien;
      }, error => {
        console.log(error);
      }
    );
  }

  // @ts-ignore
  veXe: VeXe;
  request: any;
  veXes: VeXe[] = [];

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  thanhToan(){
    console.log(this.price);
    console.log(window.location.href = 'http://localhost:8080/' + this.price);
    // this.datVeService.postPayment(this.price).subscribe(
    //   data => {
    //     // console.log(data.url);
    //
    //     // this.datVeService.checkPayment(data.url).subscribe(data => {
    //     //   console.log(data);
    //     // },
    //     //   error => {
    //     //   console.log(error);
    //     //   });
    //     // this.router.navigate([data.url]);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }

}
