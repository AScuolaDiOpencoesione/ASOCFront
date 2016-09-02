import { Component, Input, EventEmitter } from '@angular/core';
import { IDRFService } from '../services/drf.service';
import {DRFServiceSetter, DRFServiceComponent} from './drf.component';

export class DRFNewComponent<A,T extends IDRFService<A>> extends DRFServiceComponent<T>{
  public item:A;
  public fields:Object[] = [];

  private pre_fields:any = {};
  private selected_values:any = {};
  private loaded_files:any = {};
  private loaded_files_a:any = {};
  
  public done:EventEmitter<A> = new EventEmitter<A>();

  prepare(params:any=null){  
    this.getFields(params);
  }

  postSave(item:A){ }

  protected getFields(params:any={}){
    this._service.getOptions().then(v => {
      this.pre_fields = v.actions.POST;
      v = v.actions.POST;
      for (let x in v){
        if(!v[x].read_only){
          var t = v[x];
          t["name"] = x;
          if (params != null)
            if(params.hasOwnProperty(x)) 
              t["value"] = params[x]; 
          
          this.fields.push(t);
        }
      }
    });
  }

  save(item:A){
      this._service.addOne(item);
  }

  submit(event){
    console.log(this.pre_fields);
    var s = {};
    var count = 0;
    for (var i in event.target.form){
      var f = event.target.form[i];
      for (var x in this.fields){
        if (f.name == this.fields[x]["name"]){
          count++;
          switch (this.pre_fields[f.name].type){
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
    console.log(s);
    var a_s = <A>s;
    console.log(a_s);
    this.save(a_s);

    this.postSave(a_s);
  }

  setSelected(selectedelement, name){
    this.selected_values[name] = [];
    for (let j in selectedelement.target){
      if (selectedelement.target[j].selected)
        this.selected_values[name].push(selectedelement.target[j].value);
    }
  }

  loadFile(event, name){
    this.loaded_files[name] = event.target.files[0];
    let fr = new FileReader();
    fr.onloadend = (e => {
      console.log(e.target);
      this.loaded_files_a[name] = e.target.result;
      // e.target.result should contain the text
    });
    fr.readAsDataURL(this.loaded_files[name]);
  }
}