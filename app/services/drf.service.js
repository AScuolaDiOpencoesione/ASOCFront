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
var angular2_jwt_1 = require('angular2-jwt');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/toPromise');
var DRFServiceBase = (function () {
    function DRFServiceBase(http) {
        this._base_url = "";
    }
    DRFServiceBase.prototype.setBaseUrl = function (base) {
        this._base_url = base;
        this._res_url = base;
    };
    DRFServiceBase.prototype.serializeParams = function (obj) {
        var str = [];
        for (var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
    };
    DRFServiceBase.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) {
            return parts.pop().split(";").shift();
        }
    };
    DRFServiceBase.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json() || 'Server error');
    };
    DRFServiceBase = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], DRFServiceBase);
    return DRFServiceBase;
}());
exports.DRFServiceBase = DRFServiceBase;
var DRFResourceServiceBase = (function (_super) {
    __extends(DRFResourceServiceBase, _super);
    function DRFResourceServiceBase(http) {
        _super.call(this, http);
        this._spec_url = "";
    }
    DRFResourceServiceBase.prototype.setSpecUrl = function (spec) {
        this._spec_url = spec;
        this._res_url = this._base_url + this._spec_url;
    };
    return DRFResourceServiceBase;
}(DRFServiceBase));
exports.DRFResourceServiceBase = DRFResourceServiceBase;
var DRFService = (function (_super) {
    __extends(DRFService, _super);
    function DRFService(http) {
        _super.call(this, http);
        this.http = http;
        this.http = http;
    }
    DRFService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    DRFService.prototype.getAll = function (params) {
        if (params === void 0) { params = null; }
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        var furl = this._res_url;
        if (params != null)
            furl += "?" + this.serializeParams(params);
        return this.http.get(furl, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); }, this.handleError)
            .then(function (items) {
            console.log(items);
            return items;
        });
    };
    DRFService.prototype.getOne = function (id) {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return this.http.get(this._res_url + id + "/", { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); }, this.handleError)
            .then(function (item) {
            console.log(item);
            return item;
        });
    };
    DRFService.prototype.getOptions = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return this.http.request(new http_1.Request({
            method: http_1.RequestMethod.Options,
            url: this._res_url,
            headers: headers
        }))
            .toPromise()
            .then(function (res) { return res.json(); }, this.handleError)
            .then(function (options) {
            console.log(options);
            return options;
        });
    };
    DRFService.prototype.removeOne = function (id) {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return;
    };
    DRFService.prototype.addOne = function (item, error) {
        if (error === void 0) { error = null; }
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('X-CSRFToken', this.getCookie('csrftoken'));
        return this.http.post(this._res_url, JSON.stringify(item), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); }, function (err) {
            if (error != null)
                error(err);
        });
    };
    DRFService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], DRFService);
    return DRFService;
}(DRFResourceServiceBase));
exports.DRFService = DRFService;
var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(authhttp, http) {
        _super.call(this, authhttp);
        this.authhttp = authhttp;
        this.http = http;
        this.headers = new http_1.Headers();
        this.authhttp = authhttp;
        this.noauthhttp = http;
        this.headers.append('Content-Type', 'application/json');
    }
    UserService.prototype.getMe = function () {
        var url = this._base_url + "/me/";
        this.authhttp.get(url, { headers: this.headers })
            .toPromise()
            .then(function (usr) {
            return usr.json();
        })
            .catch(this.handleError);
    };
    UserService.prototype.changeUsername = function () { };
    UserService.prototype.changePassword = function () { };
    UserService.prototype.register = function (user, pass, email) {
        var url = this._base_url + "/register/";
        this.noauthhttp.post(url, JSON.stringify({ "username": user, "password": pass, "email": email }), { headers: this.headers })
            .toPromise()
            .then(function (content) {
            console.log(content);
        })
            .catch(this.handleError);
    };
    UserService.prototype.activate = function (uid, token) {
        var url = this._base_url + "/activate/";
        return this.noauthhttp.post(url, JSON.stringify({ "uid": uid, "token": token }), { headers: this.headers })
            .toPromise()
            .then(function (content) {
            console.log(content);
        });
    };
    UserService.prototype.hasProfile = function () {
        var isnn = localStorage.getItem("user_type") != null;
        var isnu = localStorage.getItem("user_type") != "undefined";
        return isnn && isnu;
    };
    return UserService;
}(DRFServiceBase));
exports.UserService = UserService;
//# sourceMappingURL=drf.service.js.map