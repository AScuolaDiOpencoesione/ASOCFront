import { Component, Input }    from '@angular/core';
import { ActivatedRoute }              from '@angular/router';

import {DRFListComponent, DRFListItemComponent } from "./list.component"
import {DRFDetailComponent } from "./detail.component"
import {DRFEditComponent } from "./edit.component"
import {DRFNewComponent } from "./new.component"

import {Association} from '../objectmodel/association';

import {AssociationService} from "../services/association.service";

@Component({
  selector:    '[list-item]',
  templateUrl: 'association-list-item.component.html',
  moduleId: module.id,
  providers:  [AssociationService]
})

export class AssociationListItemComponent extends DRFListItemComponent<Association,AssociationService> {
  constructor(service:AssociationService){
    super();
    this.setService(service);
    this.prepare();    
  }
}

@Component({
  selector:    'association-list',
  templateUrl: 'list.component.html',
  moduleId: module.id,
  providers:  [AssociationService],
  directives: [AssociationListItemComponent] 
})

export class AssociationListComponent extends DRFListComponent<Association,AssociationService> { 
   constructor( service:AssociationService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'Association',
  templateUrl: 'detail.component.html',
  moduleId: module.id,
  providers:  [AssociationService]
})

export class AssociationDetailComponent extends DRFDetailComponent<Association,AssociationService>  {
  constructor(private route: ActivatedRoute, service:AssociationService){
    super();
    this.setService(service);
    this.setRoute(route);
    this.prepare();
  }
}

@Component({
  selector:    'association-edit',
  templateUrl: 'form.component.html',
  moduleId: module.id,

  providers:  [AssociationService]
})

export class AssociationEditComponent extends DRFEditComponent<Association,AssociationService> {
  constructor(private route: ActivatedRoute, service:AssociationService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'association-new',
  templateUrl: 'form.component.html',
  moduleId: module.id,
  providers:  [AssociationService]
})

export class AssociationNewComponent extends DRFNewComponent<Association,AssociationService> {
  constructor(private route: ActivatedRoute, service:AssociationService){
    super();
    this.setService(service);
    this.prepare();
  }

 
}