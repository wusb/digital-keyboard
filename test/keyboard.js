import DigitalKeyboard from '../build/Keyboard';

function returnValue(value){
    document.querySelector('#values').innerHTML = value;
}

new DigitalKeyboard({el: '#app', type: 'idcard', returnValue: returnValue});