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
var teacherprofile_service_1 = require("../services/teacherprofile.service");
var TeacherProfileListItemComponent = (function (_super) {
    __extends(TeacherProfileListItemComponent, _super);
    function TeacherProfileListItemComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    TeacherProfileListItemComponent = __decorate([
        core_1.Component({
            selector: '[list-item]',
            templateUrl: 'school-list-item.component.html',
            moduleId: module.id,
            providers: [teacherprofile_service_1.TeacherProfileService]
        }), 
        __metadata('design:paramtypes', [teacherprofile_service_1.TeacherProfileService])
    ], TeacherProfileListItemComponent);
    return TeacherProfileListItemComponent;
}(list_component_1.DRFListItemComponent));
exports.TeacherProfileListItemComponent = TeacherProfileListItemComponent;
var TeacherProfileListComponent = (function (_super) {
    __extends(TeacherProfileListComponent, _super);
    function TeacherProfileListComponent(service) {
        _super.call(this);
        this.setService(service);
        this.prepare();
    }
    TeacherProfileListComponent = __decorate([
        core_1.Component({
            selector: 'school-list',
            templateUrl: 'list.component.html',
            moduleId: module.id,
            providers: [teacherprofile_service_1.TeacherProfileService],
            directives: [TeacherProfileListItemComponent]
        }), 
        __metadata('design:paramtypes', [teacherprofile_service_1.TeacherProfileService])
    ], TeacherProfileListComponent);
    return TeacherProfileListComponent;
}(list_component_1.DRFListComponent));
exports.TeacherProfileListComponent = TeacherProfileListComponent;
var TeacherProfileDetailComponent = (function (_super) {
    __extends(TeacherProfileDetailComponent, _super);
    function TeacherProfileDetailComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.setRoute(route);
        this.prepare();
    }
    TeacherProfileDetailComponent = __decorate([
        core_1.Component({
            selector: 'school',
            templateUrl: 'detail.component.html',
            moduleId: module.id,
            providers: [teacherprofile_service_1.TeacherProfileService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, teacherprofile_service_1.TeacherProfileService])
    ], TeacherProfileDetailComponent);
    return TeacherProfileDetailComponent;
}(detail_component_1.DRFDetailComponent));
exports.TeacherProfileDetailComponent = TeacherProfileDetailComponent;
var TeacherProfileEditComponent = (function (_super) {
    __extends(TeacherProfileEditComponent, _super);
    function TeacherProfileEditComponent(route, service) {
        _super.call(this);
        this.route = route;
        this.setService(service);
        this.prepare();
    }
    TeacherProfileEditComponent = __decorate([
        core_1.Component({
            selector: 'school-edit',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            providers: [teacherprofile_service_1.TeacherProfileService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, teacherprofile_service_1.TeacherProfileService])
    ], TeacherProfileEditComponent);
    return TeacherProfileEditComponent;
}(edit_component_1.DRFEditComponent));
exports.TeacherProfileEditComponent = TeacherProfileEditComponent;
var TeacherProfileNewComponent = (function (_super) {
    __extends(TeacherProfileNewComponent, _super);
    function TeacherProfileNewComponent(route, router, service) {
        _super.call(this);
        this.route = route;
        this.router = router;
        this.setService(service);
        this.prepare();
    }
    TeacherProfileNewComponent.prototype.postSave = function (item, errors) {
        this.router.navigateByUrl("/profile/create/teacher/thanks");
    };
    TeacherProfileNewComponent = __decorate([
        core_1.Component({
            selector: 'teacher-new',
            templateUrl: 'form.component.html',
            moduleId: module.id,
            providers: [teacherprofile_service_1.TeacherProfileService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, teacherprofile_service_1.TeacherProfileService])
    ], TeacherProfileNewComponent);
    return TeacherProfileNewComponent;
}(new_component_1.DRFNewComponent));
exports.TeacherProfileNewComponent = TeacherProfileNewComponent;
var TeacherProfileThanksComponent = (function () {
    function TeacherProfileThanksComponent() {
    }
    TeacherProfileThanksComponent = __decorate([
        core_1.Component({
            selector: 'teacher-new',
            template: '<p>Grazie! Il tuo profilo docente è stato creato. ora puoi procedere con la compilazione della candidatura per partecipare al percorso A Scuola di OpenCoesione 2016/2017.</p><p>Per informazioni sulla compilazione: <a href="mailto:asoc@opencoesione.gov.it">asoc@opencoesione.gov.it</a></p>',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], TeacherProfileThanksComponent);
    return TeacherProfileThanksComponent;
}());
exports.TeacherProfileThanksComponent = TeacherProfileThanksComponent;
//# sourceMappingURL=teacherprofile.component.js.map