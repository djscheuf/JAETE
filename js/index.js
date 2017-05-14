let $ = require('jquery')

console.log('jquery loaded.')

$('#btn_Load').on('click',()=>{
  fn = $('#txt_FileName').val();
  console.log('Load File: '+fn);
  // if Fn is empty: Open File Browser Dialog
  // else, attempt to open 'fn'.
  // Load Contents into txt_Contents;
})

$('#btn_Save').on('click',()=>{
  cnts = $('#txt_Content').val();
  console.log('Save File: '+cnts);
  // if Fn is empty: prompt for fileName
  // else, attempt to save contents to 'fn';
})
// Eventually we will need to add functionality
//  to use Password, and Crypto.
