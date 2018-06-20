import { Component } from '@angular/core';
import { EditorComponent } from '@tinymce/tinymce-angular/editor/editor.component';

interface tinymceEvent extends Event {
  readonly type: 'onActivate'
    | 'onAddUndo'
    | 'onBeforeAddUndo'
    | 'onBeforeExecCommand'
    | 'onBeforeGetContent'
    | 'onBeforeRenderUI'
    | 'onBeforeSetContent'
    | 'onBeforePaste'
    | 'onBlur'
    | 'onChange'
    | 'onClearUndos'
    | 'onClick'
    | 'onContextMenu'
    | 'onCopy'
    | 'onCut'
    | 'onDblclick'
    | 'onDeactivate'
    | 'onDirty'
    | 'onDrag'
    | 'onDragDrop'
    | 'onDragEnd'
    | 'onDragGesture'
    | 'onDragOver'
    | 'onDrop'
    | 'onExecCommand'
    | 'onFocus'
    | 'onFocusIn'
    | 'onFocusOut'
    | 'onGetContent'
    | 'onHide'
    | 'onInit'
    | 'onKeyDown'
    | 'onKeyPress'
    | 'onKeyUp'
    | 'onLoadContent'
    | 'onMouseDown'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'onMouseMove'
    | 'onMouseOut'
    | 'onMouseOver'
    | 'onMouseUp'
    | 'onNodeChange'
    | 'onObjectResizeStart'
    | 'onObjectResized'
    | 'onObjectSelected'
    | 'onPaste'
    | 'onPostProcess'
    | 'onPostRender'
    | 'onPreProcess'
    | 'onProgressState'
    | 'onRedo'
    | 'onRemove'
    | 'onReset'
    | 'onSaveContent'
    | 'onSelectionChange'
    | 'onSetAttrib'
    | 'onSetContent'
    | 'onShow'
    | 'onSubmit'
    | 'onUndo'
    | 'onVisualAid';
}

interface EventObj {
  event: tinymceEvent;
  editor: EditorComponent;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  editorSettings = {
    skin_url: 'assets/skins/lightgray',
    plugins: 'link',
  };
  dataModel = '';

  handleEvent($eventObj: EventObj) {
    console.log(`handleEvent:`, $eventObj);
  }

}
