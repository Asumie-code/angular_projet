import { Component } from '@angular/core';
import { DelayedSquenceService } from './delayed-sequence.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    sequence: number[] = []

    constructor(public delayedSequence: DelayedSquenceService) {}

    getSequence() {
      this.delayedSequence.getDelayedSquence().subscribe((value) => {
        this.sequence.push(value)
      })
    }
    
}
