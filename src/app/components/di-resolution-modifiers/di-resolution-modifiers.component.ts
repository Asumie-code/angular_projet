import { Component } from '@angular/core';
import { LeafService } from './leaf.service';
import { FlowerService } from './flower.service';

@Component({
  selector: 'di-resolution-modifiers',
  template: `
    <h1>DI resolution modifiers</h1>

    <p>Basic flower service: {{ flower.emoji }}</p>
    <p>Basic leaf service: {{ leaf.emoji }}</p>

    <di-optional></di-optional>

    <di-self></di-self>

    <di-self-no-data></di-self-no-data>

    <di-skipself></di-skipself>

    <di-host-parent></di-host-parent>
  `,
})
export class DiResolutionModifiers {
  name = 'Angular';
  constructor(public flower: FlowerService, public leaf: LeafService) {}
}
