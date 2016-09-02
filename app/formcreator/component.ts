import { Component, Input, Output, EventEmitter}    from '@angular/core';
import { ActivatedRoute }              from '@angular/router';

import {Draggable,Droppable} from 'primeng/primeng';

@Component({
  selector:    'preview',
  templateUrl: 'fieldpreview.html',
  moduleId: module.id
})
export class FieldPreview{
    @Input() item:any;

    item_choices(){
        return this.item.value.split("\n");
    }
    
}

@Component({
  selector:    'fieldedit',
  templateUrl: 'fieldedit.html',
  moduleId: module.id,
  directives: [FieldPreview] 
})
export class FieldDialog{
    @Input() item:any;

}


@Component({
  selector:    'container',
  templateUrl: 'container.html',
  moduleId: module.id,
  directives: [Droppable,FieldDialog, Draggable],
  providers:  []
})

export class FormContainerComponent  {
    @Input() fields = [];
    @Output() drop:EventEmitter<any> = new EventEmitter();

    op_drop(event, field){
        this.drop.emit({event:event});
    }

    save(event){
        console.log(this.fields);
    }
}

@Component({
  selector:    'selector',
  templateUrl: 'selector.html',
  moduleId: module.id,
  directives: [Draggable],
  providers:  []
})

export class FormDragAreaComponent  {
  availableFields = [
    {"name":"Title", "input_type":"title", "render":"<h2>[content]</h2>", "require_content":false},
    {"name":"TextField", "input_type":"text", "require_content":false},
    {"name":"TextArea", "input_type":"textarea", "require_content":false},
    {"name":"Select", "input_type":"select_one", "mode":["select","radio"], "require_content":true},
    {"name":"MultiSelect", "input_type":"select_many", "mode":["select", "checkbox"], "require_content":true},
    {"name":"File", "input_type":"file", "mode":["signle", "multiple"], "require_content":true},
  ]

  @Output() public dragstart:EventEmitter<any> = new EventEmitter();
  @Output() public dragend:EventEmitter<any> = new EventEmitter();

  op_dragStart(event, field){
      this.dragstart.emit({event:event, field:field});
  }

  op_dragEnd(event){
      this.dragend.emit({event:event});
  }
}


@Component({
      selector:    'formbuilder',
      templateUrl: 'builder.html',
      moduleId: module.id,
      directives: [FormContainerComponent, FormDragAreaComponent, Draggable,Droppable],
      providers:  []
})

export class FormBuildercomponent  {
    public draggeditem;
    
    do_dragstart($event) {
        if ("field" in $event)
            this.draggeditem = $event.field;
    }
    
    public fields = [];
    
    do_drop(event){
        if(this.draggeditem) {
            this.fields.push(this.draggeditem);
            this.draggeditem = null;
        }
        console.log(this.fields);
    }

    do_dragend(event) {
    }
}





@Component({
      selector:    'formbuilder',
      templateUrl: 'builder.html',
      moduleId: module.id,
      directives: [FormContainerComponent, FormDragAreaComponent, Draggable,Droppable],
      providers:  []
})

export class FormCompilercomponent  {
    public draggeditem;
    
    do_dragstart($event) {
        if ("field" in $event)
            this.draggeditem = $event.field;
    }
    
    public fields = [];
    
    do_drop(event){
        if(this.draggeditem) {
            this.fields.push(this.draggeditem);
            this.draggeditem = null;
        }
        console.log(this.fields);
    }

    do_dragend(event) {
    }
}



