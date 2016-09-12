import { Component, Input }    from '@angular/core';
import { ActivatedRoute }              from '@angular/router';

import {CalendarComponent} from '../components/calendar.component';

@Component({
    moduleId:module.id,
    selector:'profile-creation-selector',
    template: `
        <h1>Completa il profilo come...</h1>
        <div class="container"> 
            <div class="col-md-4">
                <a class="btn btn-large btn-default" href="#/profile/create/teacher">Docente</a>
            </div> 
            <div class="col-md-4">
                <a class="btn btn-large btn-default" href="#/profile/create/edic">EDIC</a>
            </div> 
            <div class="col-md-4">
                <a class="btn btn-large btn-default" href="#/profile/create/association">Associazione</a>
            </div>
        </div>
        `
})

export class ProfileCreationSelection {
    constructor(){}
}
