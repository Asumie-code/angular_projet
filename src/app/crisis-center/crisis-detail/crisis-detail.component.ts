import { Component,  OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  crisis!: Crisis
  editName = ''

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    // private service: crisisService
  ) {}


  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const crisis: Crisis = data['crisis']
      this.crisis = crisis
    })
  }


  save() {

  }


  cancel() {

  }

    gotoCrises() {
      const crisisId = this.crisis ? this.crisis.id: null

      this.router.navigate(['../', {id: crisisId, foo: 'foo'}], { relativeTo: this.route })
    }

    
}
