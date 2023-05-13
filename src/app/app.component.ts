import { Component } from '@angular/core';
import { slideInAnimation } from './animations';
import { ChildrenOutletContexts } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'some title'
  constructor(private contexts: ChildrenOutletContexts) {}

  getAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation']
  }
}
