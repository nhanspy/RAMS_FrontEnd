import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {TokenStorageService} from "../_services/token-storage.service";
import {AuthService} from "../_services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import {TokenDto} from "../model/token-dto";




@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  // @ts-ignore
  socialUser: SocialUser;
  // @ts-ignore
  userLogged: SocialUser;

  constructor(
    private oauthService: SocialAuthService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['/']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  signInWithGoogle(): void {
    // @ts-ignore
    this.oauthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      // @ts-ignore
      data => {
        this.socialUser = data;
        const tokenGoogle = new TokenDto(this.socialUser.idToken);
        this.authService.google(tokenGoogle).subscribe(
          res => {
            this.tokenStorage.setToken(res.value);
            this.isLoggedIn = true;
            this.router.navigate(['/trangchu']);
          },
          err => {
            console.log(err);
            this.logOut();
          }
        );
      }
    ).catch(
      // @ts-ignore
      err => {
        console.log(err);
      }
    );
  }
  signInWithFB(): void {
    this.oauthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      // @ts-ignore
      data => {
        this.socialUser = data;
        const tokenFace = new TokenDto(this.socialUser.authToken);
        this.authService.facebook(tokenFace).subscribe(
          res => {
            this.tokenStorage.setToken(res.value);
            this.isLoggedIn = true;
            this.router.navigate(['/']);
          },
          err => {
            console.log(err);
            this.logOut();
          }
        );
      }
    ).catch(
      // @ts-ignore
      err => {
        console.log(err);
      }
    );
  }

  logOut(): void {
    this.oauthService.signOut().then(
      data => {
        this.tokenStorage.logOut();
        this.isLoggedIn = false;
      }
    );
  }

}
