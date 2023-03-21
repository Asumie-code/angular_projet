import { Component, OnInit, Host, SkipSelf, Optional } from '@angular/core';
import { FlowerService } from '../flower-2.service';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'di-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // provide services
  providers: [{ provide: FlowerService, useValue: { emoji: '🌻' } }],
  viewProviders: [{ provide: AnimalService, useValue: { emoji: '🐶' } }],
})
export class DiChildComponent {
  // inject service
  constructor(public flower: FlowerService, public animal: AnimalService) {}

  // viewProviders ensures that only the view gets to see this
  // with the AnimalService in the viewProviders, the
  // InspectorComponent doesn't get to see it because the
  // inspector is in the content

  // constructor( public flower: FlowerService, @Optional() @Host()  public animal?: AnimalService) { }

  // Comment out the above constructor and alternately
  // uncomment the two following constructors to see the
  // effects of @Host() and @Host() + @SkipSelf().

  // constructor(
  //     @Host() public animal : AnimalService,
  //     @Host() @Optional() public flower ?: FlowerService) { }

  // constructor(
  //     @SkipSelf() @Host() public animal : AnimalService,
  //     @SkipSelf() @Host() @Optional() public flower ?: FlowerService) { }
}
