import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandloneComponentService } from '../standlone-component.service';

@Component({
  selector: 'app-sl-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sl-a.component.html',
  styleUrls: ['./sl-a.component.css']
})
export class SlAComponent {
  constructor(public stdComponentService: StandloneComponentService ) {}

}
