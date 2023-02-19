import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { LoggerService } from 'src/app/services/logger.service';
import { PeekABooDirective } from './peek-a-boo.directive';

@Component({
  selector: 'peek-a-boo',
  template: '<p>Now you see my Hero, {{name}}</p>',
})
export class PeekABooComponent
  extends PeekABooDirective
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
        @Input() name = ''

        private verb = 'initalized'
        constructor(logger: LoggerService){
            super(logger)
            
            const is = this.name? 'is' : 'is not'
            this.logIt(`name ${is} known at construction`)

        }

        // only called for/if there is an @input variable set by parent 
        ngOnChanges(changes: SimpleChanges) {
            const changesMsgs: string[] = []
            for(const propName in changes) {
                if(propName === 'name') {
                    const name = changes['name'].currentValue
                    changesMsgs.push(`name ${this.verb} to "${name}"`)
                } else {
                    changesMsgs.push(propName + ' ' + this.verb)
                }
            }
            this.logIt(`OnChanges: ${changesMsgs.join('; ')}`)
            this.verb = 'changed' // next time it will be a change 
        }


        // called frequently 
        // called in every change detection cycle anywhere on the page 
        ngDoCheck(): void {
            this.logIt('DoCheck')
        }

        ngAfterContentInit(): void {
            this.logIt('AfterContentInit')
        }

        // called frequently
        // called in every change detection cycle anywhere on the page 
        ngAfterContentChecked(): void {
            this.logIt('AfterContentChecked')
        }

        ngAfterViewInit(): void {
            this.logIt('AfterViewInit')
        }

        //called frequently 
        ngAfterViewChecked(): void {
            this.logIt('AfterViewChecked')

        }

        ngOnDestroy(): void {
            this.logIt('OnDestory')
        }





    }
