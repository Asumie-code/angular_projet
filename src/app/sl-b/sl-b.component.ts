import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandloneComponentService } from '../standlone-component.service';

@Component({
  selector: 'app-sl-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sl-b.component.html',
  styleUrls: ['./sl-b.component.css']
})
export class SlBComponent {
  constructor(public stdComponentService: StandloneComponentService ) {}
}
