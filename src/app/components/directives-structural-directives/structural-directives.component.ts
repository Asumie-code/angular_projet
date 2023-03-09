import { Component } from "@angular/core";

import { Hero, heroes } from "./hero";


@Component({
    selector: 'directives-structural-directives', 
    templateUrl: './structural-directives.component.html', 
    styleUrls: ['./structural-directives.component.css']
})

export class StructuralDirective {
    heroes = heroes
    hero: Hero | null = this.heroes[0]
    showSad = true
    condition = false



    trackById(index: number, hero: Hero): number { return hero.id}
}