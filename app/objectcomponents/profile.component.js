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
var detail_component_1 = require("./detail.component");
var edit_component_1 = require("./edit.component");
var school_service_1 = require("../services/school.service");
var ProfileDetailComponent = (function (_super) {
    __extends(ProfileDetailComponent, _super);
    function ProfileDetailComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.setRoute(route);
        this.prepare();
    }
    ProfileDetailComponent = __decorate([
        core_1.Component({
            selector: 'school',
            templateUrl: '/app/objectcomponents/detail.component.html',
            providers: [school_service_1.SchoolService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, school_service_1.SchoolService])
    ], ProfileDetailComponent);
    return ProfileDetailComponent;
}(detail_component_1.DRFDetailComponent));
exports.ProfileDetailComponent = ProfileDetailComponent;
var ProfileEditComponent = (function (_super) {
    __extends(ProfileEditComponent, _super);
    function ProfileEditComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    ProfileEditComponent = __decorate([
        core_1.Component({
            selector: 'school-edit',
            templateUrl: '/app/objectcomponents/form.component.html',
            providers: [school_service_1.SchoolService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, school_service_1.SchoolService])
    ], ProfileEditComponent);
    return ProfileEditComponent;
}(edit_component_1.DRFEditComponent));
exports.ProfileEditComponent = ProfileEditComponent;
var ProfileNewComponent = (function (_super) {
    __extends(ProfileNewComponent, _super);
    function ProfileNewComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    ProfileNewComponent = __decorate([
        core_1.Component({
            selector: 'school-new',
            templateUrl: '/app/objectcomponents/form.component.html',
            providers: [school_service_1.SchoolService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, school_service_1.SchoolService])
    ], ProfileNewComponent);
    return ProfileNewComponent;
}(edit_component_1.DRFEditComponent));
exports.ProfileNewComponent = ProfileNewComponent;
//# sourceMappingURL=profile.component.js.map