import { Component, Input } from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'directive-item-detail',
  templateUrl: './directive-item-detail.component.html',
})
export class DirectiveItemDetailComponent {

  @Input() item?: Item;

}
