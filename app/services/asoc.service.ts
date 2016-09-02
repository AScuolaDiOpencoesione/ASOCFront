import { Injectable, NgZone } from '@angular/core';
import { HTTP_PROVIDERS, Http, Response, Request, RequestMethod, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Router, CanActivate } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { AuthHttp, tokenNotExpired } from 'angular2-jwt';

import {IDRFService, DRFService, UserService} from "./drf.service";
import {JWTAuthService} from "./drf.jwt.service";

@Injectable()
export class ASOCService<T> extends DRFService<T>{
    constructor (http: AuthHttp){
        super(http);
        this.setBaseUrl("http://ea2c9896.ngrok.io");
    }
}

@Injectable()
export class ASOCAuthService extends JWTAuthService{
    constructor(authHttp:AuthHttp, http:Http, zone: NgZone, router: Router){
        super(authHttp, http, zone, router);
        this.setBaseUrl("http://ea2c9896.ngrok.io");
        this.setSpecUrl("/api-token-auth/");
    }
}

@Injectable()
export class ASOCUserService extends UserService{
    constructor(authHttp:AuthHttp, http:Http, zone: NgZone, router: Router){
        super(authHttp, http);
        this.setBaseUrl("http://ea2c9896.ngrok.io/auth");
    }
}



