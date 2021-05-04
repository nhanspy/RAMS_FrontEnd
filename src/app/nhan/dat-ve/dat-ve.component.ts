import {Component, OnInit} from '@angular/core';
import {DatVeService} from '../service/dat-ve.service';
import {VeXe} from '../Models/VeXe.class';

@Component({
  selector: 'app-dat-ve',
  templateUrl: './dat-ve.component.html',
  styleUrls: ['./dat-ve.component.css']
})
export class DatVeComponent implements OnInit {

  constructor(private datVeService: DatVeService) {
    this.datVeService.getAll().subscribe(
      data => {
        this.veXes = data;
        console.log(this.veXes);
      },
      error => {
        console.log('------------');
        console.log(error);
      }
    );

    this.datVeService.getById('mv02').subscribe(
      data => {
        console.log(data);
        this.veXe = data;
      }, error => {
        console.log(error);
      }
    );
  }

  // @ts-ignore
  veXe: VeXe;
  veXes: VeXe[] = [];

  ngOnInit(): void {
  }


}
