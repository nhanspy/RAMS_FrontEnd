import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../nhan/service/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
    '../../../assets/trong/css/header.css']
})
export class HeaderComponent implements OnInit {

  // @ts-ignore
  private roles: string[];
  isLoggedIn = false;
  isAdmin = false;
  isNhaXe = false;
  isTruyVet = false;
  showModeratorBoard = false;
  admin = false;
  // @ts-ignore
  username: string;

  constructor(private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      this.isNhaXe = this.roles.includes('ROLE_NHAXE');
      this.isTruyVet = this.roles.includes('ROLE_TRUYVET');

      this.username = user.username;

    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
