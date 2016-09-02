import { Injectable }     from '@angular/core';
import { HTTP_PROVIDERS, Http, Response, Request, RequestMethod, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import {ASOCService} from "./asoc.service";
import {Association} from "../objectmodel/association";
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AssociationService extends ASOCService<Association>{
    constructor (http: AuthHttp){
        super(http);
        this.setSpecUrl("/partner/association/");
    }
}


