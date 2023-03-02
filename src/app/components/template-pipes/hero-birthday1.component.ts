import { Component } from "@angular/core";

@Component({
    selector: 'app-hero-birthday',  
    template: `
        <!-- to use the pipe declare the component in the app module -->
        <p>the hero's birthday is {{ birthday | date }}</p>
    `
})
export class HeroBirthdayComponent {
    birthday = new Date(1988, 3, 15) // april 15, 1988 -- month param is zero-based
}