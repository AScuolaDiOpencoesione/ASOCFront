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
var edic_service_1 = require("../services/edic.service");
var EdicListItemComponent = (function (_super) {
    __extends(EdicListItemComponent, _super);
    function EdicListItemComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    EdicListItemComponent = __decorate([
        core_1.Component({
            selector: '[list-item]',
            templateUrl: 'edic-list-item.component.html',
            moduleId: module.id,
            providers: [edic_service_1.EdicService]
        }), 
        __metadata('design:paramtypes', [edic_service_1.EdicService])
    ], EdicListItemComponent);
    return EdicListItemComponent;
}(list_component_1.DRFListItemComponent));
exports.EdicListItemComponent = EdicListItemComponent;
var EdicListComponent = (function (_super) {
    __extends(EdicListComponent, _super);
    function EdicListComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    EdicListComponent = __decorate([
        core_1.Component({
            selector: 'edic-list',
            templateUrl: 'list.component.html',
            moduleId: module.id,
            providers: [edic_service_1.EdicService],
            directives: [EdicListItemComponent]
        }), 
        __metadata('design:paramtypes', [edic_service_1.EdicService])
    ], EdicListComponent);
    return EdicListComponent;
}(list_component_1.DRFListComponent));
exports.EdicListComponent = EdicListComponent;
var EdicDetailComponent = (function (_super) {
    __extends(EdicDetailComponent, _super);
    function EdicDetailComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.setRoute(route);
        this.prepare();
    }
    EdicDetailComponent = __decorate([
        core_1.Component({
            selector: 'edic',
            templateUrl: 'detail.component.html',
            moduleId: module.id,
            providers: [edic_service_1.EdicService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, edic_service_1.EdicService])
    ], EdicDetailComponent);
    return EdicDetailComponent;
}(detail_component_1.DRFDetailComponent));
exports.EdicDetailComponent = EdicDetailComponent;
var EdicEditComponent = (function (_super) {
    __extends(EdicEditComponent, _super);
    function EdicEditComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.name = "Modifica EDIC";
        this.setService(service);
        this.prepare();
    }
    EdicEditComponent = __decorate([
        core_1.Component({
            selector: 'edic-edit',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            providers: [edic_service_1.EdicService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, edic_service_1.EdicService])
    ], EdicEditComponent);
    return EdicEditComponent;
}(edit_component_1.DRFEditComponent));
exports.EdicEditComponent = EdicEditComponent;
var EdicNewComponent = (function (_super) {
    __extends(EdicNewComponent, _super);
    function EdicNewComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.name = "Crea EDIC";
        this.setService(service);
        this.prepare();
    }
    EdicNewComponent = __decorate([
        core_1.Component({
            selector: 'edic-new',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            providers: [edic_service_1.EdicService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, edic_service_1.EdicService])
    ], EdicNewComponent);
    return EdicNewComponent;
}(new_component_1.DRFNewComponent));
exports.EdicNewComponent = EdicNewComponent;
//# sourceMappingURL=edic.component.js.map