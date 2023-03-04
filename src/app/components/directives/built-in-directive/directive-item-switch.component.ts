import { Component, Input } from "@angular/core";
import { Item } from "./item";



@Component({
    selector: 'directive-stout-item', 
    template: "I'm a little {{item.name}}, short and stout!"
})

export class StoutItemComponent {
    @Input() item!: Item
}

@Component({
    selector: 'directive-best-item',
    template: 'this is the brightest {{item.name}} in town'
})

export class BestItemComponent {
    @Input() item!: Item
}

@Component({
    selector: 'directive-device-item',
    template: 'which is the slimmest {{item.name}}?'
})

export class DeviceItemComponent {
    @Input() item!: Item
}

@Component({
    selector: 'directive-lost-item',
    template: 'Has anyone seen my  {{item.name}}?'
})

export class LostItemComponent {
    @Input() item!: Item
}

@Component({
    selector: 'directive-unknown-item',
    template: '{{message}}'
  })
  export class UnknownItemComponent {
    @Input() item!: Item;
    get message() {
      return this.item && this.item.name ?
        `${this.item.name} is strange and mysterious.` :
        'A mystery wrapped in a fishbowl.';
    }
  }


export const ItemSwitchComponents  = [
    StoutItemComponent, 
    BestItemComponent, 
    DeviceItemComponent,
    LostItemComponent, 
    UnknownItemComponent 

] 