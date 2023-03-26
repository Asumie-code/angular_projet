import { Component, EventEmitter, Input, Output } from "@angular/core";
import { HeroTaxReturn } from "./hero";
import { HeroTaxRetrunService } from "./hero-tax-return.service";


@Component({
    selector: 'di-hero-tax-return', 
    templateUrl: './hero-tax-return.component.html', 
    styleUrls: ['./hero-tax-return.component.css'], 
    providers: [HeroTaxRetrunService]
})
export class HeroTaxReturnComponent {
    message = ''

    @Output() close = new EventEmitter<void>()

    get taxReturn(): HeroTaxReturn {
        return this.heroTaxReturnService.taxReturn 
    }

    @Input()
    set taxReturn(htr: HeroTaxReturn) { 
        this.heroTaxReturnService.taxReturn = htr
    }


    constructor(private heroTaxReturnService: HeroTaxRetrunService) {}

    onCanceled() {
        this.flashMessage('Canceled')
        this.heroTaxReturnService.restoreTaxReturn()
    }

    onClose() { this.close.emit() }

    onSaved() {
        this.flashMessage('saved')
        this.heroTaxReturnService.saveTaxReturn()
    }

    flashMessage(msg: string) {
        this.message = msg
        setTimeout(() => this.message = '', 500)
    }
}