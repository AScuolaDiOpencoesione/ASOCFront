import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {enableProdMode} from '@angular/core';

import {AuthHttp, AuthConfig, AUTH_PROVIDERS} from 'angular2-jwt';
import { AppComponent }         from './app.component';

import { appRouterProviders } from './app.routes';

import { LocationStrategy,
         HashLocationStrategy } from '@angular/common';

import { SchoolService } from "./services/school.service";

import { ASOCAuthService } from "./services/asoc.service";
import { AuthGuard } from './auth.guard';

//enableProdMode();
bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  AUTH_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  SchoolService,
  ASOCAuthService,
  appRouterProviders,
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  AuthGuard,
])
.catch((err: any) => console.error(err));