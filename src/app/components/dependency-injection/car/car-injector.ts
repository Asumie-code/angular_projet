import { Injector } from "@angular/core";

import { Car, Engine, Tires } from "./car";
import { DiLogger } from "../di-logger.service";


export function useInjector() {
    let injector: Injector
    /*
        // Cannot instantiate an Injector like this!
        let injector = new Injector([
            { provide: Car, deps: [Engine, Tires] },
            { provide: Engine, deps: [] },
            { provide: Tires, deps: [] }
        ]);
    */
   injector = Injector.create({
        providers: [
            { provide: Car, deps: [Engine, Tires] },
            { provide: Engine, deps: [] },
            { provide: Tires, deps: [] },
        ]
   })

   const car = injector.get(Car)
   car.description = 'Injector'
   
   injector = Injector.create({
        providers: [
            {provide: DiLogger, deps: []}
        ]
   })
   const logger = injector.get(DiLogger)
   logger.log('Injector car.drive() said:' + car.drive())

   return car
}