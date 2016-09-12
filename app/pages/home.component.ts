import { Component, Input }    from '@angular/core';
import { ActivatedRoute }              from '@angular/router';

import {CalendarComponent} from '../components/calendar.component';

import {Panel} from 'primeng/primeng';

@Component({
  moduleId:module.id,
  templateUrl: 'home.component.html',
  directives: [CalendarComponent] 
})

export class HomeComponent {
}
