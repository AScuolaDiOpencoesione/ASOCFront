"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
require('rxjs/add/operator/toPromise');
var angular2_jwt_1 = require('angular2-jwt');
var drf_service_1 = require("./drf.service");
var drf_jwt_service_1 = require("./drf.jwt.service");
var ASOCService = (function (_super) {
    __extends(ASOCService, _super);
    function ASOCService(http) {
        _super.call(this, http);
        this.setBaseUrl("http://ea2c9896.ngrok.io");
    }
    ASOCService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], ASOCService);
    return ASOCService;
}(drf_service_1.DRFService));
exports.ASOCService = ASOCService;
var ASOCAuthService = (function (_super) {
    __extends(ASOCAuthService, _super);
    function ASOCAuthService(authHttp, http, zone, router) {
        _super.call(this, authHttp, http, zone, router);
        this.setBaseUrl("http://ea2c9896.ngrok.io");
        this.setSpecUrl("/api-token-auth/");
    }
    ASOCAuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp, http_1.Http, core_1.NgZone, router_1.Router])
    ], ASOCAuthService);
    return ASOCAuthService;
}(drf_jwt_service_1.JWTAuthService));
exports.ASOCAuthService = ASOCAuthService;
var ASOCUserService = (function (_super) {
    __extends(ASOCUserService, _super);
    function ASOCUserService(authHttp, http, zone, router) {
        _super.call(this, authHttp, http);
        this.setBaseUrl("http://ea2c9896.ngrok.io/auth");
    }
    ASOCUserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp, http_1.Http, core_1.NgZone, router_1.Router])
    ], ASOCUserService);
    return ASOCUserService;
}(drf_service_1.UserService));
exports.ASOCUserService = ASOCUserService;
//# sourceMappingURL=asoc.service.js.map