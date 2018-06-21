import { Editor } from 'tinymce';


export function listJason(editor: Editor, url: string) {

  const openArgs = {
    title: 'Choose animal to insert',
    body: [
      // {type: 'textbox', name: 'title', label: 'Title'},
      {
        name: 'animal',
        type: 'listbox',
        label: 'Animal to insert:',
        tooltip: 'Chosen animal will be inserted to the text instantly',
        text: [
          'select:',
        ],
        value: '',
        values: [
          {text: 'Select...', value: ''},
          {text: 'Dog', value: 'dog'},
          {text: 'Cat', value: 'cat'},
          {text: 'Mouse', value: 'mouse'},
        ],
        onselect(evt) {
          const text = evt.control.settings.value;
          console.log(`text=`, text);
          if (text) {
            const htmlText = `<span class>${text}</spanclass>`;
            editor.insertContent(htmlText);
            editor.windowManager.close();
          }
        },
      },
    ],
    buttons: [{
      text: 'Cancel',
      onclick: 'close'
    }],
    // buttons: [
    //   {
    //     text: 'Cancel', onclick() {
    //       editor.windowManager.close();
    //     }
    //   }
    // ],
    onsubmit: (e) => {
      console.log(`e=`, e);
      // Insert content when the window form is submitted
      const text = e.data.animal;

      // const htmlText = editor.dom.createHTML('span', {class:''}, text);
      const htmlText = `<span class>${text}</spanclass>`;

      // uses mceInsertContent command which uses insertHtmlAtCaret()
      editor.insertContent(htmlText);

      // uses editor.setContent(value)
      // editor.execCommand('mceInsertContent', false, htmlText);

      // mceInsertRawHTML is broken since 4.7.10: https://github.com/tinymce/tinymce/issues/4401
      // editor.execCommand('mceInsertRawHTML', false, htmlText);

      // editor.windowManager.close();
    },
  };


  // Add a button that opens a window
  editor.addButton('link', {  // TODO: change to animal
    title: 'Insert animal',
    tooltip: 'Choose animal to insert',
    text: 'animal',
    active: false,
    // icon: 'link',
    icon: false,
    // icon: 'fa fa-plus-square',

    // Open window
    onclick: () => editor.windowManager.open(openArgs, {}),
  });

  // Adds a menu item to the tools menu
  editor.addMenuItem('animal', {
    text: 'Insert animal',
    context: 'tools',
    // Open window
    onclick: () => editor.windowManager.open(openArgs, {}),
  });


  return {
    getMetadata: () => ({
      name: 'animal',
      url: 'http://alexnew.ru'
    })
  };

}
