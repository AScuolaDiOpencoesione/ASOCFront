import { Component, Input, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Observable }     from 'rxjs/Observable';

import {SidebarComponent} from "./components/sidebar.component";
import {NavBarComponent} from "./components/navbar.component";
import {NavItemComponent, NavItem} from "./components/navitem.component";
import { SchoolListComponent, SchoolDetailComponent, SchoolEditComponent } from './objectcomponents/schools.component';
import { ASOCAuthService } from "./services/asoc.service";

//import {AuthHttp} from 'angular2-jwt/angular2-jwt';

import { BehaviorSubject  }    from 'rxjs/BehaviorSubject';

@Component({
  selector: 'dashboard',
  templateUrl: "app/app.component.html",
  directives: [SidebarComponent, NavBarComponent, ROUTER_DIRECTIVES] ,
  precompile: [SchoolListComponent, SchoolDetailComponent, SchoolEditComponent]
})

export class AppComponent implements OnInit{
	brand: string;

	api_base: string;
	backend:string;

	sidebar:boolean = true;
	header:boolean = true;
	
	navright:Array<any> = new Array<NavBarComponent>();
	sidebarMenu:Array<any> = new Array<NavBarComponent>();


	ngOnInit(){
		this.asoc.loggedIn.subscribe(status => {
			if (status){
				let nuser = this.asoc.user_name;
				this.clean_navright(nuser);	
			}else 
				this.clean_navright();
		})
	}

	clean_navright(nuser:string=""){
		while(this.navright.length > 0) {
			this.navright.pop();
		}

		if (nuser != ""){
			this.navright.push({
				text:"Forum",
				icon:"archive",
				children:new Array<NavItem>(),
				path:"forum"
			});
			this.navright.push({
				text:nuser,
				icon:"user",
				children:new Array<NavItem>(),
				path:"profile"
			});
			this.navright.push({
				text:"Logout",
				icon:"sign-out",
				children:new Array<NavItem>(),
				path:"logout"
			});
		}
		else 
			this.navright.push({
				text:"Login/Registrati",
				icon:"sign-in",
				children:new Array<NavItem>(),
				path:"login",
				loggedin:false,
			});
		
	}

	constructor(private asoc:ASOCAuthService){
		this.brand = "ASOC Platform";
		
		this.sidebarMenu = [/*{
			text:"Report Lezione",
			icon:"file-o",
			children:[],
			path:"report",
			type:["admin", "student"],
		},{
			text:"Crea Report Lezione",
			icon:"plus",
			children:[],
			path:"report/create",
			type:["admin", ""],
		},{
			text:"Compila Report Lezione",
			icon:"plus",
			children:[],
			path:"report/new",
			type:["admin", "student"],
		},*/{
			text:"Candidatura",
			icon:"check-square-o",
			children:[],
			path:"apply",
			type:["admin", "teacher"],
		}/*,{
			text:"Scuole",
			icon:"book",
			children:[],
			path:"partners/school",
			type:["admin", ""],
		},{
			text:"Aggiungi Scuola",
			icon:"plus",
			children:[],
			path:"partners/school/new",
			type:["admin", ""],
		},{
			text:"Associazioni",
			icon:"book",
			children:[],
			path:"partners/association",
			type:["admin", "association"],
		},{
			text:"Aggiungi Associazione",
			icon:"plus",
			children:[],
			path:"partners/association/new",
			type:["admin", "association"],
		},{
			text:"Edic",
			icon:"book",
			children:[],
			path:"partners/edic",
			type:["admin", "edic"],
		},{
			text:"Aggiungi Edic",
			icon:"plus",
			children:[],
			path:"partners/edic/new",
			type:["admin", "edic"],
		}*/];
	}
}


