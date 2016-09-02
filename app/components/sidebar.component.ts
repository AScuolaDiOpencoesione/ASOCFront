import { Component, Input, OnInit} from '@angular/core';

import {NavItemComponent, NavItem} from './navitem.component';

import { ASOCAuthService } from "../services/asoc.service";

@Component({
  selector: 'sidebar',
  template: `
  <div id="sidebar-wrapper">
    <ul class="nav navbar-default nav-stacked">
      <li navitem *ngFor="let item of filteredItems " [item]="item" class="nav-item"></li>
    </ul>
  </div>
  `,
  directives: [NavItemComponent],
})
export class SidebarComponent implements OnInit{
  @Input() user_type: string = "user_type";
  @Input() brand: string;
  @Input() items: NavItem[];
  @Input() itemsBottom: NavItem[];

  constructor(private asocservice: ASOCAuthService) {
    this.asocservice.loggedIn.subscribe(ut => {
      console.log(this.asocservice.user_type);
      console.log(this.asocservice.is_loggedin);
      
      if (ut) {
        this.resetFilteredItems(this.asocservice.user_type);
      } else
        this.empty(this.filteredItems);
    });
    
    if(this.asocservice.is_loggedin)
      this.user_type = this.asocservice.user_type;
      if(this.asocservice.user_type === undefined)
        this.user_type = "admin";
      this.resetFilteredItems(this.asocservice.user_type);
  }

  ngOnInit(){
    if(this.asocservice.is_loggedin)
      if(this.asocservice.user_type === undefined)
        this.resetFilteredItems("admin");
      else
        this.resetFilteredItems(this.asocservice.user_type);
  }

  filteredItems: NavItem[] = [];

  resetFilteredItems(ut: string) {
    this.empty(this.filteredItems);
    console.log(ut);
    let is_admin = this.asocservice.is_admin
    console.log("IS ADMIN?", is_admin);
    console.log("UT:", ut);
    if (is_admin) {
      console.log("hey admin");
      for (let i in this.items){
        this.filteredItems.push(this.items[i]);
      }
    } else {
      console.log("nope no admin");
      console.log(this.items);
      for (let i in this.items) {
        let ti = this.items[i];
        console.log(ti.type);
        console.log(ut);
        let idx = ti.type.indexOf(ut);
        console.log("found?", idx);
        
        if (idx >= 0)
          this.filteredItems.push(ti);
      }
    }
  }

  empty(list: any[]) {
    while (list.length)
      list.pop();
  }
}