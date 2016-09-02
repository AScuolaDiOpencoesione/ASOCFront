import { Component, Input } from '@angular/core';
import { IDRFService } from '../services/drf.service';
import {DRFServiceSetter, DRFServiceComponent} from './drf.component';
import {DRFEntity} from '../objectmodel/drf.model';
import { Router }       from '@angular/router';


export class DRFDetailComponent<A,T extends IDRFService<A>> extends DRFServiceComponent<T> {
  private sub: any|Promise<any>;
  
  @Input() id;
  public item:any | Promise<any> = {};

  prepare(){
    this.get(this.id);
  }

  get(id:number){
    this._service.getOne(id).then(itm => {this.item = itm;});
  }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
       console.log(id);
       this.get(id);
     });
  }
}