import { Component, OnInit } from '@angular/core';
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-dknhaxe',
  templateUrl: './dknhaxe.component.html',
  styleUrls: ['./dknhaxe.component.css']
})
export class DKNHaxeComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }
  inSubmit(): void {
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
