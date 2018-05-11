const jsdom = require("jsdom");
const { JSDOM } = jsdom;
global.document = new JSDOM('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

var DigitalKeyboard = require('../build/Keyboard');

describe('mocha tests', function () {

    it('has document', function () {
        before(function () {
            function returnValue(value){
                document.querySelector('#values').innerHTML = value;
            }

            new DigitalKeyboard({el: '#app', type: 'idcard', returnValue: returnValue});
        });
    });

});