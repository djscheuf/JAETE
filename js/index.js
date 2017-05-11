let $ = require('jquery')
let count =0

console.log('jquery loaded.')
console.log('count initialized.')

$('#clickCounter').text(count)
$('#btn_Count').on('click', ()=>{
  count++
  $('#clickCounter').text(count)
  console.log('clickCounter increased: ')
  console.log(count);
})
