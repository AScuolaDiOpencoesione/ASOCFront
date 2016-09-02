"use strict";
var DRFAbstractEntity = (function () {
    function DRFAbstractEntity() {
    }
    DRFAbstractEntity.prototype.toKVPList = function () {
        var r = [];
        for (var x in this) {
            r.push({ "key": x, "value": this[x] });
        }
    };
    DRFAbstractEntity.prototype.fromJson = function (json) {
        for (var x in json) {
            this[x] = json[x];
        }
    };
    return DRFAbstractEntity;
}());
exports.DRFAbstractEntity = DRFAbstractEntity;
var DRFModelRouter = (function () {
    function DRFModelRouter(base_path, listComponent, detailComponent, newComponent, editComponent, auth_guard) {
        this._base_url = base_path;
        this._listComponent = listComponent;
        this._detailComponent = detailComponent;
        this._newComponent = newComponent;
        this._editComponent = editComponent;
        this._auth_guard = auth_guard;
    }
    DRFModelRouter.prototype.routes = function () {
        var ret = {};
        ret["path"] = this._base_url;
        //ret["component"] = this._listComponent;
        if (this._auth_guard)
            ret["canActivate"] = [this._auth_guard];
        ret["children"] = [];
        ret["children"].push({
            "path": "",
            "component": this._listComponent,
            "canActivate": [this._auth_guard]
        });
        ret["children"].push({
            "path": "new",
            "component": this._newComponent,
            "canActivate": [this._auth_guard]
        });
        ret["children"].push({
            "path": ":id",
            "component": this._detailComponent,
            "canActivate": [this._auth_guard]
        });
        ret["children"].push({
            "path": ":id/edit",
            "component": this._editComponent,
            "canActivate": [this._auth_guard]
        });
        return [ret];
    };
    return DRFModelRouter;
}());
exports.DRFModelRouter = DRFModelRouter;
//# sourceMappingURL=drf.model.js.map