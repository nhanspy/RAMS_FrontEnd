import { Component, OnInit } from '@angular/core';
import {AuthService} from "../_services/auth.service";


@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css', '../../../assets/Thao/css/test.css']
})
export class DangkyComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService:AuthService) {
  }

  ngOnInit(): void {
  }
  onSubmittt(): void {
    this.authService.dangky(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
