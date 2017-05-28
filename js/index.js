let $ = require('jquery');
let fio = require('./js/fio.js');
let jCrypto = require('./js/jCrypto.js');
const {dialog} = require('electron').remote;
let path = require('path');

$('#btn_Load').on('click',() => {
		var fn = $('#txt_FileName').val();

		if(!fn.trim())
		{
      console.log('File name is empty');
			var list = dialog.showOpenDialog(
				{
					title:'Select a file',
					buttonLabel: 'Open',
					properties:['openFile'],
					filters: [
						{name: 'Encrypted Text', extensions:['etxt']},
						{name: 'Unencrypted Text', extensions:['txt']},
						{name: 'All Files', extensions :['*']}
					]
				})

        if(!list){
          alert('Please select a file!');
          return;
        }

        fn = list[0];
		}

    console.log('Loading: ',fn);
		var contents = fio.readFile(fn)
    console.log('Loaded: ',contents.substring(0,9),'...');

		var ext = path.extname(fn);
		console.log('Type: ',ext,'...');
		if(ext === '.etxt'){
			var psw = $('#txt_Password').val();
      console.log('Decrypting with: ',psw);
			contents = jCrypto.decrypt(psw,contents);
		}

		$('#txt_FileName').val(fn);
    console.log('Presenting: ',contents.substring(0,9),'...');
		$('#txt_Content').val(contents);
})

$('#btn_Save').on('click',() => {
	var fn = $('#txt_FileName').val();

	if(!fn.trim()){
    console.log('File name is empty');
		fn = dialog.showSaveDialog({
				title: 'Save your file',
				filters: [
					{name: 'Encrypted Text', extensions:['etxt']},
					{name: 'Unencrypted Text', extensions:['txt']}
				]
      })
	}

  console.log('Saving to:',fn);

	var finalContents=$('#txt_Content').val();
  console.log('Init. contents: ',finalContents.substring(0,9),'...');

	var ext = path.extname(fn);
	if(ext === '.etxt'){
		var psw = $('#txt_Password').val();
    console.log('Encrypting with:',psw);
		finalContents = jCrypto.encrypt(psw,finalContents);
	}

  console.log('Final contents:',finalContents.substring(0,9),'...');
	fio.saveToFile(fn,finalContents);
})
