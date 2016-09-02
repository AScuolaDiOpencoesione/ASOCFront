import { Component, Input }    from '@angular/core';
import { ActivatedRoute }              from '@angular/router';

import {DRFListComponent, DRFListItemComponent } from "./list.component"
import {DRFDetailComponent } from "./detail.component"
import {DRFEditComponent } from "./edit.component"
import {DRFNewComponent } from "./new.component"

import {Edic} from '../objectmodel/edic';

import {EdicService} from "../services/edic.service";

@Component({
  selector:    '[list-item]',
  templateUrl: 'edic-list-item.component.html',
  moduleId: module.id,
  providers:  [EdicService]
})

export class EdicListItemComponent extends DRFListItemComponent<Edic,EdicService> {
  constructor(service:EdicService){
    super();
    this.setService(service);
    this.prepare();    
  }
}

@Component({
  selector:    'edic-list',
  templateUrl: 'list.component.html',
  moduleId: module.id,
  providers:  [EdicService],
  directives: [EdicListItemComponent] 
})

export class EdicListComponent extends DRFListComponent<Edic,EdicService> { 
  
   constructor( service:EdicService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'edic',
  templateUrl: 'detail.component.html',
  moduleId: module.id,
  providers:  [EdicService]
})

export class EdicDetailComponent extends DRFDetailComponent<Edic,EdicService>  {
  constructor(private route: ActivatedRoute, service:EdicService){
    super();
    this.setService(service);
    this.setRoute(route);
    this.prepare();
  }
}

@Component({
  selector:    'edic-edit',
  templateUrl: 'form.component.html',
  moduleId: module.id,

  providers:  [EdicService]
})

export class EdicEditComponent extends DRFEditComponent<Edic,EdicService> {
  name="Modifica EDIC";
  constructor(private route: ActivatedRoute, service:EdicService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'edic-new',
  templateUrl: 'form.component.html',
  moduleId: module.id,
  providers:  [EdicService]
})

export class EdicNewComponent extends DRFNewComponent<Edic,EdicService> {
  name="Crea EDIC";
  constructor(private route: ActivatedRoute, service:EdicService){
    super();
    this.setService(service);
    this.prepare();
  }

 
}