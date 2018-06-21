import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import * as tinymce from 'tinymce';
import 'tinymce/themes/modern/theme';
import 'tinymce/plugins/code';
import { listJason } from './plugins/list.jason';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {
    tinymce.init({});
    tinymce.PluginManager.add('list.jason', listJason);
  })
  .catch(err => console.log(err));
