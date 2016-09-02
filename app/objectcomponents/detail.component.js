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
var DRFDetailComponent = (function (_super) {
    __extends(DRFDetailComponent, _super);
    function DRFDetailComponent() {
        _super.apply(this, arguments);
        this.item = {};
    }
    DRFDetailComponent.prototype.prepare = function () {
        this.get(this.id);
    };
    DRFDetailComponent.prototype.get = function (id) {
        var _this = this;
        this._service.getOne(id).then(function (itm) { _this.item = itm; });
    };
    DRFDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            console.log(id);
            _this.get(id);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DRFDetailComponent.prototype, "id", void 0);
    return DRFDetailComponent;
}(drf_component_1.DRFServiceComponent));
exports.DRFDetailComponent = DRFDetailComponent;
//# sourceMappingURL=detail.component.js.map