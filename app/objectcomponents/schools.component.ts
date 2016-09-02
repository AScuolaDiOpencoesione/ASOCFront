import { Component, Input }    from '@angular/core';
import { ActivatedRoute }              from '@angular/router';

import {DRFListComponent, DRFListItemComponent } from "./list.component"
import {DRFDetailComponent } from "./detail.component"
import {DRFEditComponent } from "./edit.component"
import {DRFNewComponent } from "./new.component"

import {School} from '../objectmodel/school';

import {SchoolService} from "../services/school.service";

@Component({
  selector:    '[list-item]',
  templateUrl: 'school-list-item.component.html',
  moduleId: module.id,
  providers:  [SchoolService]
})

export class SchoolListItemComponent extends DRFListItemComponent<School,SchoolService> {
  constructor(service:SchoolService){
    super();
    this.setService(service);
    this.prepare();    
  }
}

@Component({
  selector:    'school-list',
  templateUrl: 'list.component.html',
  moduleId: module.id,
  providers:  [SchoolService],
  directives: [SchoolListItemComponent] 
})

export class SchoolListComponent extends DRFListComponent<School,SchoolService> { 
   constructor( service:SchoolService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'school',
  templateUrl: 'detail.component.html',
  moduleId: module.id,
  providers:  [SchoolService]
})

export class SchoolDetailComponent extends DRFDetailComponent<School,SchoolService>  {
  constructor(private route: ActivatedRoute, service:SchoolService){
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

  providers:  [SchoolService]
})

export class SchoolEditComponent extends DRFEditComponent<School,SchoolService> {
  constructor(private route: ActivatedRoute, service:SchoolService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'school-new',
  templateUrl: 'form.component.html',
  moduleId: module.id,
  providers:  [SchoolService]
})

export class SchoolNewComponent extends DRFNewComponent<School,SchoolService> {
  constructor(private route: ActivatedRoute, service:SchoolService){
    super();
    this.setService(service);
    this.prepare();
  }

 
}