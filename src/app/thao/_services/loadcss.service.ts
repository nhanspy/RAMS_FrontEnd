import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadcssService {

  constructor() { }
  loadCss(src: string){
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(css);
    css.href = src;
  }
}
