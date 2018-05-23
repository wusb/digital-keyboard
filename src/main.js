import DigitalKeyboard from './Keyboard';
// import DigitalKeyboard from 'digital-keyboard';
import s from './main.scss';

function inputValue(value){
  document.querySelector('#values').innerHTML = value;
}

new DigitalKeyboard({
  el: document.querySelector('#app'),
  className: s.container,
  type: '',
  inputValue: inputValue
});