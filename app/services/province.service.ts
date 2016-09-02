import { Injectable }     from '@angular/core';
import { HTTP_PROVIDERS, Http, Response, Request, RequestMethod, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import {Province} from "../objectmodel/province";

import {IDRFService, DRFService} from "./drf.service";

import { AuthHttp, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class SchoolService extends DRFService<Province>{
    constructor (http: AuthHttp){
        super(http);
        this.setSpecUrl("/province/");

    }
}



