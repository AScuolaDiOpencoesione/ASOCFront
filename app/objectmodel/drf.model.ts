import {Type} from '@angular/core';
import { Router, CanActivate } from  '@angular/router';

import {DRFListComponent} from '../objectcomponents/list.component';
import {DRFDetailComponent} from '../objectcomponents/detail.component';
import {DRFNewComponent} from '../objectcomponents/new.component';
import {DRFEditComponent} from '../objectcomponents/edit.component';
import {DRFServiceSetter, DRFServiceComponent} from '../objectcomponents/drf.component';
import {IDRFServiceBase, IDRFResourceServiceBase, DRFServiceBase, DRFResourceServiceBase, IDRFService, DRFService} from '../services/drf.service';

export interface DRFEntity {
    toKVPList();
    fromJson(json: any);
    toString(): string;
}

export abstract class DRFAbstractEntity implements DRFEntity {
    toKVPList() {
        let r = [];
        for (let x in this) {
            r.push({ "key": x, "value": this[x] })
        }
    }

    fromJson(json: any) {
        for (let x in json) {
            this[x] = json[x];
        }
    }

}

export interface IRouterGenerator {
    routes(): any;
}

export class DRFModelRouter implements IRouterGenerator {

    private _base_url: string;
    private _auth_guard: Type;

    private _listComponent: Type;
    private _detailComponent: Type;
    private _newComponent: Type;
    private _editComponent: Type;

    constructor(base_path: string, listComponent: Type, detailComponent: Type, newComponent: Type, editComponent: Type, auth_guard?:Type) {
        this._base_url = base_path;
        this._listComponent = listComponent;
        this._detailComponent = detailComponent;
        this._newComponent = newComponent;
        this._editComponent = editComponent;
        this._auth_guard = auth_guard;
    }

    routes() {
        let ret = {};
        ret["path"] = this._base_url;
        //ret["component"] = this._listComponent;
        if (this._auth_guard)
            ret["canActivate"] = [this._auth_guard];
        ret["children"] = [];
        ret["children"].push({
            "path": "",
            "component": this._listComponent,
            "canActivate": [this._auth_guard]
        })
        ret["children"].push({
            "path": "new",
            "component": this._newComponent,
            "canActivate": [this._auth_guard]
        })
        ret["children"].push({
            "path": ":id",
            "component": this._detailComponent,
            "canActivate": [this._auth_guard]
        })
        ret["children"].push({
            "path": ":id/edit",
            "component": this._editComponent,
            "canActivate": [this._auth_guard]
        })

        return [ret];
    }
}