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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ServerPingService = (function () {
    function ServerPingService(http) {
        var _this = this;
        this.http = http;
        this.last_connected = true;
        this.interval = setInterval(function () { return _this.check(); }, 1000);
    }
    ServerPingService.prototype.add_url = function (url) {
        this.urls.push(url);
    };
    ServerPingService.prototype.check = function () {
        var _this = this;
        for (var i in this.urls) {
            var url = this.urls[i];
            this.http
                .get(url)
                .toPromise()
                .then(function (res) {
                _this.last_connected = res.status == 200;
            });
        }
    };
    Object.defineProperty(ServerPingService.prototype, "is_connected", {
        get: function () {
            return this.last_connected;
        },
        enumerable: true,
        configurable: true
    });
    ServerPingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ServerPingService);
    return ServerPingService;
}());
exports.ServerPingService = ServerPingService;
//# sourceMappingURL=serverping.service.js.map