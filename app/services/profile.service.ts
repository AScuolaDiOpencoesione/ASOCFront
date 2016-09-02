import { Injectable }     from '@angular/core';
import { HTTP_PROVIDERS, Http, Response, Request, RequestMethod, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import {ASOCService} from "./asoc.service";

import {TeacherProfile} from "../objectmodel/teacherprofile";
import {EdicProfile} from "../objectmodel/edicprofile";
import {AssociationProfile} from "../objectmodel/associationprofile";

import { AuthHttp, tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class ProfileService{

}

@Injectable()
export class TeacherProfileService extends ASOCService<TeacherProfile>{
    constructor (http: AuthHttp){
        super(http);
        this.setSpecUrl("/profile/teacher/");
    }
}



@Injectable()
export class EdicProfileService extends ASOCService<EdicProfile>{
    constructor (http: AuthHttp){
        super(http);
        this.setSpecUrl("/profile/edic/");
    }
}

@Injectable()
export class AssociationProfileService extends ASOCService<AssociationProfile>{
    constructor (http: AuthHttp){
        super(http);
        this.setSpecUrl("/profile/association/");
    }
}


