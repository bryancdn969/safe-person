import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

//let apiUrl = "http://www.mythinks.net/scholaradmin/public/api/";
//let apiUrl  = "http://localhost/tesissafepersonadmin/public/api/";
let apiUrl = "http://localhost/tesissafepersonadmin/safeperson/public/api/";
/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: Http) {
    this.http = http;
    console.log('Hello UserServiceProvider Provider');
  }

  postFormData(formData, type){
    var form_data = new FormData();
    for ( var key in formData ) {
      form_data.append(key, formData[key]);
    }
    return new Promise((resolve, reject) =>{
      let headers = new Headers();
        //headers.append('Access-Control-Allow-Origin', '*');
        //headers.append('Access-Control-Allow-Headers',  'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
        //headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        //headers.append('Access-Control-Allow-Credentials',  'true');

      this.http.post(apiUrl+type, form_data, {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });
    });

  }

}
