import { Component, OnInit } from '@angular/core';
import {SocialAuthService, SocialUser} from "angularx-social-login";
import {Router} from "@angular/router";
import {TokenStorageService} from "../_services/token-storage.service";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  userLogged: SocialUser;
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
  }
  logOut(): void {
    this.oauthService.signOut().then(
      data => {
        this.tokenStorage.logOut();
        this.router.navigate(['/login']);
      }
    );
  }

}
