import { Component } from '@angular/core';

// One item on the list.
export interface ShoppingItem {
  name: string;
  done: boolean;
}

// The shopping list.
//
// Requirements (the page, in shopping-list.html):
// - A text box with the id new-item, and a button with the id add. Clicking Add, or pressing Enter in the box,
//   adds the item typed (without the spaces at either end) and empties the box. A blank item isn't added, and
//   neither is an item already on the list, whatever its capitals.
// - The items in a <ul>, one <li> each, in the order they were added. When the list is empty, one <li> says
//   "Your list is empty".
// - Each item's <li> holds a <span> with its name, and a <button class="remove">Remove</button>.
//   Clicking the name crosses the item off (the <li> gets the class done); clicking it again puts it back.
//   Clicking Remove takes the item off the list.
// - A <p id="items-left"> says how many items aren't crossed off: "Nothing left to buy", "1 item left",
//   "3 items left".
// - While any item is crossed off, a button with the id clear-done ("Clear crossed-off items") removes every
//   crossed-off item. When none is crossed off, the button isn't there.
@Component({
  imports: [],
  selector: 'app-shopping-list',
  styleUrl: './shopping-list.css',
  templateUrl: './shopping-list.html',
})
export class ShoppingList {
  // TODO: the signals, computed values and methods the page needs.
}
