import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
    constructor(private router: Router, private route: ActivatedRoute) { }

    goToRandom() {
      const destionations = ['child-b', '../first-component']
      this.router.navigate([destionations[Math.floor(Math.random() * 1 )]], {relativeTo: this.route})
    }
}
