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
var association_service_1 = require("../services/association.service");
var AssociationListItemComponent = (function (_super) {
    __extends(AssociationListItemComponent, _super);
    function AssociationListItemComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    AssociationListItemComponent = __decorate([
        core_1.Component({
            selector: '[list-item]',
            templateUrl: 'association-list-item.component.html',
            moduleId: module.id,
            providers: [association_service_1.AssociationService]
        }), 
        __metadata('design:paramtypes', [association_service_1.AssociationService])
    ], AssociationListItemComponent);
    return AssociationListItemComponent;
}(list_component_1.DRFListItemComponent));
exports.AssociationListItemComponent = AssociationListItemComponent;
var AssociationListComponent = (function (_super) {
    __extends(AssociationListComponent, _super);
    function AssociationListComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    AssociationListComponent = __decorate([
        core_1.Component({
            selector: 'association-list',
            templateUrl: 'list.component.html',
            moduleId: module.id,
            providers: [association_service_1.AssociationService],
            directives: [AssociationListItemComponent]
        }), 
        __metadata('design:paramtypes', [association_service_1.AssociationService])
    ], AssociationListComponent);
    return AssociationListComponent;
}(list_component_1.DRFListComponent));
exports.AssociationListComponent = AssociationListComponent;
var AssociationDetailComponent = (function (_super) {
    __extends(AssociationDetailComponent, _super);
    function AssociationDetailComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.setRoute(route);
        this.prepare();
    }
    AssociationDetailComponent = __decorate([
        core_1.Component({
            selector: 'Association',
            templateUrl: 'detail.component.html',
            moduleId: module.id,
            providers: [association_service_1.AssociationService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, association_service_1.AssociationService])
    ], AssociationDetailComponent);
    return AssociationDetailComponent;
}(detail_component_1.DRFDetailComponent));
exports.AssociationDetailComponent = AssociationDetailComponent;
var AssociationEditComponent = (function (_super) {
    __extends(AssociationEditComponent, _super);
    function AssociationEditComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    AssociationEditComponent = __decorate([
        core_1.Component({
            selector: 'association-edit',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            providers: [association_service_1.AssociationService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, association_service_1.AssociationService])
    ], AssociationEditComponent);
    return AssociationEditComponent;
}(edit_component_1.DRFEditComponent));
exports.AssociationEditComponent = AssociationEditComponent;
var AssociationNewComponent = (function (_super) {
    __extends(AssociationNewComponent, _super);
    function AssociationNewComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    AssociationNewComponent = __decorate([
        core_1.Component({
            selector: 'association-new',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            providers: [association_service_1.AssociationService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, association_service_1.AssociationService])
    ], AssociationNewComponent);
    return AssociationNewComponent;
}(new_component_1.DRFNewComponent));
exports.AssociationNewComponent = AssociationNewComponent;
//# sourceMappingURL=association.component.js.map