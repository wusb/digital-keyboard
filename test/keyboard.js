const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { document } = (new JSDOM(`...`)).window;
const dom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = new JSDOM(`...`);

import DigitalKeyboard from  '../build/Keyboard';

describe('mocha tests', function () {

    beforeEach(function() {
        // window = global.window;
    });

    it('has document', function () {
        console.log('-----+++++');
        function returnValue(value){
            document.querySelector('#values').innerHTML = value;
        }

        console.log('---------');
        console.log(window);



        new DigitalKeyboard({el: '#app', type: 'idcard', returnValue: returnValue});
    });

});