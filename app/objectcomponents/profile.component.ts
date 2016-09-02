import { Component, Input }    from '@angular/core';
import { ActivatedRoute }              from '@angular/router';

import {DRFListComponent, DRFListItemComponent } from "./list.component"
import {DRFDetailComponent } from "./detail.component"
import {DRFEditComponent } from "./edit.component"

import {School} from '../objectmodel/school';

import {SchoolService} from "../services/school.service";

@Component({
  selector:    'school',
  templateUrl: '/app/objectcomponents/detail.component.html',
  providers:  [SchoolService]
})

export class ProfileDetailComponent extends DRFDetailComponent<School,SchoolService>  {
  constructor(private route: ActivatedRoute, service:SchoolService){
    super();
    this.setService(service);
    this.setRoute(route);
    this.prepare();
  }
}

@Component({
  selector:    'school-edit',
  templateUrl: '/app/objectcomponents/form.component.html',
  providers:  [SchoolService]
})

export class ProfileEditComponent extends DRFEditComponent<School,SchoolService> {
  constructor(private route: ActivatedRoute, service:SchoolService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'school-new',
  templateUrl: '/app/objectcomponents/form.component.html',
  providers:  [SchoolService]
})

export class ProfileNewComponent extends DRFEditComponent<School,SchoolService> {
  constructor(private route: ActivatedRoute, service:SchoolService){
    super();
    this.setService(service);
    this.prepare();
  }
}