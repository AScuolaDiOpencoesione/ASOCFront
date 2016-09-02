import { Component, Input } from '@angular/core';
import { IDRFService } from '../services/drf.service';
import {DRFServiceSetter, DRFServiceComponent} from './drf.component';
import {DRFNewComponent} from './new.component';

export class DRFEditComponent<A,T extends IDRFService<A>> extends DRFNewComponent<A,T>{
  @Input() id;

  public item:A;

  get(id:number){
    this._service.getOne(id).then(
        item => this.item = item
    );
  }

  prepare(){
    this.getFields();
    this.get(this.id);
  }

}