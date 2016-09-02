import { Injectable, NgZone } from '@angular/core';
import { HTTP_PROVIDERS, Http, Response, Request, RequestMethod, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Router, CanActivate } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { AuthHttp, tokenNotExpired } from 'angular2-jwt';

import {IDRFService, DRFService, UserService} from "./drf.service";
import {JWTAuthService} from "./drf.jwt.service";


@Injectable()
export class ASOCUserServcie extends UserService{
    constructor (http: AuthHttp, noauth:Http){
        super(http, noauth);
        this.setBaseUrl("http://www.cityopensource.com:9087/auth");
    }
}

