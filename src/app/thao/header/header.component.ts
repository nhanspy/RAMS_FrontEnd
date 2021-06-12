import { Component, OnInit } from '@angular/core';
import {SocialAuthService, SocialUser} from "angularx-social-login";
import {Router} from "@angular/router";
import {TokenStorageService} from "../_services/token-storage.service";



@Component({
  selector: 'app-header-thao',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../../assets/css/material-kit.css']
})
export class HeaderThaoComponent implements OnInit {
  // @ts-ignore
  userLogged: any;
  // @ts-ignore
  isLogged: boolean;
  isAdmin = false;
  isNhaXe = false;
  isTruyVet = false;
  // @ts-ignore
  private roles: string[];
  constructor(
    private oauthService: SocialAuthService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    // window.location.reload();
    this.oauthService.authState.subscribe(
      data => {
        this.userLogged = data;
        this.isLogged = (this.userLogged != null && this.tokenStorage.getToken() != null);
      }
    );
    if (!this.isLogged){
      this.userLogged = this.tokenStorage.getUser();
      if (this.userLogged) this.isLogged = true;
      const user = this.tokenStorage.getUser();
      this.roles = user.roles;
      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      this.isNhaXe = this.roles.includes('ROLE_NHAXE');
      this.isTruyVet = this.roles.includes('ROLE_TRUYVET');
    }
  }
  logOut(): void {
    this.oauthService.signOut().then(
      data => {
        this.tokenStorage.signOut();
        // this.isLogged = false;
        // this.router.navigate(['/login']);
      }
    ).catch(error => {
      this.tokenStorage.signOut();
    });
    this.isLogged = false;
  }

}
