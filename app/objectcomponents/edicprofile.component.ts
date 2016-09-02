import { Component, Input }    from '@angular/core';
import { ActivatedRoute }              from '@angular/router';

import {DRFListComponent, DRFListItemComponent } from "./list.component"
import {DRFDetailComponent } from "./detail.component"
import {DRFEditComponent } from "./edit.component"
import {DRFNewComponent } from "./new.component"

import {EdicProfile} from '../objectmodel/edicprofile';

import {EdicProfileService} from "../services/edicprofile.service";

@Component({
  selector:    '[list-item]',
  templateUrl: 'school-list-item.component.html',
  moduleId: module.id,
  providers:  [EdicProfileService]
})

export class EdicProfileListItemComponent extends DRFListItemComponent<EdicProfile,EdicProfileService> {
  constructor(service:EdicProfileService){
    super();
    this.setService(service);
    this.prepare();    
  }
}

@Component({
  selector:    'school-list',
  templateUrl: 'list.component.html',
  moduleId: module.id,
  providers:  [EdicProfileService],
  directives: [EdicProfileListItemComponent] 
})

export class EdicProfileListComponent extends DRFListComponent<EdicProfile,EdicProfileService> { 
   constructor( service:EdicProfileService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'school',
  templateUrl: 'detail.component.html',
  moduleId: module.id,
  providers:  [EdicProfileService]
})

export class EdicProfileDetailComponent extends DRFDetailComponent<EdicProfile,EdicProfileService>  {
  constructor(private route: ActivatedRoute, service:EdicProfileService){
    super();
    this.setService(service);
    this.setRoute(route);
    this.prepare();
  }
}

@Component({
  selector:    'school-edit',
  templateUrl: 'form.component.html',
  moduleId: module.id,

  providers:  [EdicProfileService]
})

export class EdicProfileEditComponent extends DRFEditComponent<EdicProfile,EdicProfileService> {
  constructor(private route: ActivatedRoute, service:EdicProfileService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'school-new',
  templateUrl: 'form.component.html',
  moduleId: module.id,
  providers:  [EdicProfileService]
})

export class EdicProfileNewComponent extends DRFNewComponent<EdicProfile,EdicProfileService> {
  constructor(private route: ActivatedRoute, service:EdicProfileService){
    super();
    this.setService(service);
    this.prepare();
  }

 
}