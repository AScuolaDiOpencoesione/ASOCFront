import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: '[navitem]',
  template: `
  <a routerLink='{{item.path}}' >
    <i class='fa fa-fw fa-{{item.icon}}'></i>
    {{item.text}} 
    <span *ngIf="item.children.length > 0" class="caret"></span>
  </a>
  <ul *ngIf="item.children.length > 0"  class="dropdown-menu">
    <li navitem *ngFor="let titem of item.children | async" [item]="titem" class="nav-item"></li>
  </ul>
  `,
  directives: [ROUTER_DIRECTIVES, NavItemComponent]  
})

export class NavItemComponent {
  @Input() item:NavItem;
}

export class NavItem{
    public text:string;
    public icon:string;
    public children:NavItemComponent[];
    public path:string = "#";
    public type:string[];
    public admin:boolean;
  
}


