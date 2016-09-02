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
var navitem_component_1 = require('./navitem.component');
var asoc_service_1 = require("../services/asoc.service");
var SidebarComponent = (function () {
    function SidebarComponent(asocservice) {
        var _this = this;
        this.asocservice = asocservice;
        this.user_type = "user_type";
        this.filteredItems = [];
        this.asocservice.loggedIn.subscribe(function (ut) {
            console.log(_this.asocservice.user_type);
            console.log(_this.asocservice.is_loggedin);
            if (ut) {
                _this.resetFilteredItems(_this.asocservice.user_type);
            }
            else
                _this.empty(_this.filteredItems);
        });
        if (this.asocservice.is_loggedin)
            this.user_type = this.asocservice.user_type;
        if (this.asocservice.user_type === undefined)
            this.user_type = "admin";
        this.resetFilteredItems(this.asocservice.user_type);
    }
    SidebarComponent.prototype.ngOnInit = function () {
        if (this.asocservice.is_loggedin)
            if (this.asocservice.user_type === undefined)
                this.resetFilteredItems("admin");
            else
                this.resetFilteredItems(this.asocservice.user_type);
    };
    SidebarComponent.prototype.resetFilteredItems = function (ut) {
        this.empty(this.filteredItems);
        console.log(ut);
        var is_admin = this.asocservice.is_admin;
        console.log("IS ADMIN?", is_admin);
        console.log("UT:", ut);
        if (is_admin) {
            console.log("hey admin");
            for (var i in this.items) {
                this.filteredItems.push(this.items[i]);
            }
        }
        else {
            console.log("nope no admin");
            console.log(this.items);
            for (var i in this.items) {
                var ti = this.items[i];
                console.log(ti.type);
                console.log(ut);
                var idx = ti.type.indexOf(ut);
                console.log("found?", idx);
                if (idx >= 0)
                    this.filteredItems.push(ti);
            }
        }
    };
    SidebarComponent.prototype.empty = function (list) {
        while (list.length)
            list.pop();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SidebarComponent.prototype, "user_type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SidebarComponent.prototype, "brand", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SidebarComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SidebarComponent.prototype, "itemsBottom", void 0);
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar',
            template: "\n  <div id=\"sidebar-wrapper\">\n    <ul class=\"nav navbar-default nav-stacked\">\n      <li navitem *ngFor=\"let item of filteredItems \" [item]=\"item\" class=\"nav-item\"></li>\n    </ul>\n  </div>\n  ",
            directives: [navitem_component_1.NavItemComponent],
        }), 
        __metadata('design:paramtypes', [asoc_service_1.ASOCAuthService])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map