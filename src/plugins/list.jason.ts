import { Editor } from 'tinymce';


export function listJason(editor: Editor) {

  // parameters to open dialog box
  const openArgs = {
    title: 'Choose animal to insert',
    body: [
      {
        name: 'animal',
        type: 'listbox',
        label: 'Animal to insert:',
        tooltip: 'Chosen animal will be inserted to the text instantly',
        values: [
          {text: 'Select...', value: ''},
          {text: 'Dog', value: 'dog'},
          {text: 'Cat', value: 'cat'},
          {text: 'Mouse', value: 'mouse'},
        ],
        onselect(evt) {
          const text = evt.control.settings.value;
          if (text) {
            editor.insertContent(`<span class>${text}</spanclass>`);
            editor.windowManager.close();
          }
        },
      },
    ],
    buttons: [{
      text: 'Cancel',
      onclick: 'close'
    }],
  };


  // Add a button that opens a window
  editor.addButton('link', {
    title: 'Insert animal',
    tooltip: 'Choose animal to insert',
    text: 'animal',
    active: false,
    icon: false,
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
      url: 'http://asnovikov.ru'
    })
  };

}
