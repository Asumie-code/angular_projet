import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Item } from "../item";



@Component({
    selector: 'template-app-item-detail', 
    templateUrl: './item-detail.component.html', 
    styleUrls: ['./item-detail.component.css']
})

export class TemplateItemDetailComponent {

    @Input() item!: Item;
    itemImageUrl = 'assets/teapot.svg';
    lineThrough = '';
    displayNone = '';
    @Input() prefix = '';
  
    // This component makes a request but it can't actually delete a hero.
    @Output() deleteRequest = new EventEmitter<Item>();
  
    delete() {
      this.deleteRequest.emit(this.item);
      this.displayNone = this.displayNone ? '' : 'none';
      this.lineThrough = this.lineThrough ? '' : 'line-through';
    }
}