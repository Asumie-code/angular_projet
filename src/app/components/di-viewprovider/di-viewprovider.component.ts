import { Component } from "@angular/core";
import { FlowerService } from "./flower-2.service";
import { AnimalService } from "./animal.service";



@Component({
    selector: 'di-viewprovider', 
    templateUrl: './di-viewprovider.component.html'
})
export class DiViewprovider {
    constructor(public flower: FlowerService, public animal: AnimalService) {}
}


// when using @Host() together with @SkipSelf() in 
// child.component.ts for the AnimalService, add the 
// following viewProviders array to the @Component metadata: 


// viewProviders: [{provide: AnimalService, useValue: { emoji: '🦔' }}]


// so, the entire @ChildComponent() decorater and its
// metadata should be as follows: 

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: [ './app.component.css' ],
//   viewProviders: [{ provide: AnimalService, useValue: { emoji: '🦔' } }]
// })
