import { Component, Input, OnInit } from '@angular/core';
import { IDRFService } from '../services/drf.service';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

import {Password} from 'primeng/primeng';

import { ASOCAuthService, ASOCUserService } from '../services/asoc.service';

@Component({
    selector: 'asoc-login',
    directives: [Password],
    templateUrl: 'login.component.html',
    moduleId: module.id,
    providers: [ASOCUserService]
})
export class LoginComponent {
    constructor(private auth: ASOCAuthService, private router: Router, private usr: ASOCUserService) { }
    username: string;
    pass: string;

    login() {
        this.auth.login(this.username, this.pass, this.errormsg);
        if (!this.usr.hasProfile())
            this.router.navigateByUrl('/profile/create/teacher');       
        else  
            this.router.navigateByUrl('/');
    }

    errormsg(msg:string){
        alert("Nome utente e/o Password sbagliati.");
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
    selector: 'asoc-register',
    directives: [Password],
    templateUrl: "register.component.html",
    moduleId: module.id,
    providers: [ASOCUserService]
})
export class RegisterComponent {
    constructor(private auth: ASOCUserService, private router: Router, private auths:ASOCAuthService) { }
    username: string;
    pass: string;
    email: string;

    register() {
        this.auth.register(this.username, this.pass, this.email);
        alert("Grazie! Abbiamo inviato al tuo indirizzo e-mail il link per completare la registrazione alla piattaforma ASOC.\n\nIl team ASOC");
        this.router.navigateByUrl("/");
    }
}

@Component({
    directives: [LoginComponent, RegisterComponent],
    template: "<div class='row'><div class='col-md-6'><asoc-login></asoc-login></div><div class='col-md-6'><asoc-register></asoc-register></div></div>",
    moduleId: module.id
})
export class LogRegComponent {}

@Component({
    template: "<div><img src='http://www.ascuoladiopencoesione.it/platform/asoc.png'></div><h1>Benvenuto/a in ASOC!</h1><h2>Ora puoi usufruire delle funzioni della piattaforma effettuando il <a href='#/login'>Login</a></h2>",
    moduleId: module.id,
    providers: [ASOCUserService]
})
export class ActivationComponent implements OnInit {
    constructor(private auth: ASOCUserService, private router: Router, private route: ActivatedRoute) { }
    uid: string;
    token: string;

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.uid = params["uid"];
            this.token = params["token"];
            this.auth.activate(this.uid, this.token);
        })
    }
}
