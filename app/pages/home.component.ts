import { Component, Input }    from '@angular/core';
import { ActivatedRoute }              from '@angular/router';

import {CalendarComponent} from '../components/calendar.component';

import {Panel} from 'primeng/primeng';

@Component({
  template: '<div class="ui-g"> <div class="ui-g-12 ui-md-6"><a class="btn btn-large btn-default" href="#/apply">Candida la tua scuola!</a></div><div class="ui-g-12 ui-md-6"><p-panel header="I prossimi appuntamenti"><calendar ></calendar></p-panel></div></div>',
  directives: [CalendarComponent] 
})

export class HomeComponent {
}
