import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataModel = '---- Hello Jason! ----';

  editorSettings = {
    skin_url: 'assets/skins/lightgray',
    plugins: [
      'code',
      'list.jason',
    ],
  };

  handleEvent() {
    console.log(this.dataModel);
  }

}
