import { Injectable }     from '@angular/core';
import { HTTP_PROVIDERS, Http, Response, Request, RequestMethod, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServerPingService {
    private interval;
    private urls: string[];
    private last_connected: boolean = true;
    constructor(private http: Http) {
        this.interval = setInterval(() => this.check(), 1000);
    }

    add_url(url: string) {
        this.urls.push(url);
    }

    check() {
        for (let i in this.urls) {
            let url = this.urls[i];
            this.http
                .get(url)
                .toPromise()
                .then(res => {
                    this.last_connected = res.status == 200;
                });
        }
    }

    public get is_connected() : boolean {
        return this.last_connected;
    }
}


