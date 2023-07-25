import { state, style, transition, trigger, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../hero-list/hero';

@Component({
  selector: 'app-hero-list-auto',
  templateUrl: './hero-list-auto.component.html',
  styleUrls: ['./hero-list-auto.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({ height: '*' })),
      transition('* => void', [
        style({ height: '*' }), 
        animate(250, style({ height: 0 }))
      ])
    ])
  ]
})
export class HeroListAutoComponent {
    @Input() heroes: Hero[] = []

    @Output() remove  = new EventEmitter<number>()

    removeHero(id: number) {
      this.remove.emit(id)
    }
}
