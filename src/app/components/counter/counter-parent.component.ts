import { Component }  from '@angular/core'
import { LoggerService } from 'src/app/services/logger.service'




@Component({
    selector: 'counter-parent', 
    template: `
        <h2>Counter spy</h2>

        <button type="button" (click)="updateCounter()">Update counter</button>
        <button type="button" (click)="reset()">Rest Counter</button>
        <app-counter [counter]="value"></app-counter>

        <div class="info">
            <h3>Spy Lifecycle Hook Log</h3>
            <div *ngFor="let msg of spyLog" class="log">{{msg}}</div>
        </div>
    `,
    providers: [ LoggerService ]
})
export class CounterParentComponent {
    value = 0
    spyLog: string[] = []

    private logger: LoggerService

    constructor(logger: LoggerService) {
        this.logger = logger
        this.spyLog = logger.logs
        this.reset()
    }


    updateCounter() {
        this.value += 1
        this.logger.tick() 
    }

    reset() {
        this.logger.log('rest')
        this.value = 0
        this.logger.tick()
    }

}
