"use strict";
var School = (function () {
    function School() {
    }
    School.prototype.toKVPList = function () {
        var ret = [];
        ret.push({ "key": "url", "value": this.url });
        ret.push({ "key": "name", "value": this.name });
        ret.push({ "key": "city", "value": this.city });
        ret.push({ "key": "address", "value": this.address });
        ret.push({ "key": "point", "value": this.point });
        ret.push({ "key": "mech", "value": this.mech });
        ret.push({ "key": "region", "value": this.region });
        ret.push({ "key": "province", "value": this.province });
        ret.push({ "key": "mngr_mail", "value": this.mngr_mail });
        ret.push({ "key": "school_type", "value": this.school_type });
        ret.push({ "key": "school_type_spec", "value": this.school_type_spec });
        return ret;
    };
    School.prototype.fromJson = function (json) {
        this.url = json.url;
        this.name = json.name;
        this.city = json.city;
        this.address = json.address;
        this.point = json.point;
        this.mech = json.mech;
        this.region = json.region;
        this.province = json.province;
        this.mngr_mail = json.mngr_mail;
        this.school_type = json.school_type;
        this.school_type_spec = json.school_type_spec;
    };
    School.prototype.toString = function () {
        return this.name;
    };
    return School;
}());
exports.School = School;
//# sourceMappingURL=school.js.map