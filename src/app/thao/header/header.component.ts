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
  constructor(
    private oauthService: SocialAuthService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.oauthService.authState.subscribe(
      data => {
        this.userLogged = data;
        this.isLogged = (this.userLogged != null && this.tokenStorage.getToken() != null);
      }
    );
    if (!this.isLogged){
      this.userLogged = this.tokenStorage.getUser();
      if (this.userLogged) this.isLogged = true;
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
