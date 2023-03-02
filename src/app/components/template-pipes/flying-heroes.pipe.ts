import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

import { Hero } from "./heroes";

@Pipe({name: 'flyingHeroes'})
export class FlyingHeroesPipe implements PipeTransform {
    transform(allHeroes: Hero[]) {
        return allHeroes.filter(hero => hero.canFly)
    }
}



// indentical except for the pure flag 

@Pipe({
    name: 'flyingHeroesImpure', 
    pure: false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe { }