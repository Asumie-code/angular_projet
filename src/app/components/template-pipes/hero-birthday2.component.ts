import { Component } from "@angular/core";


@Component({
    selector: 'app-hero-birthday2', 
    template: `
        <p>the hero's birthday is {{birthday | date:format }}</p>
        <button type="button" (click)="toggleFormat()">Toggle Format</button>
    `
})

export class HeroBirthday2Component {
    birthday = new Date(1988, 3, 15) 
    toggle  = true // start with true == shortDate

    get format() {return this.toggle ? 'shortDate': 'fullDate'}
    toggleFormat() {this.toggle = !this.toggle}
}