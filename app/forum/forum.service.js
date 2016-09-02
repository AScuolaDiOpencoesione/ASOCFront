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
require('rxjs/add/operator/toPromise');
var angular2_jwt_1 = require('angular2-jwt');
var asoc_service_1 = require("../services/asoc.service");
var ForumService = (function (_super) {
    __extends(ForumService, _super);
    function ForumService(http) {
        _super.call(this, http);
        this.setSpecUrl("/forum/forum/");
    }
    ForumService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], ForumService);
    return ForumService;
}(asoc_service_1.ASOCService));
exports.ForumService = ForumService;
var ForumChannelService = (function (_super) {
    __extends(ForumChannelService, _super);
    function ForumChannelService(http) {
        _super.call(this, http);
        this.setSpecUrl("/forum/channel/");
    }
    ForumChannelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], ForumChannelService);
    return ForumChannelService;
}(asoc_service_1.ASOCService));
exports.ForumChannelService = ForumChannelService;
var ForumThreadService = (function (_super) {
    __extends(ForumThreadService, _super);
    function ForumThreadService(http) {
        _super.call(this, http);
        this.setSpecUrl("/forum/thread/");
    }
    ForumThreadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], ForumThreadService);
    return ForumThreadService;
}(asoc_service_1.ASOCService));
exports.ForumThreadService = ForumThreadService;
var ForumPostService = (function (_super) {
    __extends(ForumPostService, _super);
    function ForumPostService(http) {
        _super.call(this, http);
        this.setSpecUrl("/forum/post/");
    }
    ForumPostService.prototype.getPostsForThread = function (thread) {
        return this.getAll({ thread: thread });
    };
    ForumPostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], ForumPostService);
    return ForumPostService;
}(asoc_service_1.ASOCService));
exports.ForumPostService = ForumPostService;
//# sourceMappingURL=forum.service.js.map