import { animate, state, style, transition, trigger, AnimationEvent, keyframes } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'], 
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px', 
        opacity: 1, 
        backgroundColor: 'yellow'
      })), 
      state('closed', style({
        height: '100px', 
        opacity: 0.8, 
        backgroundColor: 'blue'
      })),
      
      transition('open => closed', [ animate('1s')]),
      transition('closed => open', [ animate('0.5s')]),
      // transition(' * => closed', [ animate('1s')]),
      // transition(' * => open', [ animate('0.5s')]),
      // transition(' open <=> closed', [ animate('0.5s')]),
      // transition('* => open', [ animate('1s', style({ opactiy: '*' }))]), 
      // transition('* => *', [ animate('1s')]), 
      transition('* => *', [
        animate('1s', keyframes([
          style({ opacity: 0.1, offset: 0.1 }),
          style({ opacity: 0.6, offset: 0.2 }),
          style({ opacity: 1,   offset: 0.5 }),
          style({ opacity: 0.2, offset: 0.7 })
        ]))
      ])
    ])
  ]
})
export class OpenCloseComponent {

  @Input() logging = false
  isOpen = true 

  toggle() {
    this.isOpen = !this.isOpen
  }

  onAnimationEvent(event: AnimationEvent) {
    if (!this.logging) {
      return;
    }
    // openClose is trigger name in this example
    console.warn(`Animation Trigger: ${event.triggerName}`);

    // phaseName is "start" or "done"
    console.warn(`Phase: ${event.phaseName}`);

    // in our example, totalTime is 1000 (number of milliseconds in a second)
    console.warn(`Total time: ${event.totalTime}`);

    // in our example, fromState is either "open" or "closed"
    console.warn(`From: ${event.fromState}`);

    // in our example, toState either "open" or "closed"
    console.warn(`To: ${event.toState}`);

    // the HTML element itself, the button in this case
    console.warn(`Element: ${event.element}`);
  }
}
