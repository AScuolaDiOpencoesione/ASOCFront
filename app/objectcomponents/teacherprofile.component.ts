import { Component, Input }    from '@angular/core';
import { ActivatedRoute }              from '@angular/router';

import {DRFListComponent, DRFListItemComponent } from "./list.component"
import {DRFDetailComponent } from "./detail.component"
import {DRFEditComponent } from "./edit.component"
import {DRFNewComponent } from "./new.component"

import {TeacherProfile} from '../objectmodel/teacherprofile';

import {TeacherProfileService} from "../services/teacherprofile.service";

@Component({
  selector:    '[list-item]',
  templateUrl: 'school-list-item.component.html',
  moduleId: module.id,
  providers:  [TeacherProfileService]
})

export class TeacherProfileListItemComponent extends DRFListItemComponent<TeacherProfile,TeacherProfileService> {
  constructor(service:TeacherProfileService){
    super();
    this.setService(service);
    this.prepare();    
  }
}

@Component({
  selector:    'school-list',
  templateUrl: 'list.component.html',
  moduleId: module.id,
  providers:  [TeacherProfileService],
  directives: [TeacherProfileListItemComponent] 
})

export class TeacherProfileListComponent extends DRFListComponent<TeacherProfile,TeacherProfileService> { 
   constructor( service:TeacherProfileService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'school',
  templateUrl: 'detail.component.html',
  moduleId: module.id,
  providers:  [TeacherProfileService]
})

export class TeacherProfileDetailComponent extends DRFDetailComponent<TeacherProfile,TeacherProfileService>  {
  constructor(private route: ActivatedRoute, service:TeacherProfileService){
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

  providers:  [TeacherProfileService]
})

export class TeacherProfileEditComponent extends DRFEditComponent<TeacherProfile,TeacherProfileService> {
  constructor(private route: ActivatedRoute, service:TeacherProfileService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'school-new',
  templateUrl: 'form.component.html',
  moduleId: module.id,
  providers:  [TeacherProfileService]
})

export class TeacherProfileNewComponent extends DRFNewComponent<TeacherProfile,TeacherProfileService> {
  constructor(private route: ActivatedRoute, service:TeacherProfileService){
    super();
    this.setService(service);
    this.prepare();
  }

 
}