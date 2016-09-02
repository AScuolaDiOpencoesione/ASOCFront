"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var angular2_jwt_1 = require('angular2-jwt');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var common_1 = require('@angular/common');
var school_service_1 = require("./services/school.service");
var asoc_service_1 = require("./services/asoc.service");
var auth_guard_1 = require('./auth.guard');
//enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    angular2_jwt_1.AUTH_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    school_service_1.SchoolService,
    asoc_service_1.ASOCAuthService,
    app_routes_1.appRouterProviders,
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
    auth_guard_1.AuthGuard,
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map