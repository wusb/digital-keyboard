const { JSDOM } = require('jsdom');
const { window } = new JSDOM(`<!DOCTYPE html>
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

function propagateToGlobal (window) {
    for (let key in window) {
        if (!window.hasOwnProperty(key)) continue;
        if (key in global) continue;
        global[key] = window[key];
    }
}

const KeyboardModule = require('../build/Keyboard');
const DigitalKeyboard = KeyboardModule.default;

describe('mocha tests', function () {

    it('has document', function () {
        function returnValue(value){
            document.querySelector('#values').innerHTML = value;
        }

        new DigitalKeyboard({el: document.querySelector('#app'), type: 'idcard', returnValue: returnValue});
    });

});

