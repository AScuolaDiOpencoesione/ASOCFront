"use strict";
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
var primeng_1 = require('primeng/primeng');
var FieldPreview = (function () {
    function FieldPreview() {
    }
    FieldPreview.prototype.item_choices = function () {
        return this.item.value.split("\n");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FieldPreview.prototype, "item", void 0);
    FieldPreview = __decorate([
        core_1.Component({
            selector: 'preview',
            templateUrl: 'fieldpreview.html',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], FieldPreview);
    return FieldPreview;
}());
exports.FieldPreview = FieldPreview;
var FieldDialog = (function () {
    function FieldDialog() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FieldDialog.prototype, "item", void 0);
    FieldDialog = __decorate([
        core_1.Component({
            selector: 'fieldedit',
            templateUrl: 'fieldedit.html',
            moduleId: module.id,
            directives: [FieldPreview]
        }), 
        __metadata('design:paramtypes', [])
    ], FieldDialog);
    return FieldDialog;
}());
exports.FieldDialog = FieldDialog;
var FormContainerComponent = (function () {
    function FormContainerComponent() {
        this.fields = [];
        this.drop = new core_1.EventEmitter();
    }
    FormContainerComponent.prototype.op_drop = function (event, field) {
        this.drop.emit({ event: event });
    };
    FormContainerComponent.prototype.save = function (event) {
        console.log(this.fields);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FormContainerComponent.prototype, "fields", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FormContainerComponent.prototype, "drop", void 0);
    FormContainerComponent = __decorate([
        core_1.Component({
            selector: 'container',
            templateUrl: 'container.html',
            moduleId: module.id,
            directives: [primeng_1.Droppable, FieldDialog, primeng_1.Draggable],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], FormContainerComponent);
    return FormContainerComponent;
}());
exports.FormContainerComponent = FormContainerComponent;
var FormDragAreaComponent = (function () {
    function FormDragAreaComponent() {
        this.availableFields = [
            { "name": "Title", "input_type": "title", "render": "<h2>[content]</h2>", "require_content": false },
            { "name": "TextField", "input_type": "text", "require_content": false },
            { "name": "TextArea", "input_type": "textarea", "require_content": false },
            { "name": "Select", "input_type": "select_one", "mode": ["select", "radio"], "require_content": true },
            { "name": "MultiSelect", "input_type": "select_many", "mode": ["select", "checkbox"], "require_content": true },
            { "name": "File", "input_type": "file", "mode": ["signle", "multiple"], "require_content": true },
        ];
        this.dragstart = new core_1.EventEmitter();
        this.dragend = new core_1.EventEmitter();
    }
    FormDragAreaComponent.prototype.op_dragStart = function (event, field) {
        this.dragstart.emit({ event: event, field: field });
    };
    FormDragAreaComponent.prototype.op_dragEnd = function (event) {
        this.dragend.emit({ event: event });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FormDragAreaComponent.prototype, "dragstart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FormDragAreaComponent.prototype, "dragend", void 0);
    FormDragAreaComponent = __decorate([
        core_1.Component({
            selector: 'selector',
            templateUrl: 'selector.html',
            moduleId: module.id,
            directives: [primeng_1.Draggable],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], FormDragAreaComponent);
    return FormDragAreaComponent;
}());
exports.FormDragAreaComponent = FormDragAreaComponent;
var FormBuildercomponent = (function () {
    function FormBuildercomponent() {
        this.fields = [];
    }
    FormBuildercomponent.prototype.do_dragstart = function ($event) {
        if ("field" in $event)
            this.draggeditem = $event.field;
    };
    FormBuildercomponent.prototype.do_drop = function (event) {
        if (this.draggeditem) {
            this.fields.push(this.draggeditem);
            this.draggeditem = null;
        }
        console.log(this.fields);
    };
    FormBuildercomponent.prototype.do_dragend = function (event) {
    };
    FormBuildercomponent = __decorate([
        core_1.Component({
            selector: 'formbuilder',
            templateUrl: 'builder.html',
            moduleId: module.id,
            directives: [FormContainerComponent, FormDragAreaComponent, primeng_1.Draggable, primeng_1.Droppable],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], FormBuildercomponent);
    return FormBuildercomponent;
}());
exports.FormBuildercomponent = FormBuildercomponent;
var FormCompilercomponent = (function () {
    function FormCompilercomponent() {
        this.fields = [];
    }
    FormCompilercomponent.prototype.do_dragstart = function ($event) {
        if ("field" in $event)
            this.draggeditem = $event.field;
    };
    FormCompilercomponent.prototype.do_drop = function (event) {
        if (this.draggeditem) {
            this.fields.push(this.draggeditem);
            this.draggeditem = null;
        }
        console.log(this.fields);
    };
    FormCompilercomponent.prototype.do_dragend = function (event) {
    };
    FormCompilercomponent = __decorate([
        core_1.Component({
            selector: 'formbuilder',
            templateUrl: 'builder.html',
            moduleId: module.id,
            directives: [FormContainerComponent, FormDragAreaComponent, primeng_1.Draggable, primeng_1.Droppable],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], FormCompilercomponent);
    return FormCompilercomponent;
}());
exports.FormCompilercomponent = FormCompilercomponent;
//# sourceMappingURL=component.js.map