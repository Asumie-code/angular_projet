import { Component, ViewChild } from '@angular/core'

import { Hero } from 'src/app/hero'
import { OnChangesComponent } from './on-changes.component'


@Component({
    selector: 'on-changes-parent',
    templateUrl: './on-changes-parent.component.html',
    styles: ['']
})
export class OnChangesParentComponent {
    hero!: Hero
    power = ''
    title = 'onChanges'
    @ViewChild(OnChangesComponent) childView!: OnChangesComponent

    constructor() {
        this.reset()
    }

    reset() {
        // new Hero object every time; triggers onChanges 
        this.hero = new Hero('windstorm')
        // setting power only triggers onchange if this value is different 
        this.power = 'sing'
        if (this.childView) {
            this.childView.reset()
        }
    }
}