import { Injectable }     from '@angular/core';
import { HTTP_PROVIDERS, Http, Response, Request, RequestMethod, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import {School} from "../objectmodel/school";
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';


import {ASOCService} from "./asoc.service";


@Injectable()
export class SchoolService extends ASOCService<School>{
    constructor (http: AuthHttp){
        super(http);
        this.setSpecUrl("/partner/school/");
    }
}


