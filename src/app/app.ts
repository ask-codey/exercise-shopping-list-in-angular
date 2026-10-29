import { Component } from '@angular/core';
import { ShoppingList } from './shopping-list/shopping-list';

@Component({
  imports: [ShoppingList],
  selector: 'app-root',
  template: `
    <main class="container py-4" style="max-width: 32rem;">
      <app-shopping-list />
    </main>
  `,
})
export class App {}
