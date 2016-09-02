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
var list_component_1 = require("./list.component");
var detail_component_1 = require("./detail.component");
var edit_component_1 = require("./edit.component");
var new_component_1 = require("./new.component");
var applyingteam_service_1 = require("../services/applyingteam.service");
var ApplyingTeamListItemComponent = (function (_super) {
    __extends(ApplyingTeamListItemComponent, _super);
    function ApplyingTeamListItemComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    ApplyingTeamListItemComponent = __decorate([
        core_1.Component({
            selector: '[list-item]',
            templateUrl: 'school-list-item.component.html',
            moduleId: module.id,
            providers: [applyingteam_service_1.ApplyingTeamService]
        }), 
        __metadata('design:paramtypes', [applyingteam_service_1.ApplyingTeamService])
    ], ApplyingTeamListItemComponent);
    return ApplyingTeamListItemComponent;
}(list_component_1.DRFListItemComponent));
exports.ApplyingTeamListItemComponent = ApplyingTeamListItemComponent;
var ApplyingTeamListComponent = (function (_super) {
    __extends(ApplyingTeamListComponent, _super);
    function ApplyingTeamListComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    ApplyingTeamListComponent = __decorate([
        core_1.Component({
            selector: 'school-list',
            templateUrl: 'list.component.html',
            moduleId: module.id,
            providers: [applyingteam_service_1.ApplyingTeamService],
            directives: [ApplyingTeamListItemComponent]
        }), 
        __metadata('design:paramtypes', [applyingteam_service_1.ApplyingTeamService])
    ], ApplyingTeamListComponent);
    return ApplyingTeamListComponent;
}(list_component_1.DRFListComponent));
exports.ApplyingTeamListComponent = ApplyingTeamListComponent;
var ApplyingTeamDetailComponent = (function (_super) {
    __extends(ApplyingTeamDetailComponent, _super);
    function ApplyingTeamDetailComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.setRoute(route);
        this.prepare();
    }
    ApplyingTeamDetailComponent = __decorate([
        core_1.Component({
            selector: 'school',
            templateUrl: 'at-detail.component.html',
            moduleId: module.id,
            providers: [applyingteam_service_1.ApplyingTeamService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, applyingteam_service_1.ApplyingTeamService])
    ], ApplyingTeamDetailComponent);
    return ApplyingTeamDetailComponent;
}(detail_component_1.DRFDetailComponent));
exports.ApplyingTeamDetailComponent = ApplyingTeamDetailComponent;
var ApplyingTeamEditComponent = (function (_super) {
    __extends(ApplyingTeamEditComponent, _super);
    function ApplyingTeamEditComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    ApplyingTeamEditComponent = __decorate([
        core_1.Component({
            selector: 'school-edit',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            providers: [applyingteam_service_1.ApplyingTeamService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, applyingteam_service_1.ApplyingTeamService])
    ], ApplyingTeamEditComponent);
    return ApplyingTeamEditComponent;
}(edit_component_1.DRFEditComponent));
exports.ApplyingTeamEditComponent = ApplyingTeamEditComponent;
var ApplyingTeamNewComponent = (function (_super) {
    __extends(ApplyingTeamNewComponent, _super);
    function ApplyingTeamNewComponent(route, router, service) {
        _super.call(this);
        this.route = route;
        this.router = router;
        this.setService(service);
        this.prepare();
    }
    ApplyingTeamNewComponent.prototype.postSave = function (item) {
        this.router.navigate(['application', item.id, "review"]);
    };
    ApplyingTeamNewComponent = __decorate([
        core_1.Component({
            selector: 'school-new',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            providers: [applyingteam_service_1.ApplyingTeamService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, applyingteam_service_1.ApplyingTeamService])
    ], ApplyingTeamNewComponent);
    return ApplyingTeamNewComponent;
}(new_component_1.DRFNewComponent));
exports.ApplyingTeamNewComponent = ApplyingTeamNewComponent;
//# sourceMappingURL=applyingteam.component.js.map