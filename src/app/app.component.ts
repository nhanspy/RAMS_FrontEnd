import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ts-ignore
  keyword: string;

  // tslint:disable-next-line:typedef
  updateKeyword(value: string) {
    this.keyword = value;
  }
}
