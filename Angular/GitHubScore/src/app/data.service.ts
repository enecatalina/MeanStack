import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  getUser(username) {
    console.log("IN data.service")
    console.log(username)
    return this._http.get(`https://api.github.com/users/${username}`)
      .map(data => data.json())
      .toPromise();
  }


}