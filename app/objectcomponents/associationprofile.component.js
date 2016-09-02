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
var associationprofile_service_1 = require("../services/associationprofile.service");
var AssociationProfileListItemComponent = (function (_super) {
    __extends(AssociationProfileListItemComponent, _super);
    function AssociationProfileListItemComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    AssociationProfileListItemComponent = __decorate([
        core_1.Component({
            selector: '[list-item]',
            templateUrl: 'school-list-item.component.html',
            moduleId: module.id,
            providers: [associationprofile_service_1.AssociationProfileService]
        }), 
        __metadata('design:paramtypes', [associationprofile_service_1.AssociationProfileService])
    ], AssociationProfileListItemComponent);
    return AssociationProfileListItemComponent;
}(list_component_1.DRFListItemComponent));
exports.AssociationProfileListItemComponent = AssociationProfileListItemComponent;
var AssociationProfileListComponent = (function (_super) {
    __extends(AssociationProfileListComponent, _super);
    function AssociationProfileListComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    AssociationProfileListComponent = __decorate([
        core_1.Component({
            selector: 'school-list',
            templateUrl: 'list.component.html',
            moduleId: module.id,
            providers: [associationprofile_service_1.AssociationProfileService],
            directives: [AssociationProfileListItemComponent]
        }), 
        __metadata('design:paramtypes', [associationprofile_service_1.AssociationProfileService])
    ], AssociationProfileListComponent);
    return AssociationProfileListComponent;
}(list_component_1.DRFListComponent));
exports.AssociationProfileListComponent = AssociationProfileListComponent;
var AssociationProfileDetailComponent = (function (_super) {
    __extends(AssociationProfileDetailComponent, _super);
    function AssociationProfileDetailComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.setRoute(route);
        this.prepare();
    }
    AssociationProfileDetailComponent = __decorate([
        core_1.Component({
            selector: 'school',
            templateUrl: 'detail.component.html',
            moduleId: module.id,
            providers: [associationprofile_service_1.AssociationProfileService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, associationprofile_service_1.AssociationProfileService])
    ], AssociationProfileDetailComponent);
    return AssociationProfileDetailComponent;
}(detail_component_1.DRFDetailComponent));
exports.AssociationProfileDetailComponent = AssociationProfileDetailComponent;
var AssociationProfileEditComponent = (function (_super) {
    __extends(AssociationProfileEditComponent, _super);
    function AssociationProfileEditComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    AssociationProfileEditComponent = __decorate([
        core_1.Component({
            selector: 'school-edit',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            providers: [associationprofile_service_1.AssociationProfileService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, associationprofile_service_1.AssociationProfileService])
    ], AssociationProfileEditComponent);
    return AssociationProfileEditComponent;
}(edit_component_1.DRFEditComponent));
exports.AssociationProfileEditComponent = AssociationProfileEditComponent;
var AssociationProfileNewComponent = (function (_super) {
    __extends(AssociationProfileNewComponent, _super);
    function AssociationProfileNewComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    AssociationProfileNewComponent = __decorate([
        core_1.Component({
            selector: 'school-new',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            providers: [associationprofile_service_1.AssociationProfileService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, associationprofile_service_1.AssociationProfileService])
    ], AssociationProfileNewComponent);
    return AssociationProfileNewComponent;
}(new_component_1.DRFNewComponent));
exports.AssociationProfileNewComponent = AssociationProfileNewComponent;
//# sourceMappingURL=associationprofile.component.js.map