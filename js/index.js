let $ = require('jquery');
let Fio = require('./js/fio.js').Fio;

console.log('jquery loaded.')

$('#btn_Load').on('click',()=>{
  fn = $('#txt_FileName').val();
  console.log('Load File: '+fn);
  // if Fn is empty: Open File Browser Dialog
  // else, attempt to open 'fn'.
  // Load Contents into txt_Contents;
  var fio = new Fio();
  var contents = fio.ReadFile(fn);
  $('#txt_Content').val(contents);
})

$('#btn_Save').on('click',()=>{
  var contents = $('#txt_Content').val();
  var fn = fn = $('#txt_FileName').val();
  console.log('Save File: '+contents);
  // if Fn is empty: prompt for fileName
  // else, attempt to save contents to 'fn';
  var fio = new Fio();
  var contents = fio.SaveToFile(fn,contents);
  alert("File was saved!")
})
// Eventually we will need to add functionality
//  to use Password, and Crypto.
