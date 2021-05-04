import { Component, OnInit } from '@angular/core';
import {DatVeService} from '../service/dat-ve.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Ghe} from '../Models/Ghe.class';
import {XemChiTietChuyenXeService} from '../service/xem-chi-tiet-chuyen-xe.service';
import {ChuyenXe} from '../Models/ChuyenXe.class';
import {AuthService} from '../service/auth.service';
import {TokenStorageService} from '../service/token-storage.service';
import {XuatVeService} from '../service/xuat-ve.service';

@Component({
  selector: 'app-xuat-ve',
  templateUrl: './xuat-ve.component.html',
  styleUrls: ['./xuat-ve.component.css']
})
export class XuatVeComponent implements OnInit {

  constructor(private xuatVeService: XuatVeService, private datVeService: DatVeService, private router: Router, private _location: Location, private xemChiTietChuyenXeService: XemChiTietChuyenXeService, private authService: AuthService, private tokenStorage: TokenStorageService) { }

  // @ts-ignore
  maVe: String[];
  // @ts-ignore
  gheDaChons: Ghe[];
  // @ts-ignore
  strMaGhe: String[] = [];
  ghes: Ghe[] = [];
  ghesTang1: Ghe[] = [];
  ghesTang2: Ghe[] = [];
  newGhesTang1: Ghe[] = [];
  newGhesTang2: Ghe[] = [];
  // @ts-ignore
  chuyenXe: ChuyenXe;
  isLoggedIn = false;
  currentUser: any;
  errorMessage = '';
  roles: string[] = [];

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.currentUser = this.tokenStorage.getUser();
      console.log(this.currentUser);
      this.datVeService.sendMail(this.currentUser.email, 'thao_ngu').subscribe(
        data => {
          console.log(data);
        }, error => {
          console.log(error);
        }
      );
    } else {
      this.router.navigate(['dangnhap']);
    }
    this.init();
  }

  private init(): void {
    if (localStorage.getItem('maVeChuaThanhToan')) {
      // @ts-ignore
      this.maVe = JSON.parse(localStorage.getItem('maVeChuaThanhToan'));
      console.log(this.maVe);
      this.updateVe();
    }
    if (localStorage.getItem('gheDaChons')) {
      // @ts-ignore
      this.gheDaChons = JSON.parse(localStorage.getItem('gheDaChons'));
      this.gheDaChons.forEach(item => {
        this.strMaGhe.push(item.maGhe);
      });
      // @ts-ignore
      console.log(this.strMaGhe);
      this.updateGhe(this.strMaGhe);
    }
    if (localStorage.getItem('chuyenXe')) {
      // @ts-ignore
      this.chuyenXe = JSON.parse(localStorage.getItem('chuyenXe'));
      console.log(this.chuyenXe);
      // this.getGhe();
    }
    if (localStorage.getItem('ghes')) {
      // @ts-ignore
      this.ghes = JSON.parse(localStorage.getItem('ghes'));
    }
    if (localStorage.getItem('newGhesTang1')) {
      // @ts-ignore
      this.newGhesTang1 = JSON.parse(localStorage.getItem('newGhesTang1'));
    }
    if (localStorage.getItem('newGhesTang2')) {
      // @ts-ignore
      this.newGhesTang2 = JSON.parse(localStorage.getItem('newGhesTang2'));
    }
  }

  private updateVe() {
    this.datVeService.updateVeXe(this.maVe).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.error();
      }
    );
  }

  private updateGhe(strMaVe: String[]) {
    this.datVeService.updateGhe(strMaVe).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.error();
      }
    );
  }

  getGhe(): void {
    this.ghes = [];
    this.gheDaChons = [];
    this.newGhesTang1 = [];
    this.newGhesTang2 = [];
    if (this.chuyenXe) {
      this.xemChiTietChuyenXeService.getGhe(this.chuyenXe.xe.maXe).subscribe(
        data => {
          this.ghes = data;
          this.gheDaChons = this.ghes.slice().filter(
            item => {
              if (item.trangThaiGhe.maTrangThai === 'mttg02'){
                item.daChon = true;
                return true;
              }
              return false;
            }
          );
          // console.log(this.gheDaChons);

          this.ghesTang1 = this.ghes.slice().filter(
            item => {
              return item.tang === 1;
            }
          );
          this.ghesTang2 = this.ghes.slice().filter(
            item => {
              return item.tang === 2;
            }
          );
          // @ts-ignore
          this.ghes.sort((a, b) => {
            return a.soGhe > b.soGhe;
          });
          while (this.ghesTang1.length) {
            // @ts-ignore
            this.newGhesTang1.push(this.ghesTang1.splice(0, 3));
          }
          while (this.ghesTang2.length) {
            // @ts-ignore
            this.newGhesTang2.push(this.ghesTang2.splice(0, 3));
          }
          if (this.chuyenXe) {
            localStorage.setItem('chuyenXe', JSON.stringify(this.chuyenXe));
          }
          if (this.gheDaChons) {
            localStorage.setItem('gheDaChons', JSON.stringify(this.gheDaChons));
          }
          if (this.newGhesTang1) {
            localStorage.setItem('newGhesTang1', JSON.stringify(this.newGhesTang1));
          }
          if (this.newGhesTang2) {
            localStorage.setItem('newGhesTang2', JSON.stringify(this.newGhesTang2));
          }
          if (this.ghes) {
            localStorage.setItem('ghes', JSON.stringify(this.ghes));
          }
        }, error => {
          console.log(error);
        }
      );
    }
  }
}
