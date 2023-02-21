import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  currentItem = 'Television'
  lastChanceItem = 'Beanbag'
  items = ['item1', 'item2', 'item3', 'item4']
  wishList = ['Drone', 'computer']




  addItem(newItem: string) {
    this.items.push(newItem)
  }


  buyClearanceItem(item: string) {
    console.warn(`Parent says: buying ${item}`)
  }

  crossOffItem(item: string) {
    console.warn(`Parent says: crossing off ${item}.`)
  }


  saveForLater(item: string) {
    console.warn(`Parent says: saving ${item} for later.`)

  }

  addToWishList(wish: string) {
    console.warn(`Parent says: adding ${this.currentItem} to your whislist.`)
    this.wishList.push(wish)
    console.warn(this.wishList)
  }
}
