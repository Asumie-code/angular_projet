import { Component, Input } from "@angular/core"; 

import { Hero } from "src/app/hero";


@Component({
    selector: 'app-hero-child', 
    template: `
        <h3>{{hero.name}} say:</h3>
        <p>I, {{hero.name}}, am at your service, {{masterName}} </p>
    `
})
export class HeroChildComponent {
    @Input() hero!: Hero
    @Input('master') masterName = ''
}