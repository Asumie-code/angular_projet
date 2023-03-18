import { Component } from "@angular/core";
import { heroServiceProvider } from "./hero.service.provider";

@Component({
    selector: 'di-heroes', 
    template: `
        <h2>Heroes</h2>
        <di-hero-list></di-hero-list>
    `, 
    providers: [heroServiceProvider]
})
export class DiHeroesComponent {}