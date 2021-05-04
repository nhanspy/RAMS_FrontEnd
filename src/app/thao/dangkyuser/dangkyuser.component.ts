import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../_services/token-storage.service";
import {AuthService} from "../_services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-dangkyuser',
  templateUrl: './dangkyuser.component.html',
  styleUrls: ['./dangkyuser.component.css']
})
export class DangkyuserComponent implements OnInit {
  // @ts-ignore
  formRegnx: FormGroup;

  constructor(private formBuild: FormBuilder,
              private tokenStorageService: TokenStorageService,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService,
              private route: ActivatedRoute) {
    this.formRegnx= this.formBuild.group({
        ten: ['',[Validators.required]],
        username: ['',[Validators.required]],
        password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
        re_password:['',[Validators.required]],
        soDienThoai:['',[Validators.required,Validators.pattern('^(\\+84|0)\\d{9,10}')]],
        email:['',[Validators.required,Validators.pattern('^[\\w-\\.]+@(?!.*gmai\\.com|mail|gmial|gmaiil|gmeo|gmaill|gnail\\.com|gmail\\.con|outlook\\.com\\.vn|mytam\\.info|mytamentertainment\\.com|yhoo\\.com|yaho\\.com|yahu\\.com|gmail\\.com\\.vn|gamil\\.com|email\\.com.*)([\\w-]+\\.)+[\\w-]{2,4}$')]],
      // email:['',[Validators.required,Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
       diaChi:['',[Validators.required]],
      }
    );
  }
  validation_messages = {
    'username': [
      {type: 'required',message: 'Trường này không được để trống!'},
      // {type:'pattern',message: 'Tên không chứa các ký tự đặc biệt' },
      // {type:'pattern',message: 'Tên đăng nhập nhiều hơn 5 ký tự' },
      {type: 'maxlength', message: 'Tên đăng nhập ít hơn 50 ký tự'},
    ],
    'password': [
      {type: 'required',message: 'Trường này không được để trống!'},
      {type: 'minlength', message: 'Mật khẩu nhiều hơn 6 ký tự'},
      {type: 'maxlength', message: 'Mật khẩu ít hơn 20 ký tự'},
    ],
    're_password':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'diaChi':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'soDienThoai':[
      {type: 'required',message: 'Trường này không được để trống!'},
      {type: 'pattern', message: 'Số điện thoại không hợp lệ'},
    ],
    'email':[
      {type: 'required',message: 'Trường này không được để trống!'},
      {type:'pattern',message: 'Email sai định dạng' }
    ]
  };

  ngOnInit(): void {
  }
  onSubmitt(): void {
    console.log(this.formRegnx.value);
    {
      if (this.checkPasswords(this.formRegnx)) {
        this.toastr.warning("Mật khẩu và xác nhận mật khẩu không giống nhau", "Warning:", {
          timeOut: 1500,
          extendedTimeOut: 1500
        })
        alert('Mật khẩu và xác nhận mật khẩu không giống nhau');
      } else {
        this.authService.dangky(this.formRegnx.value).subscribe(
          data => {
            this.toastr.success(data.message, "Hoàn tất ", {
              timeOut: 3500,
              extendedTimeOut: 1500
            });
            alert('Đăng ký thành công');
            // this.router.navigate(['dangnhap']).then(() => {
            //   window.location.reload();
            // });
          },
          err => {
            this.toastr.error(err.error.message, 'Lỗi: ', {
              timeOut: 1500,
              extendedTimeOut: 1500
            });
          }
        );
      }
    }
  }
  checkPasswords(formLogin: FormGroup) { // here we have the 'passwords' group
    const password = formLogin.get('password')!.value;
    const confirmPassword = formLogin.get('re_password')!.value;
    return password === confirmPassword ? null : { notSame: true }
  }
}
