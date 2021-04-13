import {Component, OnInit} from '@angular/core';
import {QlNguoiDungService} from '../../Services/kien-s/ql-nguoi-dung.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupRequest} from '../../nhan/Models/SignupRequest.class';

@Component({
  selector: 'app-add-nguoidung',
  templateUrl: './add-nguoidung.component.html',
  styleUrls: ['./add-nguoidung.component.css'],
  providers: [QlNguoiDungService]
})
export class AddNguoidungComponent implements OnInit {
  // @ts-ignore
  user: SignupRequest;

  constructor(private qlNguoiDungService: QlNguoiDungService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.user = new SignupRequest();
  }

  // tslint:disable-next-line:typedef
  add() {
    // @ts-ignore
    console.log(this.user);
    this.qlNguoiDungService.create(this.user).subscribe(response => {
        alert('Thêm thành công!!');
        console.log(response);
      },
      // @ts-ignore
      error => {
        console.log(error);
      });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.add();
  }
}
