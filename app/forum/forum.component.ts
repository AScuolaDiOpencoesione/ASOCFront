import { Component, Input }    from '@angular/core';
import { ActivatedRoute, Router }              from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {DRFListComponent, DRFListItemComponent } from "../objectcomponents/list.component"
import {DRFDetailComponent } from "../objectcomponents/detail.component"
import {DRFEditComponent } from "../objectcomponents/edit.component"
import {DRFNewComponent } from "../objectcomponents/new.component"

import {Forum, ForumChannel, ForumThread, ForumPost} from './forum.objectmodel';

import { ASOCAuthService } from '../services/asoc.service';

import {ForumService, ForumChannelService, ForumThreadService, ForumPostService} from "./forum.service";


@Component({
  selector:    '[list-item]',
  templateUrl: 'list-item.component.html',
  moduleId: module.id,
  providers:  [ForumService]
})

export class ForumListItemComponent extends DRFListItemComponent<Forum,ForumService> {
  constructor(service:ForumService, private _router:Router){
    super();
    this.setService(service);
    this.prepare();    
  }
}

@Component({
  selector:    'list',
  templateUrl: 'list.component.html',
  moduleId: module.id,
  providers:  [ForumService],
  directives: [ForumListItemComponent,ROUTER_DIRECTIVES] 
})

export class ForumListComponent extends DRFListComponent<Forum,ForumService> { 
   constructor( service:ForumService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'Forum',
  templateUrl: 'detail.component.html',
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES],
  providers:  [ForumService]
})

export class ForumDetailComponent extends DRFDetailComponent<Forum,ForumService>  {
  constructor(private route: ActivatedRoute, service:ForumService){
    super();
    this.setService(service);
    this.setRoute(route);
    this.prepare();
  }
}

@Component({
  selector:    'edit',
  templateUrl: 'form.component.html',
  moduleId: module.id,

  directives: [ROUTER_DIRECTIVES],
  providers:  [ForumService]
})

export class ForumEditComponent extends DRFEditComponent<Forum,ForumService> {
  constructor(private route: ActivatedRoute, service:ForumService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'new',
  templateUrl: 'form.component.html',
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES],
  providers:  [ForumService]
})

export class ForumNewComponent extends DRFNewComponent<Forum,ForumService> {
  constructor(private route: ActivatedRoute, service:ForumService){
    super();
    this.setService(service);
    this.prepare();
  }
}




@Component({
  selector:    '[list-item]',
  templateUrl: 'channel-list-item.component.html',
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES],
  providers:  [ForumChannelService]
})

export class ForumChannelListItemComponent extends DRFListItemComponent<ForumChannel,ForumChannelService> {
  constructor(service:ForumChannelService){
    super();
    this.setService(service);
    this.prepare();    
  }
}

@Component({
  selector:    'list',
  templateUrl: 'list.component.html',
  moduleId: module.id,
  providers:  [ForumChannelService],
  directives: [ForumChannelListItemComponent,ROUTER_DIRECTIVES] 
})

export class ForumChannelListComponent extends DRFListComponent<ForumChannel,ForumChannelService> { 
   constructor( service:ForumChannelService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'ForumChannel',
  templateUrl: 'channel-detail.component.html',
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES],
  providers:  [ForumChannelService]
})

export class ForumChannelDetailComponent extends DRFDetailComponent<ForumChannel,ForumChannelService>  {
  constructor(private route: ActivatedRoute, service:ForumChannelService){
    super();
    this.setService(service);
    this.setRoute(route);
    this.prepare();
  }
}

@Component({
  selector:    'edit',
  templateUrl: 'form.component.html',
  moduleId: module.id,

  directives: [ROUTER_DIRECTIVES],
  providers:  [ForumChannelService]
})

export class ForumChannelEditComponent extends DRFEditComponent<ForumChannel,ForumChannelService> {
  constructor(private route: ActivatedRoute, service:ForumChannelService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'new',
  templateUrl: 'form.component.html',
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES],
  providers:  [ForumChannelService]
})

export class ForumChannelNewComponent extends DRFNewComponent<ForumChannel,ForumChannelService> {
  constructor(private route: ActivatedRoute, service:ForumChannelService){
    super();
    this.setService(service);
    this.prepare();
  }
}




@Component({
  selector:    '[list-item]',
  templateUrl: 'thread-list-item.component.html',
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES],
  providers:  [ForumThreadService]
})

export class ForumThreadListItemComponent extends DRFListItemComponent<ForumThread,ForumThreadService> {
  constructor(service:ForumThreadService){
    super();
    this.setService(service);
    this.prepare();    
  }
}

@Component({
  selector:    'list',
  templateUrl: 'list.component.html',
  moduleId: module.id,
  providers:  [ForumThreadService],
  directives: [ForumThreadListItemComponent,ROUTER_DIRECTIVES] 
})

export class ForumThreadListComponent extends DRFListComponent<ForumThread,ForumThreadService> { 
   constructor( service:ForumThreadService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'ForumThread',
  templateUrl: 'thread-detail.component.html',
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES],
  providers:  [ForumThreadService]
})

export class ForumThreadDetailComponent extends DRFDetailComponent<ForumThread,ForumThreadService>  {
  @Input() thread:number;
  
  constructor(private route: ActivatedRoute, service:ForumThreadService){
    super();
    this.setService(service);
    this.setRoute(route);
    this.prepare();
  }
}

@Component({
  selector:    'edit',
  templateUrl: 'form.component.html',
  moduleId: module.id,

  directives: [ROUTER_DIRECTIVES],
  providers:  [ForumThreadService]
})

export class ForumThreadEditComponent extends DRFEditComponent<ForumThread,ForumThreadService> {
  constructor(private route: ActivatedRoute, service:ForumThreadService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'new',
  templateUrl: 'form.component.html',
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES],
  providers:  [ForumThreadService]
})

export class ForumThreadNewComponent extends DRFNewComponent<ForumThread,ForumThreadService> {
  constructor(private route: ActivatedRoute, service:ForumThreadService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    '[post-list-item]',
  templateUrl: 'post-list-item.component.html',
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES],
  providers:  [ForumPostService]
})

export class ForumPostListItemComponent extends DRFListItemComponent<ForumPost,ForumPostService> {
  constructor(service:ForumPostService){
    super();
    this.setService(service);
    this.prepare();    
  }
}

@Component({
  selector:    'post-list', 
  templateUrl: 'post-list.component.html',
  moduleId: module.id,
  providers:  [ForumPostService],
  directives: [ForumPostListItemComponent, ROUTER_DIRECTIVES] 
})

export class ForumPostListComponent extends DRFListComponent<ForumPost,ForumPostService> { 
   constructor( service:ForumPostService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'ForumPost',
  templateUrl: 'detail.component.html',
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES],
  providers:  [ForumPostService]
})

export class ForumPostDetailComponent extends DRFDetailComponent<ForumPost,ForumPostService>  {
  constructor(private route: ActivatedRoute, service:ForumPostService){
    super();
    this.setService(service);
    this.setRoute(route);
    this.prepare();
  }
}

@Component({
  selector:    'edit',
  templateUrl: 'form.component.html',
  moduleId: module.id,

  directives: [ROUTER_DIRECTIVES],
  providers:  [ForumPostService]
})

export class ForumPostEditComponent extends DRFEditComponent<ForumPost,ForumPostService> {
  constructor(private route: ActivatedRoute, service:ForumPostService){
    super();
    this.setService(service);
    this.prepare();
  }
}

@Component({
  selector:    'new',
  templateUrl: 'form.component.html',
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES],
  providers:  [ForumPostService]
})

export class ForumPostNewComponent extends DRFNewComponent<ForumPost,ForumPostService> {
  thread;
  constructor(private route: ActivatedRoute, private _router: Router, private auth:ASOCAuthService, service:ForumPostService){
    super();
    this.setService(service);
    console.log(this.route.snapshot.url[0].path);
    this.thread = this.route.snapshot.url[0].path.split("/")[2];
    this.done.subscribe(x=> _router.navigateByUrl("/forum/2/1"));
    this.prepare({thread:this.thread, author:this.auth.user_id});  
  }
}

@Component({
  selector: 'product-details',
  template: `
    <h1>Forum</h1>
    <p>Qui puoi porre le domande relative alle attività delle lezioni o segnalare problemi tecnici</p>
    <hr>
    <router-outlet></router-outlet>
    <!-- Overview & Specs components get added here by the router -->
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class ForumComponent {
  private id;

  constructor(private route: ActivatedRoute) {}

  private ngOnInit() {
    
  }

  private ngOnDestroy() {
    
  }
}