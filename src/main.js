import DigitalKeyboard from './Keyboard';
// import DigitalKeyboard from 'digital-keyboard';
import s from './main.scss';

function inputValue(value){
  document.querySelector('#values').innerHTML = value;
}


document.querySelector('#clear').addEventListener('click', clearValue);

function clearValue() {
  Keyboard.value = '';
}

let Keyboard = new DigitalKeyboard({
  el: document.querySelector('#app'),
  className: s.container,
  type: '',
  inputValue: inputValue,
  integerDigits: 4,
  decimalDigits: 2
});

console.log(Keyboard);
