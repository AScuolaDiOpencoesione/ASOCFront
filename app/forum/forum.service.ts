import { Injectable }     from '@angular/core';
import { HTTP_PROVIDERS, Http, Response, Request, RequestMethod, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { AuthHttp, tokenNotExpired } from 'angular2-jwt';

import {Forum, ForumChannel, ForumThread, ForumPost} from './forum.objectmodel';

import {ASOCService} from "../services/asoc.service";

@Injectable()
export class ForumService extends ASOCService<Forum>{
    constructor (http: AuthHttp){
        super(http);
        this.setSpecUrl("/forum/forum/");
    }
}

@Injectable()
export class ForumChannelService extends ASOCService<ForumChannel>{
    constructor (http: AuthHttp){
        super(http);
        this.setSpecUrl("/forum/channel/");
    }
}

@Injectable()
export class ForumThreadService extends ASOCService<ForumThread>{
    constructor (http: AuthHttp){
        super(http);
        this.setSpecUrl("/forum/thread/");
    }
}

@Injectable()
export class ForumPostService extends ASOCService<ForumPost>{
    constructor (http: AuthHttp){
        super(http);
        this.setSpecUrl("/forum/post/");
    }

    getPostsForThread(thread:number){
        return this.getAll({thread:thread});
    }
}


