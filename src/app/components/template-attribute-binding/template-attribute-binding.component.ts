import { Component } from '@angular/core';

@Component({
  selector: 'app-template-attribute-binding',
  templateUrl: './template-attribute-binding.component.html',
  styleUrls: ['./template-attribute-binding.component.css'],
})
export class TemplateAttributeBindingComponent {
  actionName = 'Create and set an attribute';
  isSpecial = true;
  canSave = true;
  classExpression = 'special clearance';
  styleExpression = 'border: solid red 3px';
  color = 'blue';
  border = '.5rem dashed black';
}
