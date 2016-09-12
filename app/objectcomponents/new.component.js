/// <reference path="../../typings/globals/jquery/index.d.ts" />
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
        this.sections = {};
        this.pre_fields = {};
        this.selected_values = {};
        this.loaded_files = {};
        this.loaded_files_a = {};
        this.dependencies = {};
        this.dependencies_inv = {};
        this.dirty_vals = {};
        this.chains = {};
        this.done = new core_1.EventEmitter();
        this.server_errors = {};
        this.targetOptions = {};
    }
    DRFNewComponent.prototype.prepare = function (params) {
        if (params === void 0) { params = null; }
        this.getFields(params);
    };
    DRFNewComponent.prototype.postSave = function (item, error) { };
    DRFNewComponent.prototype.getFields = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        this._service.getOptions().then(function (v) {
            _this.name = v.name;
            _this.description = v.description;
            _this.sections = v.datasections;
            _this.activeSection = _this.startSection();
            _this.dependencies = v.conditions;
            for (var j in _this.dependencies) {
                var x = _this.dependencies[j];
                for (var y in x.toggles)
                    _this.dependencies_inv[x.toggles[y]] = j;
            }
            //console.log(this.dependencies, this.dependencies_inv);
            _this.chains = v.chains;
            _this.pre_fields = v.actions.POST;
            v = v.actions.POST;
            for (var x in v) {
                if (!v[x].read_only) {
                    var t = v[x];
                    t["name"] = x;
                    if (params != null)
                        if (params.hasOwnProperty(x))
                            t["value"] = params[x];
                    if (_this.sections != {}) {
                        for (var j_1 in _this.sections) {
                            if (_this.sections[j_1].fields.indexOf(x) >= 0) {
                                t["section"] = j_1;
                            }
                        }
                    }
                    if (Object.keys(t).indexOf("choices")) {
                        for (var l in t.choices) {
                            var c = t.choices[l];
                            var a = c.additionals;
                            var str = "";
                            for (var w in Object.keys(a)) {
                                var ww = Object.keys(a)[w];
                                str += ww + "::" + a[ww] + " ";
                            }
                            c.reldata = str;
                        }
                    }
                    _this.fields.push(t);
                }
            }
        });
    };
    DRFNewComponent.prototype.startSection = function () {
        if (this.sections != {})
            return Object.keys(this.sections)[0];
        return "";
    };
    DRFNewComponent.prototype.hasSections = function () {
        return this.sections != {};
    };
    DRFNewComponent.prototype.errormsg = function (name) {
        return Object.keys(this.server_errors).indexOf(name) >= 0;
    };
    DRFNewComponent.prototype.sectionKeys = function () {
        return Object.keys(this.sections);
    };
    DRFNewComponent.prototype.sectionIndex = function (sec) {
        return Object.keys(this.sections).indexOf(sec);
    };
    DRFNewComponent.prototype.sectionLast = function (sec) {
        var a = Object.keys(this.sections);
        return (a.indexOf(sec) + 1) == a.length;
    };
    DRFNewComponent.prototype.isVisible = function (sec) {
        return this.activeSection == sec;
    };
    DRFNewComponent.prototype.isVisibleStack = function (sec) {
        var x = this.sectionIndex(this.activeSection);
        var t = this.sectionIndex(sec);
        return t <= x;
    };
    DRFNewComponent.prototype.isItemVisible = function (item) {
        var sv = this.isVisible(item.section);
        var pv = this.hiddenForConditions(item.name);
        //console.log(pv);
        return sv && !pv;
    };
    DRFNewComponent.prototype.stepsCount = function () {
        return Object.keys(this.sections).length;
    };
    DRFNewComponent.prototype.prevSection = function (sec) {
        var n = this.sectionIndex(sec);
        var x = Object.keys(this.sections)[n - 1];
        return x;
    };
    DRFNewComponent.prototype.nextSection = function (sec) {
        var n = this.sectionIndex(sec);
        var x = Object.keys(this.sections)[n + 1];
        return x;
    };
    DRFNewComponent.prototype.save = function (item) {
        this._service.addOne(item, this.handle_error);
    };
    DRFNewComponent.prototype.getSections = function () {
        var ret = [];
        for (var s in this.sections) {
            var ss = this.sections[s];
            ss["sn"] = s;
            ret.push(ss);
        }
        return ret;
    };
    DRFNewComponent.prototype.handle_error = function (err) {
        var e = JSON.parse(err._body);
        var s = Object.keys(this.server_errors);
        for (var i in s)
            delete this.server_errors[i];
        for (var i in e)
            this.server_errors[i] = e[i];
    };
    DRFNewComponent.prototype.submitData = function (event) {
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
        var a_s = s;
        this.save(a_s);
        this.postSave(a_s, this.server_errors);
    };
    DRFNewComponent.prototype.setSelected = function (selectedelement, name) {
        this.selected_values[name] = [];
        if (selectedelement.target.checked)
            this.selected_values[name].push(selectedelement.target.value);
    };
    DRFNewComponent.prototype.hiddenForConditions = function (name) {
        var dv = Object.keys(this.dirty_vals);
        var hk = Object.keys(this.dependencies_inv);
        var to_check = "";
        //console.log(name, dv, hk);
        if (hk.indexOf(name) >= 0) {
            if (this.dependencies[this.dependencies_inv[name]].for_value)
                to_check = this.dependencies[this.dependencies_inv[name]].for_value;
            if (dv.indexOf(this.dependencies_inv[name]) >= 0) {
                if (to_check != "") {
                    if (this.dirty_vals[this.dependencies_inv[name]].indexOf(to_check) >= 0)
                        return false;
                }
                else {
                    if (this.dirty_vals[this.dependencies_inv[name]].indexOf(to_check) < 0)
                        return false;
                }
            }
            return true;
        }
        return false;
    };
    DRFNewComponent.prototype.watchDependents = function (event, name) {
        var tt = event.target.type;
        var tv = event.target.value;
        var ml = 1;
        if (tt == "checkbox") {
            tv = event.target.checked ? event.target.value : "";
            ml = -1;
        }
        if (Object.keys(this.dirty_vals).indexOf(name) < 0)
            this.dirty_vals[name] = [];
        if (ml > 0)
            this.dirty_vals[name] = [tv];
        else if (tv == "")
            this.dirty_vals[name] = this.removeItemFromArray(this.dirty_vals[name], event.target.value);
        else
            this.dirty_vals[name].push(tv);
    };
    DRFNewComponent.prototype.removeItemFromArray = function (array, item) {
        var tmp = [];
        for (var index in array) {
            if (array[index] !== item) {
                tmp.push(item);
            }
        }
        return tmp;
    };
    DRFNewComponent.prototype.loadFile = function (event, name) {
        var _this = this;
        this.loaded_files[name] = event.target.files[0];
        var fr = new FileReader();
        fr.onloadend = (function (e) {
            _this.loaded_files_a[name] = e.target.result;
            // e.target.result should contain the text
        });
        fr.readAsDataURL(this.loaded_files[name]);
    };
    DRFNewComponent.prototype.setActive = function (sec) {
        window.document.getElementById("scrollable").scrollTop = 0;
        this.activeSection = sec;
    };
    DRFNewComponent.prototype.ngAfterViewChecked = function () {
        $('#sectionator').appendTo("sidebar");
    };
    DRFNewComponent.prototype.ngOnDestroy = function () {
        $('#sectionator').remove();
    };
    DRFNewComponent.prototype.isOptionVisible = function (item, value, additionals) {
        if (item === void 0) { item = ""; }
        var x = this.chains[item];
        if (x) {
            //console.log(item, value, additionals);
            return additionals[x.filter.item] == this.dirty_vals[x.filter.field];
        }
        else
            return true;
    };
    return DRFNewComponent;
}(drf_component_1.DRFServiceComponent));
exports.DRFNewComponent = DRFNewComponent;
//# sourceMappingURL=new.component.js.map