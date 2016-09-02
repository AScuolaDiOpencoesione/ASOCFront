import { Component, Input }    from '@angular/core';
import { ActivatedRoute,Router }              from '@angular/router';

import {DRFListComponent, DRFListItemComponent } from "./list.component"
import {DRFDetailComponent } from "./detail.component"
import {DRFEditComponent } from "./edit.component"
import {DRFNewComponent } from "./new.component"

import {ApplyingTeam} from '../objectmodel/applyingteam';

import {ApplyingTeamService} from "../services/applyingteam.service";

@Component({
  selector:    '[list-item]',
  templateUrl: 'school-list-item.component.html',
  moduleId: module.id,
  providers:  [ApplyingTeamService]
})

export class ApplyingTeamListItemComponent extends DRFListItemComponent<ApplyingTeam,ApplyingTeamService> {
  constructor(service:ApplyingTeamService){
    super();
    this.setService(service);
    this.prepare();    
  }
}

@Component({
  selector:    'school-list',
  templateUrl: 'list.component.html',
  moduleId: module.id,
  providers:  [ApplyingTeamService],
  directives: [ApplyingTeamListItemComponent] 
})

export class ApplyingTeamListComponent extends DRFListComponent<ApplyingTeam,ApplyingTeamService> { 
   constructor( service:ApplyingTeamService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'school',
  templateUrl: 'at-detail.component.html',
  moduleId: module.id,
  providers:  [ApplyingTeamService]
})

export class ApplyingTeamDetailComponent extends DRFDetailComponent<ApplyingTeam,ApplyingTeamService>  {
  constructor(private route: ActivatedRoute, service:ApplyingTeamService){
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

  providers:  [ApplyingTeamService]
})

export class ApplyingTeamEditComponent extends DRFEditComponent<ApplyingTeam,ApplyingTeamService> {
  constructor(private route: ActivatedRoute, service:ApplyingTeamService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'school-new',
  templateUrl: 'form.component.html',
  moduleId: module.id,
  providers:  [ApplyingTeamService]
})

export class ApplyingTeamNewComponent extends DRFNewComponent<ApplyingTeam,ApplyingTeamService> {
  constructor(private route: ActivatedRoute, private router: Router, service:ApplyingTeamService){
    super();
    this.setService(service);
    this.prepare();
  }

  postSave(item:ApplyingTeam){ 
    this.router.navigate(['application',item.id, "review"]);
  }
}