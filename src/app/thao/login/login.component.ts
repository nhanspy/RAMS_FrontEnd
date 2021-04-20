import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import {LoadcssService} from "../_services/loadcss.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService,private  router: Router, private tokenStorage: TokenStorageService, private loadcssService: LoadcssService) {
      this.loadcssService.loadCss('assets/Thao/css/DangNhap.css');

  }

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
        this.router.navigate(['home']).then(() => {
          window.location.reload();
          // this.reloadPage();
        });
      },

      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}

  // reloadPage(): void {
  //   window.location.reload();
  // }
  // validation_messages = {
  //   'password': [
  //     {type: 'required', message: 'Trường này không được để trống!'},
  //     {type: 'minlength', message: 'Mật khẩu cần nhiều hơn 8 ký tự'},
  //     {type: 'maxlength', message: 'Mật khẩu chỉ được ít hơn 32 ký tự'},
  //   ]
  // };
