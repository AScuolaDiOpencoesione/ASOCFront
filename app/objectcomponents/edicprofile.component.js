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
var edicprofile_service_1 = require("../services/edicprofile.service");
var EdicProfileListItemComponent = (function (_super) {
    __extends(EdicProfileListItemComponent, _super);
    function EdicProfileListItemComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    EdicProfileListItemComponent = __decorate([
        core_1.Component({
            selector: '[list-item]',
            templateUrl: 'school-list-item.component.html',
            moduleId: module.id,
            providers: [edicprofile_service_1.EdicProfileService]
        }), 
        __metadata('design:paramtypes', [edicprofile_service_1.EdicProfileService])
    ], EdicProfileListItemComponent);
    return EdicProfileListItemComponent;
}(list_component_1.DRFListItemComponent));
exports.EdicProfileListItemComponent = EdicProfileListItemComponent;
var EdicProfileListComponent = (function (_super) {
    __extends(EdicProfileListComponent, _super);
    function EdicProfileListComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    EdicProfileListComponent = __decorate([
        core_1.Component({
            selector: 'school-list',
            templateUrl: 'list.component.html',
            moduleId: module.id,
            providers: [edicprofile_service_1.EdicProfileService],
            directives: [EdicProfileListItemComponent]
        }), 
        __metadata('design:paramtypes', [edicprofile_service_1.EdicProfileService])
    ], EdicProfileListComponent);
    return EdicProfileListComponent;
}(list_component_1.DRFListComponent));
exports.EdicProfileListComponent = EdicProfileListComponent;
var EdicProfileDetailComponent = (function (_super) {
    __extends(EdicProfileDetailComponent, _super);
    function EdicProfileDetailComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.setRoute(route);
        this.prepare();
    }
    EdicProfileDetailComponent = __decorate([
        core_1.Component({
            selector: 'school',
            templateUrl: 'detail.component.html',
            moduleId: module.id,
            providers: [edicprofile_service_1.EdicProfileService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, edicprofile_service_1.EdicProfileService])
    ], EdicProfileDetailComponent);
    return EdicProfileDetailComponent;
}(detail_component_1.DRFDetailComponent));
exports.EdicProfileDetailComponent = EdicProfileDetailComponent;
var EdicProfileEditComponent = (function (_super) {
    __extends(EdicProfileEditComponent, _super);
    function EdicProfileEditComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    EdicProfileEditComponent = __decorate([
        core_1.Component({
            selector: 'school-edit',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            providers: [edicprofile_service_1.EdicProfileService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, edicprofile_service_1.EdicProfileService])
    ], EdicProfileEditComponent);
    return EdicProfileEditComponent;
}(edit_component_1.DRFEditComponent));
exports.EdicProfileEditComponent = EdicProfileEditComponent;
var EdicProfileNewComponent = (function (_super) {
    __extends(EdicProfileNewComponent, _super);
    function EdicProfileNewComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    EdicProfileNewComponent = __decorate([
        core_1.Component({
            selector: 'school-new',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            providers: [edicprofile_service_1.EdicProfileService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, edicprofile_service_1.EdicProfileService])
    ], EdicProfileNewComponent);
    return EdicProfileNewComponent;
}(new_component_1.DRFNewComponent));
exports.EdicProfileNewComponent = EdicProfileNewComponent;
//# sourceMappingURL=edicprofile.component.js.map