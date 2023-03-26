import { Component } from "@angular/core";
import { Observable } from "rxjs";

import { Hero, HeroTaxReturn } from "./hero";
import { DiEiHeroesService } from "./heroes.service";



@Component({
    selector: 'di-heroes-list', 
    template: `
        <div>
            <h3>Hero Tax Returns</h3>
            <ul>
                <li *ngFor="let hero of heroes | async">
                        <button (click)="showTaxReturn(hero)">{{hero.name}}</button>
                </li>
            </ul>
            <di-hero-tax-return
                *ngFor="let selected of selectedTaxReturns; let i = index"
                [taxReturn]="selected"
                (close)="closeTaxReturn(i)"
            ></di-hero-tax-return>
        </div>
    `,
    styles: [`
    li button {
      font-size: inherit;
      margin: 0.3rem;
      padding: 0.5rem;
    }
  `]
})
export class DiHeroesListComponent {
    heroes: Observable<Hero[]> 
    selectedTaxReturns: HeroTaxReturn[] = []

    constructor(private heroesService: DiEiHeroesService) {
        this.heroes = heroesService.getHeroes()
    }

    showTaxReturn(hero: Hero) {
        this.heroesService.getTaxReturn(hero)
        .subscribe(htr => {
                // show if not currently shown 
                if (!this.selectedTaxReturns.find(tr => tr.id === htr.id)) {
                    this.selectedTaxReturns.push(htr)
                }
            })
    }

    closeTaxReturn(ix: number) {
        this.selectedTaxReturns.splice(ix, 1)
    }



}