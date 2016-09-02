 import {DRFEntity} from "./drf.model";
 
 export class School implements DRFEntity{
    url: string;
    name: string;
    city: string;
    address: string;
    point: string;
    mech: string;
    region: string;
    province:string;
    school_type:string;
    mngr_mail:string;
    school_type_spec:string;
    
    toKVPList(){
        let ret = [];
        ret.push({"key":"url","value":this.url});
        ret.push({"key":"name","value":this.name});
        ret.push({"key":"city","value":this.city});
        ret.push({"key":"address","value":this.address});
        ret.push({"key":"point","value":this.point});
        ret.push({"key":"mech","value":this.mech});
        ret.push({"key":"region","value":this.region});
        ret.push({"key":"province","value":this.province});
        ret.push({"key":"mngr_mail","value":this.mngr_mail});
        ret.push({"key":"school_type","value":this.school_type});
        ret.push({"key":"school_type_spec","value":this.school_type_spec});
        return ret;
    }
    fromJson(json:any){
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
    }

    toString():string{
        return this.name;
    }
}