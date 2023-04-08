import { Injectable, OnDestroy } from "@angular/core";

import { Observable, of } from "rxjs";
import { delay } from "rxjs";


export class Item {
        constructor(public id: number, public name: string) {}
}


const ITEMS: Item[] = [
    new Item(1, 'Sticky notes'),
    new Item(2, 'Sticky notes1'),
    new Item(3, 'Sticky notes2'),
    new Item(4, 'Sticky notes3'),
]


const FETCH_LATENCY = 500

@Injectable() 
export class ItemService implements OnDestroy {
    constructor() { console.log('ItemService instance created') }
    ngOnDestroy(): void {
        console.log('ItemService instance destroyed')
    }

    getItems(): Observable<Item[]> {
        return of(ITEMS).pipe(delay(FETCH_LATENCY))
    }

    getItem(id: number | string): Observable<Item> {
        const item$ = of(ITEMS.find(item => item.id === +id)!)
        return item$.pipe(delay(FETCH_LATENCY))
    }
}
