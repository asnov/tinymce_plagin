// this file is for future using

export interface TinymceEvent extends Event {
  readonly type:
    'onActivate'
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

const controlTypes = [
  "selector",
  "collection",
  "reflowqueue",
  "control",
  "factory",
  "keyboardnavigation",
  "container",
  "draghelper",
  "scrollable",
  "panel",
  "movable",
  "resizable",
  "floatpanel",
  "window",
  "messagebox",
  "tooltip",
  "widget",
  "progress",
  "notification",
  "layout",
  "absolutelayout",
  "button",
  "buttongroup",
  "checkbox",
  "combobox",
  "colorbox",
  "panelbutton",
  "colorbutton",
  "colorpicker",
  "path",
  "elementpath",
  "formitem",
  "form",
  "fieldset",
  "filepicker",
  "fitlayout",
  "flexlayout",
  "flowlayout",
  "formatcontrols",
  "gridlayout",
  "iframe",
  "infobox",
  "label",
  "toolbar",
  "menubar",
  "menubutton",
  "menuitem",
  "throbber",
  "menu",
  "listbox",
  "radio",
  "resizehandle",
  "selectbox",
  "slider",
  "spacer",
  "splitbutton",
  "stacklayout",
  "tabpanel",
  "textbox",
  "dropzone",
  "browsebutton",
];
