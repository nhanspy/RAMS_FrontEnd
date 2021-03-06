import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {TokenStorageService} from "../_services/token-storage.service";
import {AuthService} from "../_services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
// import {GoogleLoginProvider, SocialAuthService, SocialUser} from "angularx-social-login";
import {TokenDto} from "../model/token-dto";
import {Location} from '@angular/common';




@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css', '../../../assets/css/material-kit.css']
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
    private router: Router,
    private location: Location
  ) {  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      // this.win;
    }
  }
  onSubmit(): void {
    console.log(321);
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        // this.router.navigate(this.location.back());
        history.back();
        // window.location.reload();
        // this.location.back();
        // window.location.reload();
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  signInWithGoogle(): void {
    console.log(123);
    // @ts-ignore
    this.oauthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      // @ts-ignore
      data => {
        this.socialUser = data;
        const tokenGoogle = new TokenDto(this.socialUser.idToken);
        this.authService.google(tokenGoogle).subscribe(
          res => {
            console.log(res);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.tokenStorage.saveToken(res.value);
            this.tokenStorage.saveUser(data);
            // this.tokenStorage.setToken(res.value);
            // this.router.navigate(['/timkiemtuyen']);
            window.location.reload();
            this.location.back();
            history.back();
            // this.router.navigate(['dangnhap']).then(() => {
            //   window.location.reload();
            // });
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
            window.location.reload();
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
    this.tokenStorage.logOut();
    this.isLoggedIn = false;
  }

}
