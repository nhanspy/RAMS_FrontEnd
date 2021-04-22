import { Component, OnInit } from '@angular/core';
import {AuthService} from "../_services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../_services/token-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css', '../../../assets/Thao/css/test.css']
})
export class DangkyComponent implements OnInit {
  // @ts-ignore
  formdknhaxe: FormGroup;
  constructor(
  private formBuild: FormBuilder,
  private tokenStorageService: TokenStorageService,
  private authService: AuthService,
  private router: Router,
  private toastr: ToastrService,
  private route: ActivatedRoute) {
    this.formdknhaxe= this.formBuild.group({
      tennx: ['',[Validators.required]],
      username: ['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      re_password:['',[Validators.required]],
      phone:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
      email:['',[Validators.required,Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
      address:['',[Validators.required]],
      }
    );
  }
  validation_messages = {
    'tennx': [
      {type: 'required',message: 'Trường này không được để trống!'},
      {type:'pattern',message: 'Tên không chứa các ký tự đặc biệt' },
      ],
    'username': [
      {type: 'required',message: 'Trường này không được để trống!'},
      {type:'pattern',message: 'Tên không chứa các ký tự đặc biệt' },
      {type:'pattern',message: 'Tên đăng nhập nhiều hơn 5 ký tự' },
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
    'phone':[
      {type: 'required',message: 'Trường này không được để trống!'},
      {type: 'pattern', message: 'Số điện thoại 10 số'},
    ],
    'email':[
      {type: 'required',message: 'Trường này không được để trống!'},
      {type:'pattern',message: 'Email sai định dạng' }
    ],
    'address':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ]
  };

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.formdknhaxe.value);
    {
      if(this.checkPasswords(this.formdknhaxe)){
        this.toastr.warning("Mật khẩu và xác nhận mật khẩu không giống nhau","Warning:",{
          timeOut: 1500,
          extendedTimeOut:1500
        })
      }else {
        this.authService.dangky(this.formdknhaxe.value).subscribe(
          data => {
            this.toastr.success(data.message, "Đăng ký thành công ", {
              timeOut: 3500,
              extendedTimeOut: 1500
            });
            this.router.navigateByUrl("/login",);

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
