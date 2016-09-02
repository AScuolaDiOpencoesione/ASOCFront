import { ActivatedRoute  }       from '@angular/router';


export interface DRFServiceSetter<T>{
  setService<T>(service:T);
}

export abstract class DRFServiceComponent<T> implements DRFServiceSetter<T>{
  protected _service:T;
  protected _route:ActivatedRoute ;

  setService(service:T){
    this._service = service;
  }

  setRoute(route:ActivatedRoute ){
    this._route = route;
  }

  abstract prepare();

}