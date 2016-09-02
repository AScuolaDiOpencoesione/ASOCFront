import { Component, Input }    from '@angular/core';
import { ActivatedRoute }              from '@angular/router';

import {DRFListComponent, DRFListItemComponent } from "./list.component"
import {DRFDetailComponent } from "./detail.component"
import {DRFEditComponent } from "./edit.component"
import {DRFNewComponent } from "./new.component"

import {AssociationProfile} from '../objectmodel/associationprofile';

import {AssociationProfileService} from "../services/associationprofile.service";

@Component({
  selector:    '[list-item]',
  templateUrl: 'school-list-item.component.html',
  moduleId: module.id,
  providers:  [AssociationProfileService]
})

export class AssociationProfileListItemComponent extends DRFListItemComponent<AssociationProfile,AssociationProfileService> {
  constructor(service:AssociationProfileService){
    super();
    this.setService(service);
    this.prepare();    
  }
}

@Component({
  selector:    'school-list',
  templateUrl: 'list.component.html',
  moduleId: module.id,
  providers:  [AssociationProfileService],
  directives: [AssociationProfileListItemComponent] 
})

export class AssociationProfileListComponent extends DRFListComponent<AssociationProfile,AssociationProfileService> { 
   constructor( service:AssociationProfileService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'school',
  templateUrl: 'detail.component.html',
  moduleId: module.id,
  providers:  [AssociationProfileService]
})

export class AssociationProfileDetailComponent extends DRFDetailComponent<AssociationProfile,AssociationProfileService>  {
  constructor(private route: ActivatedRoute, service:AssociationProfileService){
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

  providers:  [AssociationProfileService]
})

export class AssociationProfileEditComponent extends DRFEditComponent<AssociationProfile,AssociationProfileService> {
  constructor(private route: ActivatedRoute, service:AssociationProfileService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'school-new',
  templateUrl: 'form.component.html',
  moduleId: module.id,
  providers:  [AssociationProfileService]
})

export class AssociationProfileNewComponent extends DRFNewComponent<AssociationProfile,AssociationProfileService> {
  constructor(private route: ActivatedRoute, service:AssociationProfileService){
    super();
    this.setService(service);
    this.prepare();
  }

 
}