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
var router_2 = require('@angular/router');
var list_component_1 = require("../objectcomponents/list.component");
var detail_component_1 = require("../objectcomponents/detail.component");
var edit_component_1 = require("../objectcomponents/edit.component");
var new_component_1 = require("../objectcomponents/new.component");
var asoc_service_1 = require('../services/asoc.service');
var forum_service_1 = require("./forum.service");
var ForumListItemComponent = (function (_super) {
    __extends(ForumListItemComponent, _super);
    function ForumListItemComponent(service, _router) {
        _super.call(this);
        this._router = _router;
        this.setService(service);
        this.prepare();
    }
    ForumListItemComponent = __decorate([
        core_1.Component({
            selector: '[list-item]',
            templateUrl: 'list-item.component.html',
            moduleId: module.id,
            providers: [forum_service_1.ForumService]
        }), 
        __metadata('design:paramtypes', [forum_service_1.ForumService, router_1.Router])
    ], ForumListItemComponent);
    return ForumListItemComponent;
}(list_component_1.DRFListItemComponent));
exports.ForumListItemComponent = ForumListItemComponent;
var ForumListComponent = (function (_super) {
    __extends(ForumListComponent, _super);
    function ForumListComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    ForumListComponent = __decorate([
        core_1.Component({
            selector: 'list',
            templateUrl: 'list.component.html',
            moduleId: module.id,
            providers: [forum_service_1.ForumService],
            directives: [ForumListItemComponent, router_2.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forum_service_1.ForumService])
    ], ForumListComponent);
    return ForumListComponent;
}(list_component_1.DRFListComponent));
exports.ForumListComponent = ForumListComponent;
var ForumDetailComponent = (function (_super) {
    __extends(ForumDetailComponent, _super);
    function ForumDetailComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.setRoute(route);
        this.prepare();
    }
    ForumDetailComponent = __decorate([
        core_1.Component({
            selector: 'Forum',
            templateUrl: 'detail.component.html',
            moduleId: module.id,
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [forum_service_1.ForumService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, forum_service_1.ForumService])
    ], ForumDetailComponent);
    return ForumDetailComponent;
}(detail_component_1.DRFDetailComponent));
exports.ForumDetailComponent = ForumDetailComponent;
var ForumEditComponent = (function (_super) {
    __extends(ForumEditComponent, _super);
    function ForumEditComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    ForumEditComponent = __decorate([
        core_1.Component({
            selector: 'edit',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [forum_service_1.ForumService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, forum_service_1.ForumService])
    ], ForumEditComponent);
    return ForumEditComponent;
}(edit_component_1.DRFEditComponent));
exports.ForumEditComponent = ForumEditComponent;
var ForumNewComponent = (function (_super) {
    __extends(ForumNewComponent, _super);
    function ForumNewComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    ForumNewComponent = __decorate([
        core_1.Component({
            selector: 'new',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [forum_service_1.ForumService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, forum_service_1.ForumService])
    ], ForumNewComponent);
    return ForumNewComponent;
}(new_component_1.DRFNewComponent));
exports.ForumNewComponent = ForumNewComponent;
var ForumChannelListItemComponent = (function (_super) {
    __extends(ForumChannelListItemComponent, _super);
    function ForumChannelListItemComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    ForumChannelListItemComponent = __decorate([
        core_1.Component({
            selector: '[list-item]',
            templateUrl: 'channel-list-item.component.html',
            moduleId: module.id,
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [forum_service_1.ForumChannelService]
        }), 
        __metadata('design:paramtypes', [forum_service_1.ForumChannelService])
    ], ForumChannelListItemComponent);
    return ForumChannelListItemComponent;
}(list_component_1.DRFListItemComponent));
exports.ForumChannelListItemComponent = ForumChannelListItemComponent;
var ForumChannelListComponent = (function (_super) {
    __extends(ForumChannelListComponent, _super);
    function ForumChannelListComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    ForumChannelListComponent = __decorate([
        core_1.Component({
            selector: 'list',
            templateUrl: 'list.component.html',
            moduleId: module.id,
            providers: [forum_service_1.ForumChannelService],
            directives: [ForumChannelListItemComponent, router_2.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forum_service_1.ForumChannelService])
    ], ForumChannelListComponent);
    return ForumChannelListComponent;
}(list_component_1.DRFListComponent));
exports.ForumChannelListComponent = ForumChannelListComponent;
var ForumChannelDetailComponent = (function (_super) {
    __extends(ForumChannelDetailComponent, _super);
    function ForumChannelDetailComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.setRoute(route);
        this.prepare();
    }
    ForumChannelDetailComponent = __decorate([
        core_1.Component({
            selector: 'ForumChannel',
            templateUrl: 'channel-detail.component.html',
            moduleId: module.id,
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [forum_service_1.ForumChannelService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, forum_service_1.ForumChannelService])
    ], ForumChannelDetailComponent);
    return ForumChannelDetailComponent;
}(detail_component_1.DRFDetailComponent));
exports.ForumChannelDetailComponent = ForumChannelDetailComponent;
var ForumChannelEditComponent = (function (_super) {
    __extends(ForumChannelEditComponent, _super);
    function ForumChannelEditComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    ForumChannelEditComponent = __decorate([
        core_1.Component({
            selector: 'edit',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [forum_service_1.ForumChannelService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, forum_service_1.ForumChannelService])
    ], ForumChannelEditComponent);
    return ForumChannelEditComponent;
}(edit_component_1.DRFEditComponent));
exports.ForumChannelEditComponent = ForumChannelEditComponent;
var ForumChannelNewComponent = (function (_super) {
    __extends(ForumChannelNewComponent, _super);
    function ForumChannelNewComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    ForumChannelNewComponent = __decorate([
        core_1.Component({
            selector: 'new',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [forum_service_1.ForumChannelService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, forum_service_1.ForumChannelService])
    ], ForumChannelNewComponent);
    return ForumChannelNewComponent;
}(new_component_1.DRFNewComponent));
exports.ForumChannelNewComponent = ForumChannelNewComponent;
var ForumThreadListItemComponent = (function (_super) {
    __extends(ForumThreadListItemComponent, _super);
    function ForumThreadListItemComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    ForumThreadListItemComponent = __decorate([
        core_1.Component({
            selector: '[list-item]',
            templateUrl: 'thread-list-item.component.html',
            moduleId: module.id,
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [forum_service_1.ForumThreadService]
        }), 
        __metadata('design:paramtypes', [forum_service_1.ForumThreadService])
    ], ForumThreadListItemComponent);
    return ForumThreadListItemComponent;
}(list_component_1.DRFListItemComponent));
exports.ForumThreadListItemComponent = ForumThreadListItemComponent;
var ForumThreadListComponent = (function (_super) {
    __extends(ForumThreadListComponent, _super);
    function ForumThreadListComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    ForumThreadListComponent = __decorate([
        core_1.Component({
            selector: 'list',
            templateUrl: 'list.component.html',
            moduleId: module.id,
            providers: [forum_service_1.ForumThreadService],
            directives: [ForumThreadListItemComponent, router_2.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forum_service_1.ForumThreadService])
    ], ForumThreadListComponent);
    return ForumThreadListComponent;
}(list_component_1.DRFListComponent));
exports.ForumThreadListComponent = ForumThreadListComponent;
var ForumThreadDetailComponent = (function (_super) {
    __extends(ForumThreadDetailComponent, _super);
    function ForumThreadDetailComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.setRoute(route);
        this.prepare();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ForumThreadDetailComponent.prototype, "thread", void 0);
    ForumThreadDetailComponent = __decorate([
        core_1.Component({
            selector: 'ForumThread',
            templateUrl: 'thread-detail.component.html',
            moduleId: module.id,
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [forum_service_1.ForumThreadService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, forum_service_1.ForumThreadService])
    ], ForumThreadDetailComponent);
    return ForumThreadDetailComponent;
}(detail_component_1.DRFDetailComponent));
exports.ForumThreadDetailComponent = ForumThreadDetailComponent;
var ForumThreadEditComponent = (function (_super) {
    __extends(ForumThreadEditComponent, _super);
    function ForumThreadEditComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    ForumThreadEditComponent = __decorate([
        core_1.Component({
            selector: 'edit',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [forum_service_1.ForumThreadService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, forum_service_1.ForumThreadService])
    ], ForumThreadEditComponent);
    return ForumThreadEditComponent;
}(edit_component_1.DRFEditComponent));
exports.ForumThreadEditComponent = ForumThreadEditComponent;
var ForumThreadNewComponent = (function (_super) {
    __extends(ForumThreadNewComponent, _super);
    function ForumThreadNewComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    ForumThreadNewComponent = __decorate([
        core_1.Component({
            selector: 'new',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [forum_service_1.ForumThreadService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, forum_service_1.ForumThreadService])
    ], ForumThreadNewComponent);
    return ForumThreadNewComponent;
}(new_component_1.DRFNewComponent));
exports.ForumThreadNewComponent = ForumThreadNewComponent;
var ForumPostListItemComponent = (function (_super) {
    __extends(ForumPostListItemComponent, _super);
    function ForumPostListItemComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    ForumPostListItemComponent = __decorate([
        core_1.Component({
            selector: '[post-list-item]',
            templateUrl: 'post-list-item.component.html',
            moduleId: module.id,
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [forum_service_1.ForumPostService]
        }), 
        __metadata('design:paramtypes', [forum_service_1.ForumPostService])
    ], ForumPostListItemComponent);
    return ForumPostListItemComponent;
}(list_component_1.DRFListItemComponent));
exports.ForumPostListItemComponent = ForumPostListItemComponent;
var ForumPostListComponent = (function (_super) {
    __extends(ForumPostListComponent, _super);
    function ForumPostListComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    ForumPostListComponent = __decorate([
        core_1.Component({
            selector: 'post-list',
            templateUrl: 'post-list.component.html',
            moduleId: module.id,
            providers: [forum_service_1.ForumPostService],
            directives: [ForumPostListItemComponent, router_2.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forum_service_1.ForumPostService])
    ], ForumPostListComponent);
    return ForumPostListComponent;
}(list_component_1.DRFListComponent));
exports.ForumPostListComponent = ForumPostListComponent;
var ForumPostDetailComponent = (function (_super) {
    __extends(ForumPostDetailComponent, _super);
    function ForumPostDetailComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.setRoute(route);
        this.prepare();
    }
    ForumPostDetailComponent = __decorate([
        core_1.Component({
            selector: 'ForumPost',
            templateUrl: 'detail.component.html',
            moduleId: module.id,
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [forum_service_1.ForumPostService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, forum_service_1.ForumPostService])
    ], ForumPostDetailComponent);
    return ForumPostDetailComponent;
}(detail_component_1.DRFDetailComponent));
exports.ForumPostDetailComponent = ForumPostDetailComponent;
var ForumPostEditComponent = (function (_super) {
    __extends(ForumPostEditComponent, _super);
    function ForumPostEditComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    ForumPostEditComponent = __decorate([
        core_1.Component({
            selector: 'edit',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [forum_service_1.ForumPostService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, forum_service_1.ForumPostService])
    ], ForumPostEditComponent);
    return ForumPostEditComponent;
}(edit_component_1.DRFEditComponent));
exports.ForumPostEditComponent = ForumPostEditComponent;
var ForumPostNewComponent = (function (_super) {
    __extends(ForumPostNewComponent, _super);
    function ForumPostNewComponent(route, _router, auth, service) {
        _super.call(this);
        this.route = route;
        this._router = _router;
        this.auth = auth;
        this.setService(service);
        console.log(this.route.snapshot.url[0].path);
        this.thread = this.route.snapshot.url[0].path.split("/")[2];
        this.done.subscribe(function (x) { return _router.navigateByUrl("/forum/2/1"); });
        this.prepare({ thread: this.thread, author: this.auth.user_id });
    }
    ForumPostNewComponent = __decorate([
        core_1.Component({
            selector: 'new',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [forum_service_1.ForumPostService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, asoc_service_1.ASOCAuthService, forum_service_1.ForumPostService])
    ], ForumPostNewComponent);
    return ForumPostNewComponent;
}(new_component_1.DRFNewComponent));
exports.ForumPostNewComponent = ForumPostNewComponent;
var ForumComponent = (function () {
    function ForumComponent(route) {
        this.route = route;
    }
    ForumComponent.prototype.ngOnInit = function () {
    };
    ForumComponent.prototype.ngOnDestroy = function () {
    };
    ForumComponent = __decorate([
        core_1.Component({
            selector: 'product-details',
            template: "\n    <h1>Forum</h1>\n    <router-outlet></router-outlet>\n    <!-- Overview & Specs components get added here by the router -->\n  ",
            directives: [router_2.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], ForumComponent);
    return ForumComponent;
}());
exports.ForumComponent = ForumComponent;
//# sourceMappingURL=forum.component.js.map