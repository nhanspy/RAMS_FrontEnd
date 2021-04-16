// import { Component, OnInit } from '@angular/core';
// import {FormBuilder} from "@angular/forms";
// import {AuthService} from "../_services/auth.service";
// import {Router} from "@angular/router";
// // @ts-ignore
// import {ToastrService} from "ngx-toastr";
//
// @Component({
//   selector: 'app-reset-password',
//   templateUrl: './reset-password.component.html',
//   styleUrls: ['./reset-password.component.css']
// })
// export class ResetPasswordComponent implements OnInit {
//   // @ts-ignore
//   account: Account;
//
//   // @ts-ignore
//   formGroup: FormGroup;
//   isSuccessful = false;
//   errorMessage = '';
//   isSubmited = false;
//   formValid = false;
//
//
//   constructor(private formBuilder: FormBuilder,
//               private authService: AuthService,
//               private toastr: ToastrService,
//               private router: Router) {}
//
//   ngOnInit(): void {
//     this.formGroup = this.formBuilder.group({
//       email: ['']
//     });
//   }
//   onSubmit() {
//     this.isSubmited = true;
//     this.authService.resetPassword(this.formGroup.value.email).subscribe(
//       data => {
//         this.toastr.success("Email đã được gửi!", "Thành công: ", {
//           timeOut: 2500,
//           extendedTimeOut: 1500
//         });
//         this.router.navigateByUrl("/verify-reset-password");
//       },
//       err => {
//         this.toastr.error("Sai tên đăng nhập hoặc tên đăng nhập chưa được đăng ký", "Gửi email thất bại: ", {
//           timeOut: 3000,
//           extendedTimeOut: 1500
//         });
//       }
//     );
//   }
// }
