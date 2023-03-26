import { Injectable } from "@angular/core";

import { Observable, Observer } from "rxjs";


import { Hero, HeroTaxReturn } from "./hero";


@Injectable({
    providedIn: 'root'
})
export class DiEiHeroesService {
    heroes: Hero[] = [
        { id: 1, name: 'RubberMan', tid: '082-27-5678'},
        { id: 2, name: 'Tornado',   tid: '099-42-4321'}
    ]

    heroTaxRerturns: HeroTaxReturn[] = [
        new HeroTaxReturn(10, this.heroes[0], 35000),
        new HeroTaxReturn(20, this.heroes[1], 1250000)
    ]


    getHeroes(): Observable<Hero[]>  {
        return new Observable<Hero[]>((observer: Observer<Hero[]>) => {
            observer.next(this.heroes)
            observer.complete()
        })
    }



    getTaxReturn(hero: Hero): Observable<HeroTaxReturn> {
        return new Observable<HeroTaxReturn>( (observer: Observer<HeroTaxReturn>) => {
            const htr = this.heroTaxRerturns.find(t => t.hero.id === hero.id)
            observer.next(htr || new HeroTaxReturn(0, hero))
            observer.complete()
        })
    }


    saveTaxReturn(heroTaxRetrun: HeroTaxReturn): Observable<HeroTaxReturn> {
        return new Observable<HeroTaxReturn>( (observer: Observer<HeroTaxReturn>) => {
            const htr = this.heroTaxRerturns.find(t => t.id === heroTaxRetrun.id)
            if (htr) {
                heroTaxRetrun = Object.assign(htr, heroTaxRetrun) // demo: mutate
            } else {
                this.heroTaxRerturns.push(heroTaxRetrun)
            }
            observer.next(heroTaxRetrun)
            observer.complete()
        })
    }

}