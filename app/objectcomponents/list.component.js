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
var drf_component_1 = require('./drf.component');
var DRFListComponent = (function (_super) {
    __extends(DRFListComponent, _super);
    function DRFListComponent() {
        _super.apply(this, arguments);
    }
    DRFListComponent.prototype.prepare = function () {
        this.items = this._service.getAll({});
    };
    return DRFListComponent;
}(drf_component_1.DRFServiceComponent));
exports.DRFListComponent = DRFListComponent;
var DRFListItemComponent = (function (_super) {
    __extends(DRFListItemComponent, _super);
    function DRFListItemComponent() {
        _super.apply(this, arguments);
    }
    DRFListItemComponent.prototype.prepare = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DRFListItemComponent.prototype, "item", void 0);
    return DRFListItemComponent;
}(drf_component_1.DRFServiceComponent));
exports.DRFListItemComponent = DRFListItemComponent;
//# sourceMappingURL=list.component.js.map