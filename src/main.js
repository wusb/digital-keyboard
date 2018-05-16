import DigitalKeyboard from 'digital-keyboard';

function inputValue(value){
  document.querySelector('#values').innerHTML = value;
}

new DigitalKeyboard({el: document.querySelector('#app'), type: 'idcard', inputValue: inputValue});