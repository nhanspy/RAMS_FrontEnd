import { Component, OnInit } from '@angular/core';
import {AuthService} from "../_services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../../nhan/Models/User.class";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  // //@ts-ignore
  // account: User;
  // // @ts-ignore
  // formGroup: FormGroup;
  // errorMessage = '';
  // isSubmited = false;
  // // formValid = false;


  constructor(
    // private formBuilder: FormBuilder,
    // private authService: AuthService,
    // private toaster: ToastrService,
    // private router: Router
  ) {}

  ngOnInit(): void {
    // this.formGroup = this.formBuilder.group({
    //     email: ['']
    // });
  }
  onSubmit() {
    // this.isSubmited = true;
    // this.authService.resetPassword(this.formGroup.value.email).subscribe(
    //   data => {
    //     this.toaster.success("Email đã được gửi!", "Thành công: ", {
    //       timeOut: 2500,
    //       extendedTimeOut: 1500
    //
    //     });
    //     // this.router.navigateByUrl("/verifypass");
    //
    //   },
    //   err => {
    //     this.toaster.error("Sai tên đăng nhập hoặc tên đăng nhập chưa được đăng ký", "Gửi email thất bại: ", {
    //       timeOut: 3000,
    //       extendedTimeOut: 1500
    //     });
    //   }
    // );
  }
}
