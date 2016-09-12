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
    function LoginComponent(auth, router, usr) {
        this.auth = auth;
        this.router = router;
        this.usr = usr;
    }
    LoginComponent.prototype.login = function () {
        this.auth.login(this.username, this.pass, this.errormsg);
        if (!this.usr.hasProfile())
            this.router.navigateByUrl('/profile/create/teacher');
        else
            this.router.navigateByUrl('/');
    };
    LoginComponent.prototype.errormsg = function (msg) {
        alert("Nome utente e/o Password sbagliati.");
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'asoc-login',
            directives: [primeng_1.Password],
            templateUrl: 'login.component.html',
            moduleId: module.id,
            providers: [asoc_service_1.ASOCUserService]
        }), 
        __metadata('design:paramtypes', [asoc_service_1.ASOCAuthService, router_1.Router, asoc_service_1.ASOCUserService])
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
    function RegisterComponent(auth, router, auths) {
        this.auth = auth;
        this.router = router;
        this.auths = auths;
    }
    RegisterComponent.prototype.register = function () {
        this.auth.register(this.username, this.pass, this.email);
        alert("Grazie! Abbiamo inviato al tuo indirizzo e-mail il link per completare la registrazione alla piattaforma ASOC.\n\nIl team ASOC");
        this.router.navigateByUrl("/");
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'asoc-register',
            directives: [primeng_1.Password],
            templateUrl: "register.component.html",
            moduleId: module.id,
            providers: [asoc_service_1.ASOCUserService]
        }), 
        __metadata('design:paramtypes', [asoc_service_1.ASOCUserService, router_1.Router, asoc_service_1.ASOCAuthService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
var LogRegComponent = (function () {
    function LogRegComponent() {
    }
    LogRegComponent = __decorate([
        core_1.Component({
            directives: [LoginComponent, RegisterComponent],
            template: "<div class='row'><div class='col-md-6'><asoc-login></asoc-login></div><div class='col-md-6'><asoc-register></asoc-register></div></div>",
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], LogRegComponent);
    return LogRegComponent;
}());
exports.LogRegComponent = LogRegComponent;
var ActivationComponent = (function () {
    function ActivationComponent(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
    }
    ActivationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.uid = params["uid"];
            _this.token = params["token"];
            _this.auth.activate(_this.uid, _this.token);
        });
    };
    ActivationComponent = __decorate([
        core_1.Component({
            template: "<div><img src='http://www.ascuoladiopencoesione.it/platform/asoc.png'></div><h1>Benvenuto/a in ASOC!</h1><h2>Ora puoi usufruire delle funzioni della piattaforma effettuando il <a href='#/login'>Login</a></h2>",
            moduleId: module.id,
            providers: [asoc_service_1.ASOCUserService]
        }), 
        __metadata('design:paramtypes', [asoc_service_1.ASOCUserService, router_1.Router, router_1.ActivatedRoute])
    ], ActivationComponent);
    return ActivationComponent;
}());
exports.ActivationComponent = ActivationComponent;
//# sourceMappingURL=login.component.js.map