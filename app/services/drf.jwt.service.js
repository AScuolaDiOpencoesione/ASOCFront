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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var drf_service_1 = require('./drf.service');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
/**
 * Implements the base authentication service. To be extended in specialized situations.
 */
var AuthService = (function (_super) {
    __extends(AuthService, _super);
    function AuthService(authHttp) {
        _super.call(this, authHttp);
    }
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], AuthService);
    return AuthService;
}(drf_service_1.DRFResourceServiceBase));
exports.AuthService = AuthService;
var JWTAuthService = (function (_super) {
    __extends(JWTAuthService, _super);
    function JWTAuthService(authHttp, http, zone, router) {
        _super.call(this, authHttp);
        this.loggedInSource = new BehaviorSubject_1.BehaviorSubject(localStorage.getItem("id_token") != null);
        this.loggedIn = this.loggedInSource.asObservable();
        this.authHttp = authHttp;
        this.zoneImpl = zone;
        this.router = router;
        this.http = http;
        this.user = localStorage.getItem('id_token');
        this.setUserName(localStorage.getItem("username"));
        this.setUserType(localStorage.getItem("user_type"));
        this.setIsAdmin(localStorage.getItem("is_admin"));
        this.setIsAdmin(localStorage.getItem("user_id"));
    }
    Object.defineProperty(JWTAuthService.prototype, "is_loggedin", {
        get: function () {
            return localStorage.getItem('id_token') != "";
        },
        enumerable: true,
        configurable: true
    });
    JWTAuthService.prototype.setUserName = function (username) {
        this.user_name = username;
    };
    JWTAuthService.prototype.setUserType = function (usertype) {
        this.user_type = usertype;
    };
    JWTAuthService.prototype.setIsAdmin = function (is_admin) {
        this.is_admin = is_admin;
    };
    JWTAuthService.prototype.setUserID = function (user_id) {
        this.user_id = user_id;
    };
    JWTAuthService.prototype.login = function (user, pass, error) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        //headers.append('X-CSRFToken', this.getCookie('csrftoken'));
        var auth = { "username": user, "password": pass };
        return this.http.post(this._base_url + "/api-token-auth/", JSON.stringify(auth), { headers: headers })
            .toPromise()
            .then(function (res) {
            var data = res.json();
            var token = data.token;
            localStorage.setItem("id_token", token);
            localStorage.setItem("username", data.user);
            localStorage.setItem("user_id", data.id);
            _this.setUserName(data.user);
            _this.setUserID(data.id);
            console.log(data);
            try {
                localStorage.setItem("user_type", data.type);
            }
            catch (e) {
                localStorage.setItem("user_type", "admin");
            }
            _this.setUserType(data.type);
            try {
                localStorage.setItem("is_admin", data.is_admin);
            }
            catch (e) {
                localStorage.setItem("is_admin", "false");
            }
            _this.setIsAdmin(localStorage.getItem("is_admin"));
            _this.is_admin = localStorage.getItem('is_admin');
            _this.user_name = localStorage.getItem("username");
            _this.user_type = localStorage.getItem("user_type");
            _this.loggedInSource.next(true);
            return;
        }, function (err) {
            error(err.json().non_field_errors[0]);
        });
    };
    JWTAuthService.prototype.authenticated = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        this.user = localStorage.getItem('id_token');
        return this.http.post(this._base_url + "/api-token-verify/", JSON.stringify(this.user), { headers: headers })
            .toPromise()
            .then(function (res) {
            return true;
        })
            .catch(function (er) {
            return false;
        });
    };
    JWTAuthService.prototype.refresh = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        this.user = localStorage.getItem('id_token');
        return this.http.post(this._base_url + "/api-token-refresh/", JSON.stringify(this.user), { headers: headers })
            .toPromise()
            .then(function (res) {
            var token = res.json().token;
            localStorage.setItem("id_token", token);
            return;
        })
            .catch(this.handleError);
    };
    JWTAuthService.prototype.logout = function () {
        localStorage.removeItem('id_token');
        localStorage.removeItem('is_admin');
        localStorage.removeItem("username");
        localStorage.removeItem("user_type");
        this.user = "";
        this.is_admin = false;
        this.user_name = "";
        this.user_type = "";
        this.loggedInSource.next(false);
    };
    JWTAuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp, http_1.Http, core_1.NgZone, router_1.Router])
    ], JWTAuthService);
    return JWTAuthService;
}(AuthService));
exports.JWTAuthService = JWTAuthService;
//# sourceMappingURL=drf.jwt.service.js.map