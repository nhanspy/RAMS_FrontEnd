import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {SocialAuthService} from "angularx-social-login";
import {Router} from "@angular/router";
import {TokenStorageService} from "../_services/token-storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @ts-ignore
  userLogged: SocialUser;
  // @ts-ignore
  isLogged: boolean;

  constructor( private authService: SocialAuthService,
               private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(
      data => {
        this.userLogged = data;
        this.isLogged = (this.userLogged != null && this.tokenStorage.getToken() != null);
      }
    );
  }

}
