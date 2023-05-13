import { Component, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crises-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
  crises$?: Observable<Crisis[]>;
  selectedId = 0;

  constructor(
    private service: CrisisService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.crises$ = this.route.firstChild?.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getCrises();
      })
    );
  }
}
