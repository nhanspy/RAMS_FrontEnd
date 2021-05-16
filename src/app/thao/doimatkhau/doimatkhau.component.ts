import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../_services/auth.service";
import {TokenStorageService} from "../_services/token-storage.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-doimatkhau',
  templateUrl: './doimatkhau.component.html',
  styleUrls: ['./doimatkhau.component.css']
})
export class DoimatkhauComponent implements OnInit {
  isSuccessful = true;
  // @ts-ignore
  isSendMail: boolean;
  // @ts-ignore
  isSubmited: true;

  // @ts-ignore
  formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private tokenStorage: TokenStorageService,
    private toaster: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
      repeatNewPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
    });
    this.route.queryParams.subscribe(params => {
      let code = params['code'];
      if (code == null) {
        this.isSendMail = false;
      } else {
        this.isSendMail = true;
        this.isSuccessful = false;
        this.authService.verifyPassword(code).subscribe(
          data => {
            this.isSuccessful = (data.message === 'accepted');
          },
          err => {
            this.isSuccessful = false;
          }
        );
      }
    });
  }
  // @ts-ignore
  code: string;
  onSubmitt() {
    if (this.formGroup.value.newPassword === this.formGroup.value.repeatNewPassword) {
      this.route.queryParams.subscribe(params => {
        this.code = params['code'];
      });
      this.authService.doResetPassword(this.formGroup.value.newPassword, this.code).subscribe(data => {
        this.toaster.success('Mật khẩu đã được thay đổi!', "Thành công");
        // this.router.navigateByUrl("/dangnhap")
      })
    } else {
      this.toaster.error("Trường nhập lại mật khẩu và mật khẩu không giống nhau!", "Lỗi: ", {
        timeOut: 3500,
        extendedTimeOut: 1500
      })
    }
  }

  validation_messages = {
    'password': [
      {type: 'required', message: 'Trường này không được để trống!'},
      {type: 'minlength', message: 'Mật khẩu cần nhiều hơn 8 ký tự'},
      {type: 'maxlength', message: 'Mật khẩu chỉ được ít hơn 32 ký tự'},
    ]
  };
}
