import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingList } from './shopping-list';

// These tests use the shopping list the way a person would: typing, clicking, and reading the page.
// Run them with: npm test. You don't need to change this file.
describe('ShoppingList', () => {
  let fixture: ComponentFixture<ShoppingList>;
  let page: HTMLElement;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ShoppingList);
    page = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  const box = () => page.querySelector('#new-item') as HTMLInputElement;
  const items = () => [...page.querySelectorAll('li')];
  const names = () => items().map(li => li.querySelector('span')?.textContent?.trim());
  const itemsLeft = () => page.querySelector('#items-left')?.textContent?.trim();

  async function type(text: string) {
    expect(box(), 'a text box with the id new-item').toBeTruthy();
    box().value = text;
    box().dispatchEvent(new Event('input'));
    await fixture.whenStable();
  }

  async function click(element: Element | null | undefined) {
    expect(element, 'something to click').toBeTruthy();
    (element as HTMLElement).click();
    await fixture.whenStable();
  }

  async function add(text: string) {
    await type(text);
    await click(page.querySelector('#add'));
  }

  it('starts empty', () => {
    expect(items().map(li => li.textContent?.trim())).toEqual(['Your list is empty']);
    expect(itemsLeft()).toBe('Nothing left to buy');
  });

  it('adds an item with the Add button, and empties the box', async () => {
    await add('  milk ');
    expect(names()).toEqual(['milk']);
    expect(box().value).toBe('');
    expect(itemsLeft()).toBe('1 item left');
  });

  it('adds an item when Enter is pressed', async () => {
    await type('bread');
    box().dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    await fixture.whenStable();
    expect(names()).toEqual(['bread']);
  });

  it('adds items in order, and counts them', async () => {
    await add('milk');
    await add('bread');
    await add('coffee');
    expect(names()).toEqual(['milk', 'bread', 'coffee']);
    expect(itemsLeft()).toBe('3 items left');
  });

  it("doesn't add a blank item", async () => {
    await add('milk');
    await add('   ');
    expect(names()).toEqual(['milk']);
  });

  it("doesn't add an item that's already on the list", async () => {
    await add('Milk');
    await add('milk');
    expect(names()).toEqual(['Milk']);
    expect(box().value).toBe('');
  });

  it('crosses an item off when its name is clicked, and back on again', async () => {
    await add('milk');
    await add('bread');
    await click(items()[0].querySelector('span'));
    expect(items()[0].classList.contains('done')).toBe(true);
    expect(itemsLeft()).toBe('1 item left');
    await click(items()[0].querySelector('span'));
    expect(items()[0].classList.contains('done')).toBe(false);
    expect(itemsLeft()).toBe('2 items left');
  });

  it('removes an item with its Remove button', async () => {
    await add('milk');
    await add('bread');
    await click(items()[0].querySelector('button.remove'));
    expect(names()).toEqual(['bread']);
    expect(itemsLeft()).toBe('1 item left');
  });

  it('clears the crossed-off items, with a button that is only there when one is', async () => {
    await add('milk');
    await add('bread');
    await add('coffee');
    expect(page.querySelector('#clear-done')).toBeNull();
    await click(items()[0].querySelector('span'));
    await click(items()[2].querySelector('span'));
    await click(page.querySelector('#clear-done'));
    expect(names()).toEqual(['bread']);
    expect(page.querySelector('#clear-done')).toBeNull();
  });

  it('says nothing is left when everything is crossed off', async () => {
    await add('milk');
    await click(items()[0].querySelector('span'));
    expect(itemsLeft()).toBe('Nothing left to buy');
  });
});
