import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandloneAppBootstrapService } from '../standlone-app-bootstrap.service';
import { SlBSubComponent } from '../sl-b-sub/sl-b-sub.component';


@Component({
  selector: 'app-top-level-sl',
  standalone: true,
  imports: [CommonModule, SlBSubComponent],
  templateUrl: './top-level-sl.component.html',
  styleUrls: ['./top-level-sl.component.css'],
  
})
export class TopLevelSlComponent {
  constructor(public stdService: StandloneAppBootstrapService) {}
}
