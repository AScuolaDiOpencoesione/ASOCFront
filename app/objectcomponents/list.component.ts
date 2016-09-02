import { Component, Input, Inject } from '@angular/core';
import { IDRFService } from '../services/drf.service';
import { Http, Response } from '@angular/http';

import {DRFServiceSetter, DRFServiceComponent} from './drf.component';

export class DRFListComponent<A,T extends IDRFService<A>> extends DRFServiceComponent<T>{
  public items:A[]|Promise<A[]>;

  prepare(){
    this.items = this._service.getAll({});
  }
}

export class DRFListItemComponent<A,T extends IDRFService<A>> extends DRFServiceComponent<T>{
  @Input() public item:A;
  
  prepare(){}
}