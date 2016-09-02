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
var school_service_1 = require("../services/school.service");
var SchoolListItemComponent = (function (_super) {
    __extends(SchoolListItemComponent, _super);
    function SchoolListItemComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    SchoolListItemComponent = __decorate([
        core_1.Component({
            selector: '[list-item]',
            templateUrl: 'school-list-item.component.html',
            moduleId: module.id,
            providers: [school_service_1.SchoolService]
        }), 
        __metadata('design:paramtypes', [school_service_1.SchoolService])
    ], SchoolListItemComponent);
    return SchoolListItemComponent;
}(list_component_1.DRFListItemComponent));
exports.SchoolListItemComponent = SchoolListItemComponent;
var SchoolListComponent = (function (_super) {
    __extends(SchoolListComponent, _super);
    function SchoolListComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    SchoolListComponent = __decorate([
        core_1.Component({
            selector: 'school-list',
            templateUrl: 'list.component.html',
            moduleId: module.id,
            providers: [school_service_1.SchoolService],
            directives: [SchoolListItemComponent]
        }), 
        __metadata('design:paramtypes', [school_service_1.SchoolService])
    ], SchoolListComponent);
    return SchoolListComponent;
}(list_component_1.DRFListComponent));
exports.SchoolListComponent = SchoolListComponent;
var SchoolDetailComponent = (function (_super) {
    __extends(SchoolDetailComponent, _super);
    function SchoolDetailComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.setRoute(route);
        this.prepare();
    }
    SchoolDetailComponent = __decorate([
        core_1.Component({
            selector: 'school',
            templateUrl: 'detail.component.html',
            moduleId: module.id,
            providers: [school_service_1.SchoolService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, school_service_1.SchoolService])
    ], SchoolDetailComponent);
    return SchoolDetailComponent;
}(detail_component_1.DRFDetailComponent));
exports.SchoolDetailComponent = SchoolDetailComponent;
var SchoolEditComponent = (function (_super) {
    __extends(SchoolEditComponent, _super);
    function SchoolEditComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    SchoolEditComponent = __decorate([
        core_1.Component({
            selector: 'school-edit',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            providers: [school_service_1.SchoolService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, school_service_1.SchoolService])
    ], SchoolEditComponent);
    return SchoolEditComponent;
}(edit_component_1.DRFEditComponent));
exports.SchoolEditComponent = SchoolEditComponent;
var SchoolNewComponent = (function (_super) {
    __extends(SchoolNewComponent, _super);
    function SchoolNewComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    SchoolNewComponent = __decorate([
        core_1.Component({
            selector: 'school-new',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            providers: [school_service_1.SchoolService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, school_service_1.SchoolService])
    ], SchoolNewComponent);
    return SchoolNewComponent;
}(new_component_1.DRFNewComponent));
exports.SchoolNewComponent = SchoolNewComponent;
//# sourceMappingURL=schools.component.js.map