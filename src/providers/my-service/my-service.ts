//import { HttpClient } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/*
  Generated class for the MyserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//  let apiUrl=" http://143b990f.ngrok.io/";
let apiUrl="http://192.168.43.98:3100/";
@Injectable()
export class MyServiceProvider {
  apiUrl=apiUrl;
  table;
  store_id;
  constructor(public http: Http,public sqlite:SQLite) {
    console.log('Hello MyserviceProvider Provider');
  }
  postData(credentials, type) {
    return this.http.post(apiUrl+type,credentials);
   
  }

}