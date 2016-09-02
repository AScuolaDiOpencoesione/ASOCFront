"use strict";
var DRFServiceComponent = (function () {
    function DRFServiceComponent() {
    }
    DRFServiceComponent.prototype.setService = function (service) {
        this._service = service;
    };
    DRFServiceComponent.prototype.setRoute = function (route) {
        this._route = route;
    };
    return DRFServiceComponent;
}());
exports.DRFServiceComponent = DRFServiceComponent;
//# sourceMappingURL=drf.component.js.map