import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-open-close-toggle',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'], 
  animations: [
    trigger('childAnimation', [
      state('open', style({
        width: '250px', 
        opacity: 1, 
        backgroundColor: 'yellow'
      })), 
      state('closed', style({
        width: '100px', 
        opacity: 0.8, 
        backgroundColor: 'blue'
      })), 
      transition('* => *', [
        animate('1s')
      ])
    ])
  ]
})
export class OpenCloseToggleComponent {
  isDisabled = false 
  isOpen = false 

  toggleAnimations() {
    this.isDisabled = !this.isDisabled
  }

  toggle() {
    this.isOpen = !this.isOpen
  }
}
