import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { CountdownTimerComponent } from "./countdown-timer.component";


// local variable, #timer, version 

@Component({
    selector: 'app-countdown-parent-lv', 
    template: `
        <h3>Countdown to Liftoff (via local variable) </h3>
        <button type="button" (click)="timer.start()">Start</button>
        <button type="button" (click)="timer.stop()">Stop</button>
        <div class="seconds">{{timer.seconds}}</div>
        <app-countdown-timer #timer></app-countdown-timer>
    `
})
export class CountdownLocalVarParentComponent {}




// view child version 

@Component({
    selector: 'app-countdown-parent-vc', 
    template: `
        <h3>Countdown to Liftoff (via ViewChild) </h3>
        <button type="button" (click)="start()">Start</button>
        <button type="button" (click)="stop()">Stop</button>
        <div class="seconds">{{seconds()}}</div>
        <app-countdown-timer></app-countdown-timer>
    `
})
export class CountdownViewChildParentComponent implements AfterViewInit {
    @ViewChild(CountdownTimerComponent)
    private timerComponent!: CountdownTimerComponent

    seconds() { return 0}

    ngAfterViewInit(): void {
        // redfine 'seconds()' to get from the 'CountdownTimerComponent.seconds' ...
        // but wait a tick first to avoid one-time devMode
        // unidirectional-data-flow-violation error
        // this.seconds = () => this.timerComponent.seconds
        setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0)
    }

    start() { this.timerComponent.start() }
    stop() { this.timerComponent.stop() }
}