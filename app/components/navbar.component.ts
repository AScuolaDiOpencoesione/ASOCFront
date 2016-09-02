import { Component, Input } from '@angular/core';
import { NavItemComponent } from './navitem.component';
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: '[navbar]',
  template: `
   <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#/" *ngIf="brand">{{ brand }}</a>
    </div>
    <ul class="nav navbar-nav navbar-left" *ngIf="navbarLeft.length > 0">
        <li navitem *ngFor="let item of navbarLeft" [item]="item" class="nav-item"></li>
    </ul>
    <ul class="nav navbar-nav navbar-right" *ngIf="navbarRight.length > 0">
        <li navitem *ngFor="let item of navbarRight " [item]="item" class="nav-item"></li>
    </ul>
  </div>
`, 
  directives: [NavItemComponent] 
})

export class NavBarComponent {
  @Input() public brand:string = "";
  @Input() public fixed:boolean = false;
  @Input() public navbarLeft:Observable<NavItemComponent[]> = new Observable<NavItemComponent[]>();
  @Input() public navbarRight:Observable<NavItemComponent[]> = new Observable<NavItemComponent[]>();
}


