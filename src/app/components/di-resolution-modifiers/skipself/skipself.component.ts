import { Component, SkipSelf } from "@angular/core";
import { LeafService } from "../leaf.service";



@Component({
    selector: 'di-skipself', 
    templateUrl: './skipself.component.html', 
    styleUrls: ['./skipself.component.css'], 
    // Angular would ignore this LeaveService instance 
    providers: [
        { provide: LeafService, useValue: { emoji: '🍁'}}
    ]
})
export class SkipselfComponent {
    // use @SkipSelf() in the constructor 
    constructor(@SkipSelf() public leaf: LeafService) { }
}

// @SkipSelf(): specifies that the dependency resolution should startfrom the parent injector, not here. 