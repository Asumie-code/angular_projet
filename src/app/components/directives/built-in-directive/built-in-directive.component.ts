import { Component, OnInit } from "@angular/core";
import { Item } from "./item";



@Component({
    selector: 'directives-built-in-directive', 
    templateUrl: './built-in-directive.component.html', 
    styleUrls: ['./built-in-directive.component.css']
})

export class BuiltInDirective implements OnInit{

    canSave = true 
    isSpecial = true 
    isUnchanged = true

    isActive = true
    nullCustomer: string | null = null 
    currentCustomer = {
        name: 'Laura'
      }

    item!: Item // defined to demonstrate template context precedence
    items: Item[] = []

    currentItem!: Item


    // trackBy change counting
  itemsNoTrackByCount   = 0;
  itemsWithTrackByCount = 0;
  itemsWithTrackByCountReset = 0;
  itemIdIncrement = 1;



    currentClasses: Record<string, boolean> = {}

    currentStyles: Record<string, string>  = {}



    ngOnInit(): void {
        this.resetItems()
        this.setCurrentClasses()
        this.setCurrentStyles()
    }

    setCurrentClasses() {
        // css classes: added/removed per current state of component properties 
        this.currentClasses = {
            saveable: this.canSave, 
            modified: !this.isUnchanged, 
            special: this.isSpecial
        }
    }


    setCurrentStyles() {
        // css styles: set per current state of component properties
        this.currentStyles = {
            'font-style': this.canSave? 'italic' : 'normal', 
            'font-wieght': !this.isUnchanged ? 'bold' : 'normal', 
            'font-size': this.isSpecial ? '24px' : '12px'
        }
    }



    isActiveToggle() {
        this.isActive = !this.isActive
    }

    giveNullCustomerValue() {
        this.nullCustomer = 'kelly'
    }


    resetList() {
        this.resetItems()
        this.itemsWithTrackByCountReset = 0 
        this.itemsNoTrackByCount = ++this.itemsNoTrackByCount
    }


    changeIds() {
        this.items.forEach(i => i.id += 1 * this.itemIdIncrement)
        this.itemsWithTrackByCountReset = -1
        this.itemsNoTrackByCount = ++this.itemsNoTrackByCount
        this.itemsWithTrackByCount = ++this.itemsWithTrackByCount
    }


    clearTrackByCounts() {
        this.resetItems()
        this.itemsNoTrackByCount = 0
        this.itemsWithTrackByCount = 0 
        this.itemIdIncrement = 1 
    }


    resetItems() {
        this.items = Item.items.map(item => item.clone())
        this.currentItem = this.items[0]
        this.item = this.currentItem
    }

    setUppercaseName(name: string) {
        this.currentItem.name  = name.toUpperCase()
    }

    trackByItems(index: number, item: Item): number { return item.id}

    trackById(index: number, item: any): number { return item.id }

    getValue(event: Event): string {
        return (event.target as HTMLInputElement).value
    }
}