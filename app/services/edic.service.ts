import { Injectable }     from '@angular/core';
import { HTTP_PROVIDERS, Http, Response, Request, RequestMethod, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import {ASOCService} from "./asoc.service";

import {Edic} from "../objectmodel/edic";

import { AuthHttp, tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class EdicService extends ASOCService<Edic>{
    constructor (http: AuthHttp){
        super(http);
        this.setSpecUrl("/partner/edic/");
    }
}


