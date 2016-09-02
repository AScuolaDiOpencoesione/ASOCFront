import { Injectable }     from '@angular/core';
import { HTTP_PROVIDERS, Http, Response, Request, RequestMethod, Headers } from '@angular/http';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

export interface IDRFServiceBase{
  setBaseUrl(url:string);
  handleError(error: Response);
}

export interface IDRFResourceServiceBase extends IDRFServiceBase{
  setSpecUrl(url:string);
}

@Injectable()
export abstract class DRFServiceBase implements IDRFServiceBase{

  constructor(http:AuthHttp){}

  public setBaseUrl(base:string){
    this._base_url = base;
    this._res_url = base;
  }


  protected serializeParams(obj) {
    let str = [];
    for(let p in obj)
       str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
  }

  protected _base_url = "";


  protected _res_url:string;

  getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) {
      return parts.pop().split(";").shift();
    }
  }
  public handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json() || 'Server error');
  }

}

export abstract class DRFResourceServiceBase extends DRFServiceBase implements IDRFResourceServiceBase{
  constructor(http:AuthHttp){
    super(http);
  }

  public setSpecUrl(spec:string){
    this._spec_url = spec;
    this._res_url = this._base_url+this._spec_url;
  }

  protected _spec_url:string = "";  
  
}

export interface IDRFService<T> extends IDRFServiceBase{
   getAll(params:any):Promise<T[]>;
   getOne(id:number):Promise<T>;
   getOptions();

   removeOne(id:number);
   addOne(item:T);
}


@Injectable()
export abstract class DRFService<T> extends DRFResourceServiceBase implements IDRFService<T> {
  constructor (protected http: AuthHttp) {
    super(http);
    this.http = http;
  }

  
  protected extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  
  getAll(params=null){
    let headers = new Headers();
    headers.append('Accept','application/json');
    let furl = this._res_url;
    if (params != null)
      furl+="?"+this.serializeParams(params);
    return this.http.get(furl,
                          {headers: headers})
        .toPromise()
        .then(res=><T[]> res.json(), this.handleError)
        .then(items => {
            console.log(items);
            return items;
        })
  }

  getOne (id:number) {
    let headers = new Headers();
    headers.append('Accept','application/json');
    return this.http.get(this._res_url+id+"/",
                          {headers: headers})
      .toPromise()
      .then(res => <T> res.json(), this.handleError)
      .then(item => {
                      console.log(item);
                      return item;
                  });  
  }
  
  getOptions() {
    let headers = new Headers();
    headers.append('Accept','application/json');
    return this.http.request(new Request({
        method: RequestMethod.Options,
        url: this._res_url,
        headers: headers
      }))
      .toPromise()
      .then(res => res.json(), this.handleError)
      .then(options => {
          console.log(options);
          return options;
      }); 
    }

  removeOne(id:number){
    let headers = new Headers();
    headers.append('Accept','application/json');
    return ;
  }

  addOne(item: T) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    headers.append('X-CSRFToken', this.getCookie('csrftoken'));
    return this.http.post(this._res_url, JSON.stringify(item),
                          {headers: headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }



}

export class UserService extends DRFServiceBase{

  noauthhttp:Http;
  headers = new Headers();

  constructor (protected authhttp: AuthHttp, protected http:Http) {
    super(authhttp);
    this.authhttp = authhttp;
    this.noauthhttp = http;

    
    this.headers.append('Content-Type','application/json');
  }
  getMe(){
    let url = this._base_url+"/me/";
    this.authhttp.get(url, {headers:this.headers})
      .toPromise()
      .then(usr => {
        return usr.json();
      })
      .catch(this.handleError);
  }

  changeUsername(){}

  changePassword(){}

  register(user:string, pass:string, email:string){
    let url = this._base_url+"/register/";
    this.noauthhttp.post(url, JSON.stringify({"username":user, "password":pass, "email":email}), {headers:this.headers})
      .toPromise()
      .then(content => {
        console.log(content);
      })
      .catch(this.handleError);
  }
}


