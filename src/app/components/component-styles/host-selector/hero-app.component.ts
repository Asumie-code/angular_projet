import { Component, HostBinding } from "@angular/core";
import { Hero } from "src/app/hero";


@Component({
    selector: 'app-styles',
    template: `
        <h1>Tour of Heroes</h1>
        <app-hero-main [hero]="hero"></app-hero-main>
    ` ,
    styles: [`h1 { font-weight: normal; }`]
})
export class HeroAppComponent {
    hero = new Hero(
        'Human Torch',
        ['Mister Fantastic', 'Invisible Woman', 'Thing']
    )

    @HostBinding('class') get themeClass() {
        return 'theme-light'
    }
}