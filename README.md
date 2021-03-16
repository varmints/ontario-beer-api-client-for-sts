# Frontend developer coding test

## Functional requirements

Based on following API: http://ontariobeerapi.ca/ please write a beer application. It shouldconsist of:

1. Three column layout, where each column is a list of beers (Beer endpoint) by Brewer(example Molson, Kompania Piwowarska S.A. etc).
2. Initially lists are empty, and there’s a drop-down on top of each one with all possiblebrewers.
3. After selecting brewer, list is being populated with 15 beers sorted by name. If there’smore than 15 beers of given brewer, there’s “Load more” button in the bottom, whichloads another 15 and so on (until all beers are loaded).
4. The selection should be persisted in given , i.e. after refreshing site, applicationshould remember which brewers were used in which columns.
5. Each beer entry consist of Name, Type, Price per litre and image thumbnail.
6. Image thumbnail should be in a form of circle (radius) with 40px diameter. Afterclicking on it, full size picture should be visible on overlay centred to the window.
7. There should be settings modal upon clicking on “Options” button somewhere.Options:
   1. possibility to change layout theme from light to dark,
   2. specifying number of elements loaded in one go (from 15 to 30 for example),
   3. sorting by given field, selected from drop-down: name, price, type; afterchange it should sort already loaded beers.
8. All Options should be cached in the browser, for future reuse.

# OntarioBeerApiClientForSts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
