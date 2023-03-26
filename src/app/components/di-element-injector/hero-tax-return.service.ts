import { Injectable } from "@angular/core";
import { HeroTaxReturn } from "./hero";
import { DiEiHeroesService } from "./heroes.service";


@Injectable()
export class HeroTaxRetrunService {
    private currentTaxReturn!: HeroTaxReturn
    private originalTaxReturn!: HeroTaxReturn


    constructor(private heroService: DiEiHeroesService) {}

    set taxReturn(htr: HeroTaxReturn) {
        this.originalTaxReturn = htr 
        this.currentTaxReturn = htr.clone()
    }

    get taxReturn(): HeroTaxReturn {
        return this.currentTaxReturn
    }

    restoreTaxReturn() {
        this.taxReturn = this.originalTaxReturn
    }

    saveTaxReturn() {
        this.taxReturn = this.currentTaxReturn
        this.heroService.saveTaxReturn(this.currentTaxReturn).subscribe()
    }


    
}