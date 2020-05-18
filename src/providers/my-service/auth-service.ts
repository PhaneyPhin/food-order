//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//add 2 lines below
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

//let apiUrl = 'http://yourdomain.com/PHP-Slim-Restful/api/'; //add this
//let apiUrl = 'http://localhost/dsrdSystem/dsrdsbpac/reliefdb/api/';
let apiUrl = 'http://dsrd.pn.psu.ac.th/dsrdSystem/dsrdsbpac/reliefdb/api/';
//let apiUrl = 'http://localhost/mobileapp/api/';
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) { //replace HttpClient
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      
      this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

}
