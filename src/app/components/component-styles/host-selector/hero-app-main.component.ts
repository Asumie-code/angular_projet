import { Component, Input } from "@angular/core";
import { Hero } from "src/app/hero";


@Component({
    selector: 'app-hero-main', 
    template: `
        <app-quest-summary [class.active]="hero.active"></app-quest-summary>
        <app-hero-details [hero]="hero" [class.active]="hero.active">
            <app-hero-controls [hero]="hero"></app-hero-controls>
        </app-hero-details>
        <!-- <app-main></app-main> -->
    `
})
export class HeroAppMainComponent {
    @Input() hero!: Hero
}