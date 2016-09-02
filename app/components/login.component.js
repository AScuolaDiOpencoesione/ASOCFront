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
var primeng_1 = require('primeng/primeng');
var asoc_service_1 = require('../services/asoc.service');
var LoginComponent = (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.login = function () {
        this.auth.login(this.username, this.pass);
        this.router.navigateByUrl('/');
    };
    LoginComponent = __decorate([
        core_1.Component({
            directives: [primeng_1.Password],
            templateUrl: 'login.component.html',
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [asoc_service_1.ASOCAuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
var LogoutComponent = (function () {
    function LogoutComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.auth.logout();
        this.router.navigateByUrl('/');
    };
    LogoutComponent = __decorate([
        core_1.Component({
            template: "",
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [asoc_service_1.ASOCAuthService, router_1.Router])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;
var RegisterComponent = (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RegisterComponent.prototype.register = function () {
        this.auth.register(this.username, this.pass, this.email);
        this.router.navigateByUrl("/profile/create");
    };
    RegisterComponent = __decorate([
        core_1.Component({
            directives: [primeng_1.Password],
            templateUrl: "register.component.html",
            moduleId: module.id,
            providers: [asoc_service_1.ASOCUserService]
        }), 
        __metadata('design:paramtypes', [asoc_service_1.ASOCUserService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=login.component.js.map