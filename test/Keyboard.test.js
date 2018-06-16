const expect = require('chai').expect, {JSDOM} = require('jsdom'),
  {window} = new JSDOM(`<!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0, maximum-scale=1.0,user-scalable=no">
      <meta name="author" content="吴胜斌,simbawu">
      <title>数字键盘</title>
  </head>
  <body>
  <div id="values"></div>
  <div id="app"></div>
  </body>
  </html>`);

propagateToGlobal(window);

function propagateToGlobal(window) {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) continue;
    if (key in global) continue;
    global[key] = window[key];
  }
}

const DigitalKeyboard = require('../build/Keyboard').default;

describe('mocha tests', function() {

  let inputValue, currentValue = '', tempValue = '';

  before(function() {
    inputValue = function(value) {
      document.querySelector('#values').innerHTML = value;
      currentValue = value;
    };
  });

  ['idcard', 'integer', 'phone', 'normal'].forEach(function(keyboardType) {
    it('render correct', function() {
      tempValue = '';
      switch (keyboardType) {
        case 'integer':
          new DigitalKeyboard({el: document.querySelector('#app'), type: keyboardType, inputValue: inputValue});
          expect(document.querySelectorAll('button')[9].innerHTML).be.equal('清空');
          break;
        case 'phone':
          new DigitalKeyboard({el: document.querySelector('#app'), type: keyboardType, inputValue: inputValue});
          expect(document.querySelectorAll('button')[9].innerHTML).be.equal('清空');
          break;
        case 'idcard':
          new DigitalKeyboard({el: document.querySelector('#app'), type: keyboardType, inputValue: inputValue});
          expect(document.querySelectorAll('button')[9].innerHTML).be.equal('X');
          break;
        default:
          new DigitalKeyboard({el: document.querySelector('#app'), type: keyboardType, inputValue: inputValue});
          expect(document.querySelectorAll('button')[9].innerHTML).be.equal('.');
          break;
      }
    });

    it('get correct value', function() {
      document.querySelectorAll('button').forEach(function(itemKey) {
        let event = document.createEvent('HTMLEvents');
        event.initEvent('touchend', true, true);
        itemKey.dispatchEvent(event);
        let action = itemKey.getAttribute('data-action'), content = itemKey.getAttribute('data-content');
        switch (action) {
          case 'delete':
            tempValue = tempValue.substr(0, tempValue.length - 1);
            break;
          case 'clear':
            tempValue = '';
            break;
          default:
            switch (keyboardType) {
              case 'phone':
                if (tempValue.length < 11) {
                  tempValue += content;
                }
                break;
              case 'idcard':
                if (tempValue.length < 18) {
                  tempValue += content;
                }
                break;
              default:
                tempValue += content;
            }
            break;
        }

        expect(currentValue).to.be.equal(tempValue);
      });

      document.querySelector('#app').innerHTML = '';
    });

  });

});

