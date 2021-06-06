import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import Ghe from '../Models/Ghe.class';

const baseURL = 'http://localhost:8080/api/v1';
@Injectable({
  providedIn: 'root'
})
export class GheFirebaseService {

  private dbPath = '/ghe';

  tutorialsRef: AngularFireList<Ghe>;

  constructor(private db: AngularFireDatabase, private _httpClient: HttpClient) {
    this.tutorialsRef = db.list(this.dbPath);
  }

  getGhe(maXe: string): Observable<any>{
    return this._httpClient.get(baseURL + '/ghe/xe/' + maXe);
  }

  updateGhe(ghe: Ghe): Observable<any>{
    const data = {
      maGhe: ghe.maGhe,
      maTrangThaiGhe: ghe.trangThaiGhe
    }
    return this._httpClient.post(baseURL + '/ghe/updateTrangThaiGhe', data);
  }

  getAll(): AngularFireList<Ghe> {
    return this.tutorialsRef;
  }

  create(tutorial: Ghe): any {
    return this.tutorialsRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    // this.tutorialsRef = this.db.list('/' + value.email)
    return this.tutorialsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
  }
}
