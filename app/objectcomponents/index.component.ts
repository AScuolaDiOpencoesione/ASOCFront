
import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router-deprecated';
import { AuthHttp } from 'angular2-jwt';

let styles = require('./home.css');
let template = require('./home.html');


@Component({
  selector: 'home',
  directives: [CORE_DIRECTIVES],
  // Here we specify the template we'll use
  template: template,
  styles: [styles]
})
export class Home {
  // Here we define this component's instance variables
  // They're accessible from the template
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;

  constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
    // We get the JWT from localStorage
    this.jwt = localStorage.getItem('jwt');
    // We also store the decoded JSON from this JWT
    this.decodedJwt = this.jwt;
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.parent.navigateByUrl('/login');
  }

  _callApi(type, url) {
    this.response = null;
    if (type === 'Anonymous') {
      // For non-protected routes, just use Http
      this.http.get(url)
        .subscribe(
          response => this.response = response.text(),
          error => this.response = error.text()
        );
    }
    if (type === 'Secured') {
      // For protected routes, use AuthHttp
      this.authHttp.get(url)
        .subscribe(
          response => this.response = response.text(),
          error => this.response = error.text()
        );
    }
  }
}