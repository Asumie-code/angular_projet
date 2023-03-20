import { Component, Self, Optional } from "@angular/core";
import { LeafService } from "../leaf.service";

@Component({
    selector: 'di-self-no-data', 
    templateUrl: './self-no-data.component.html', 
    styleUrls: ['./self-no-data.component.css']
})
export class SelfNoDataComponent {
    constructor(@Self() @Optional() public leaf?: LeafService) {}
}

// the app doesn't break because the value being available at self is optional 
// if you rmeove @Optional(), the app breaks 