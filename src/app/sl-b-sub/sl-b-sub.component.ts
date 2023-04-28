import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandloneComponentService } from '../standlone-component.service';
import { StandloneService } from '../standlone.service';
import { SlBComponent } from '../sl-b/sl-b.component';
import { SlAComponent } from '../sl-a/sl-a.component';

@Component({
  selector: 'app-sl-b-sub',
  standalone: true,
  imports: [CommonModule, SlBComponent, SlAComponent],
  templateUrl: './sl-b-sub.component.html',
  styleUrls: ['./sl-b-sub.component.css'],
  providers: [ StandloneComponentService ]
})
export class SlBSubComponent {
  constructor(public stdComponentService: StandloneComponentService, public stdRootService: StandloneService  ) {}
}
