import { Component, Input, OnInit } from '@angular/core';
import { IDRFService } from '../services/drf.service';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';

import {Password} from 'primeng/primeng';

import { ASOCAuthService, ASOCUserService } from '../services/asoc.service';

@Component({
    directives: [Password],
    templateUrl: 'login.component.html',
    moduleId: module.id,
})
export class LoginComponent {
    constructor(private auth: ASOCAuthService, private router: Router) { }
    username: string;
    pass: string;

    login() {
        this.auth.login(this.username, this.pass);
        this.router.navigateByUrl('/');
    }
}

@Component({
    template: "",
    moduleId: module.id,
})
export class LogoutComponent implements OnInit {
    constructor(private auth: ASOCAuthService, private router: Router) { }
    username: string;
    pass: string;

    ngOnInit() {
        this.auth.logout();
        this.router.navigateByUrl('/');
    }
}

@Component({
    directives: [Password],
    templateUrl: "register.component.html",
    moduleId: module.id,
    providers: [ASOCUserService]
})
export class RegisterComponent {
    constructor(private auth: ASOCUserService, private router: Router) { }
    username: string;
    pass: string;
    email: string;

    register() {
        this.auth.register(this.username, this.pass, this.email);
        this.router.navigateByUrl("/profile/create");
    }
}