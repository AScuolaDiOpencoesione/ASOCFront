"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var drf_component_1 = require('./drf.component');
var DRFNewComponent = (function (_super) {
    __extends(DRFNewComponent, _super);
    function DRFNewComponent() {
        _super.apply(this, arguments);
        this.fields = [];
        this.pre_fields = {};
        this.selected_values = {};
        this.loaded_files = {};
        this.loaded_files_a = {};
        this.done = new core_1.EventEmitter();
    }
    DRFNewComponent.prototype.prepare = function (params) {
        if (params === void 0) { params = null; }
        this.getFields(params);
    };
    DRFNewComponent.prototype.postSave = function (item) { };
    DRFNewComponent.prototype.getFields = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        this._service.getOptions().then(function (v) {
            _this.pre_fields = v.actions.POST;
            v = v.actions.POST;
            for (var x in v) {
                if (!v[x].read_only) {
                    var t = v[x];
                    t["name"] = x;
                    if (params != null)
                        if (params.hasOwnProperty(x))
                            t["value"] = params[x];
                    _this.fields.push(t);
                }
            }
        });
    };
    DRFNewComponent.prototype.save = function (item) {
        this._service.addOne(item);
    };
    DRFNewComponent.prototype.submit = function (event) {
        console.log(this.pre_fields);
        var s = {};
        var count = 0;
        for (var i in event.target.form) {
            var f = event.target.form[i];
            for (var x in this.fields) {
                if (f.name == this.fields[x]["name"]) {
                    count++;
                    switch (this.pre_fields[f.name].type) {
                        case "boolean":
                            s[f.name] = f.checked;
                            break;
                        case "multiple choice":
                            s[f.name] = this.selected_values[f.name];
                            break;
                        default:
                            s[f.name] = f.value;
                    }
                }
            }
            if (count == this.fields.length)
                break;
        }
        console.log(s);
        var a_s = s;
        console.log(a_s);
        this.save(a_s);
        this.postSave(a_s);
    };
    DRFNewComponent.prototype.setSelected = function (selectedelement, name) {
        this.selected_values[name] = [];
        for (var j in selectedelement.target) {
            if (selectedelement.target[j].selected)
                this.selected_values[name].push(selectedelement.target[j].value);
        }
    };
    DRFNewComponent.prototype.loadFile = function (event, name) {
        var _this = this;
        this.loaded_files[name] = event.target.files[0];
        var fr = new FileReader();
        fr.onloadend = (function (e) {
            console.log(e.target);
            _this.loaded_files_a[name] = e.target.result;
            // e.target.result should contain the text
        });
        fr.readAsDataURL(this.loaded_files[name]);
    };
    return DRFNewComponent;
}(drf_component_1.DRFServiceComponent));
exports.DRFNewComponent = DRFNewComponent;
//# sourceMappingURL=new.component.js.map