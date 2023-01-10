import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-my-component',
  templateUrl: './auto-my-component.component.html',
  styleUrls: ['./auto-my-component.component.css']
})
export class AutoMyComponentComponent implements OnInit {
  
  ngOnInit(): void {
    console.log('called once on each initialization')  
  }

  

}
