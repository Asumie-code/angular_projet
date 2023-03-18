import { Component } from '@angular/core';

/**
 * A version of `HeroesComponent` that does not provide the `HeroService` (and thus relies on its
 * `Injectable`-declared provider) in order to function.
 *
 * TSP stands for Tree-Shakeable Provider.
 */
@Component({
  selector: 'di-heroes-tsp',
  template: `
    <h2>Heroes</h2>
    <di-hero-list></di-hero-list>
  `
})
export class DiHeroesTspComponent { }
