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
var Observable_1 = require('rxjs/Observable');
var NavBarComponent = (function () {
    function NavBarComponent() {
        this.brand = "";
        this.fixed = false;
        this.navbarLeft = new Observable_1.Observable();
        this.navbarRight = new Observable_1.Observable();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NavBarComponent.prototype, "brand", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NavBarComponent.prototype, "fixed", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Observable_1.Observable)
    ], NavBarComponent.prototype, "navbarLeft", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Observable_1.Observable)
    ], NavBarComponent.prototype, "navbarRight", void 0);
    NavBarComponent = __decorate([
        core_1.Component({
            selector: '[navbar]',
            template: "\n   <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#/\" *ngIf=\"brand\">{{ brand }}</a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-left\" *ngIf=\"navbarLeft.length > 0\">\n        <li navitem *ngFor=\"let item of navbarLeft\" [item]=\"item\" class=\"nav-item\"></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"navbarRight.length > 0\">\n        <li navitem *ngFor=\"let item of navbarRight \" [item]=\"item\" class=\"nav-item\"></li>\n    </ul>\n  </div>\n",
            directives: [navitem_component_1.NavItemComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map