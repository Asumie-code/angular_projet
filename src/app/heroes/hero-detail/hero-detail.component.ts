import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HeroService } from 'src/app/hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{

  hero$!: Observable<Hero>

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: HeroService
  ) {}


  ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>  this.service.getHero(params.get('id')!))
    )
  }

  gotoHeroes(hero: Hero) {
        const heroId = hero? hero.id : null // use this to select the hero that was navigated to previously 
        this.router.navigate(['/superheroes', {id: heroId, foo: 'foo'}]) // route to navigate to and navigation extras
  }

}
