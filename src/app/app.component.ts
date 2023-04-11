import { Component } from '@angular/core';
import { DelayedSquenceService } from './delayed-sequence.service';
import { OperatorsService } from './observables-operators.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    sequence: number[] = []
    squaredNums: number[] = []
    constructor(public delayedSequence: DelayedSquenceService, public squareNums: OperatorsService) {}

    getSequence() {
      this.delayedSequence.getDelayedSquence().subscribe((value) => {
        this.sequence.push(value)
      })
    }

    getSquaredNums() {
      this.squareNums.squaredOddNums().subscribe({
        next: (data) =>  { this.squaredNums.push(data as number) }, 
        error: () =>  {console.log('something went wrong')} // will not run in case of error because the operator catched the error
      })
      

    }
    
}
