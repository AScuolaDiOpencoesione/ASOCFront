"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var sidebar_component_1 = require("./components/sidebar.component");
var navbar_component_1 = require("./components/navbar.component");
var schools_component_1 = require('./objectcomponents/schools.component');
var asoc_service_1 = require("./services/asoc.service");
var AppComponent = (function () {
    function AppComponent(asoc) {
        this.asoc = asoc;
        this.sidebar = true;
        this.header = true;
        this.navright = new Array();
        this.sidebarMenu = new Array();
        this.brand = "ASOC Platform";
        this.sidebarMenu = [
            {
                text: "Candidatura",
                icon: "file-o",
                children: [],
                path: "apply",
                type: ["admin", "teacher"],
            } /*,{
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
            }*/
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.asoc.loggedIn.subscribe(function (status) {
            if (status) {
                var nuser = _this.asoc.user_name;
                _this.clean_navright(nuser);
            }
            else
                _this.clean_navright();
        });
    };
    AppComponent.prototype.clean_navright = function (nuser) {
        if (nuser === void 0) { nuser = ""; }
        while (this.navright.length > 0) {
            this.navright.pop();
        }
        if (nuser != "") {
            this.navright.push({
                text: "Forum",
                icon: "archive",
                children: new Array(),
                path: "forum"
            });
            this.navright.push({
                text: nuser,
                icon: "user",
                children: new Array(),
                path: "profile"
            });
            this.navright.push({
                text: "Logout",
                icon: "sign-out",
                children: new Array(),
                path: "logout"
            });
        }
        else
            this.navright.push({
                text: "Login",
                icon: "sign-in",
                children: new Array(),
                path: "login",
                loggedin: false,
            });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: "app/app.component.html",
            directives: [sidebar_component_1.SidebarComponent, navbar_component_1.NavBarComponent, router_1.ROUTER_DIRECTIVES],
            precompile: [schools_component_1.SchoolListComponent, schools_component_1.SchoolDetailComponent, schools_component_1.SchoolEditComponent]
        }), 
        __metadata('design:paramtypes', [asoc_service_1.ASOCAuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map