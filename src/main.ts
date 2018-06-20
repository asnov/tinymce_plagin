import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import * as tynymce from 'tinymce';
import 'tinymce/themes/modern/theme';
import 'tinymce/plugins/link';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {
    tynymce.init({});
  })
  .catch(err => console.log(err));
