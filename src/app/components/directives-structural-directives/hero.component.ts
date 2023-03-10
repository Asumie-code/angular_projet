import { Component } from "@angular/core";

import { LoadingState } from "./loading-state";
import { Hero, heroes } from "./hero";    

@Component({
    selector: 'struct-dir-hero', 
    template: `
        <button (click)="onLoadHero()">Load Hero</button>
        <p *appIfLoaded="heroLoadingState">{{heroLoadingState.data | json}}</p>
    `
})
export class StructDirHero {
    heroLoadingState: LoadingState<Hero> = {type: 'loading'}

    onLoadHero(): void {
        this.heroLoadingState = {type: 'loaded', data: heroes[0]}
    }
}