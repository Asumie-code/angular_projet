import { Component } from "@angular/core";
import { FlowerService } from "../flower-2.service";
import { AnimalService } from "../animal.service";



@Component({
    selector: 'di-inspector', 
    templateUrl: './inspector.component.html'
})
export class InspectorComponent {
    constructor(public flower: FlowerService, public animal: AnimalService) {}
}