import { Component } from "@angular/core";

import { HeroService } from "./hero.service";
import { LoggerService } from "./logger.service";


// HeroBiosComponent 

@Component({
    selector: 'app-hero-bios', 
    template: `
        <app-hero-bio [heroId]="1"></app-hero-bio>
        <app-hero-bio [heroId]="2"></app-hero-bio>
        <app-hero-bio [heroId]="3"></app-hero-bio>
    `,
    providers: [ HeroService ]
})
export class HeroBiosComponent {
    constructor(logger: LoggerService) {
        logger.logInfo('creating HeroBiosComponent')
    }
}