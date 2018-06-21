import { Component } from '@angular/core';
import { EventObj } from '@tinymce/tinymce-angular/editor/Events';
import { TinymceEvent } from '../plugins/tinymce-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  editorSettings = {
    skin_url: 'assets/skins/lightgray',
    plugins: [
      'code',
      // 'link',
      'list.jason',
    ],
  };
  dataModel = '';

  handleEvent($eventObj: EventObj<TinymceEvent>) {
    console.log(`handleEvent:`, $eventObj, this.dataModel);
  }

}
