import { Injectable }     from '@angular/core';
import { HTTP_PROVIDERS, Http, Response, Request, RequestMethod, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import {TeacherProfile} from "../objectmodel/teacherprofile";
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';


import {ASOCService} from "./asoc.service";


@Injectable()
export class TeacherProfileService extends ASOCService<TeacherProfile>{
    constructor (http: AuthHttp){
        super(http);
        this.setSpecUrl("/profile/teacher/");
    }
}


