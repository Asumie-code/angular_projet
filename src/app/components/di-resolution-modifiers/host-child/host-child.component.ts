import { Component } from "@angular/core";
import { FlowerService } from "../flower.service";


@Component({
    selector: 'di-host-child', 
    templateUrl: './host-child.component.html', 
    styleUrls: ['./host-child.component.css']
})
export class HostChildComponent {
    constructor(public flower: FlowerService) { }
}