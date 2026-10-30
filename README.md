# Exercise: Shopping List in Angular

Exercise code for the lesson **Exercise: Shopping List in Angular** in the C# Full-Stack Bootcamp on [ask-codey.com](https://www.ask-codey.com).

You built a shopping list in plain JavaScript in *Exercise: Shopping List and Calculator*. Now build it again in Angular, with signals, bindings, `@for` and `@if`, and notice how much code you don't have to write.

## What's here

An Angular 22 app, created with `ng new` and Bootstrap added.

- `src/app/app.ts`: the App component, which shows the shopping list. Ready to use.
- `src/app/shopping-list/shopping-list.ts` and `shopping-list.html`: the shopping list component, for you to finish. The requirements are in the comment at the top of `shopping-list.ts`.
- `src/app/shopping-list/shopping-list.css`: its styles. Ready to use.
- `src/app/shopping-list/shopping-list.spec.ts`: tests that use the list the way a person would. You don't need to change these.

## Getting started

Open the folder in VS Code, and a terminal there:

```bash
npm install
npm test
```

`npm install` downloads the packages (once). `npm test` runs the tests: they fail to start with.

## What to do

Finish `shopping-list.ts` and `shopping-list.html` until every test passes. Then run the app with `ng serve` (or `npm start`), open http://localhost:4200, and try it.

## Tips

- State goes in signals: the items, and the text in the box. `signal<ShoppingItem[]>([])` makes an empty list of items.
- The count and the message are worked out from the items: `computed`.
- `[(ngModel)]` keeps the box and a signal in step; import `FormsModule` in the component.
- `(click)` and `(keyup.enter)` run your methods.
- `@for (item of items(); track item.name) { ... } @empty { ... }` and `[class.done]="item.done"` draw the list.
- To change one item, make a new list: `items.update(items => items.map(i => i === item ? { ...i, done: !i.done } : i))`. `{ ...i, done: ... }` is a copy of `i` with `done` changed.

## Hand it in

When it works, push your solution to a public repo of your own on GitHub, then paste that repo's address into **Submit your exercise** on the lesson page at [ask-codey.com](https://www.ask-codey.com). That's what completes the lesson. The lesson page shows the Git commands, step by step.
