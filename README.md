# Tinymce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## how to install  

```
git clone https://github.com/asnov/tinymce_plugin.git
cd tinymce_plugin
yarn install # npm install should work too
ng serve -o
```

## how to use  

Click "animal" button on the toolbar.  
You could see html source of the document in the browser console or using Source code plugin (menu Tools -> Source code).  

## how it works  

- [src/main.ts](src/main.ts)  
Imports and initialises tinymce, load theme and all necessary plugins including custom **listJason** plugin.  
- [src/app/app.module.ts](src/app/app.module.ts)  
Imports Angular EditorModule to use in the html templates.  
- [src/app/app.component.ts](src/app/app.component.ts)  
Specifies editor settings  
- [src/app/app.component.html](src/app/app.component.html)  
html template used for the editor  
- [src/plugins/list.jason.ts](src/plugins/list.jason.ts)  
Required plugin. Adds button to the toolbar. Adds a menu item to the tools menu.


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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
