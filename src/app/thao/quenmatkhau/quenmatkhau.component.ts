import { Component, OnInit } from '@angular/core';
import {User} from "../../nhan/Models/User.class";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../_services/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quenmatkhau',
  templateUrl: './quenmatkhau.component.html',
  styleUrls: ['./quenmatkhau.component.css']
})
export class QuenmatkhauComponent implements OnInit {
  //@ts-ignore
  account: User;
  // @ts-ignore
  formGroup: FormGroup;
  errorMessage = '';
  isSubmited = false;
  // formValid = false;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toaster: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['']
    });
  }
  onSubmit() {
      this.isSubmited = true;
      this.authService.resetPassword(this.formGroup.value.email).subscribe(
        data => {
          this.toaster.success("Email đã được gửi!", "Thành công: ", {
            timeOut: 2500,
            extendedTimeOut: 1500

          });
          // this.router.navigateByUrl("/verifypass");

        },
        err => {
          this.toaster.error("Sai tên đăng nhập hoặc tên đăng nhập chưa được đăng ký", "Gửi email thất bại: ", {
            timeOut: 3000,
            extendedTimeOut: 1500
          });
        }
      );
  }

}
