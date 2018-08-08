# Digital Keyboard

[![Build Status](https://travis-ci.org/simbawus/digital-keyboard.svg?branch=master)](https://travis-ci.org/simbawus/digital-keyboard)
[![Coverage Status](https://coveralls.io/repos/github/simbawus/digital-keyboard/badge.svg?branch=master)](https://coveralls.io/github/simbawus/digital-keyboard?branch=master)
[![npm](https://img.shields.io/npm/v/digital-keyboard.svg)](https://www.npmjs.com/package/digital-keyboard)
[![npm](https://img.shields.io/npm/dt/digital-keyboard.svg)](https://www.npmjs.com/package/digital-keyboard)
[![GitHub license](https://img.shields.io/github/license/simbawus/digital-keyboard.svg)](https://github.com/simbawus/digital-keyboard/blob/master/LICENSE)

###### [中文README](README-zh_CN.md)

- Develop with native javascript, doesn't rely on any frameworks and libraries.
- Support ID card, mobile number, integer, decimal, etc.
- Easy API, easy use.
- Development summary：[How to release a npm package](https://github.com/simbawus/blog/issues/12).

[![Example](https://i.loli.net/2018/05/16/5afc5086957b3.gif)](https://i.loli.net/2018/05/16/5afc5086957b3.gif)

## Type

<table>
  <tbody>
    <tr>
      <td align="center" valign="middle">
        <img width="240px" src="https://i.loli.net/2018/05/16/5afc5360a4c21.jpg">
        <p>decimal</p>
      </td>
      <td align="center" valign="middle">
        <img width="240px" src="https://i.loli.net/2018/05/17/5afc59314b61c.jpg">
        <p>integer/phone</p>
      </td>
      <td align="center" valign="middle">
        <img width="240px" src="https://i.loli.net/2018/05/16/5afc5360c635f.jpg">
        <p>idcard</p>
      </td>
    </tr>
  </tbody>
</table>

## PropTypes

| Property      | Type     | Default | Description                              |
| :------------ | :------- | :------ | :--------------------------------------- |
| el            | DOM      |         | parent node                              |
| className     | String   |         | additonal class to control keyboard's style |
| type          | String   | decimal | decimal，integer，phone，idcard             |
| language      | String   | chinese | chinese，english                         |
| inputValue    | Function |         | return keyboard value                    |
| integerDigits | Number   |         | limit integer digits                     |
| decimalDigits | Number   |         | limit decimal digits                     |

## Getting Started

### Install

```shell
yarn add digital-keyboard --dev
```

### Usage Example

- **Native JavaScript**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="author" content="simbawu">
  <title>Digital Keyboard</title>
  <style>
    .container {
      color: #333;
    }
  </style>
</head>
<body>
  <div id="values"></div>
  <div id="app"></div>
  <script src="./digitalKeyboard.js"></script>
</body>
</html>
```

```javascript
//digitalKeyboard.js
import DigitalKeyboard from 'digital-keyboard';

function inputValue(value){
  console.log(value); //DigitalKeyboard return value
  document.querySelector('#values').innerHTML = value;
}

new DigitalKeyboard(
    {
        el: document.querySelector('#app'),
        className: 'container',
        type: 'idcard',
        inputValue: inputValue,
        integerDigits: 4,
        decimalDigits: 2
    }
);
```

- **React**

```jsx
import React from 'react';
import DigitalKeyboard from 'digital-keyboard';
import s from './digitalKeyboard.scss';

class KeyboardPage extends React.Component {

  constructor(){
    super();

    this.inputValue = this.inputValue.bind(this);
    this._renderKeyboard = this._renderKeyboard.bind(this);
  }

  componentDidMount(){
    this._renderKeyboard();
  }

  inputValue(value){
    console.log(value); //DigitalKeyboard return value
  }

  _renderKeyboard(){
    return new DigitalKeyboard (
      {
        el: this.refs.digitalKeyboard,
        className: s.container,
        type: 'number',
        inputValue: this.inputValue,
        integerDigits: 4,
        decimalDigits: 2
      }
    );
  }

  render(){
    return (
      <div ref='digitalKeyboard'></div>
    )
  }
}

export default KeyboardPage;
```

- **Vue**

```js
<template>
  <div></div>
</template>
<style scoped lang="less">
    .container {
        color: #333;
    }
</style>
<script>
import DigitalKeyboard from "digital-keyboard";
export default {
  mounted () {
    this._renderDigitalKeyboard();
  },
  methods: () {
    _renderDigitalKeyboard() {
    	return new DigitalKeyboard (
          {
            el: this.$el,
            className: 'container',
            type: 'number',
            inputValue: this.inputValue,
            integerDigits: 4,
            decimalDigits: 2
          }
        );
    },

    inputValue(value) {
      console.log(value); //DigitalKeyboard return value
    }
  }
}
</script>
```
* **Angular**

```typescript
// Online-demo: https://stackblitz.com/edit/angular-hkexnq
import { Component, ViewChild, OnInit, ViewEncapsulation} from '@angular/core';
import DigitalKeyboard from "digital-keyboard";

@Component({
  selector: 'my-app',
  template: `
   <div #keyboard></div>
  `,
  styles: [`
    .container {
        color: #333;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  implements OnInit{

  @ViewChild('keyboard') keyboard;

  ngOnInit(){
    this._renderDigitalKeyboard();
  }

  _renderDigitalKeyboard(){
    return new DigitalKeyboard (
          {
            el: this.keyboard.nativeElement,
            className: 'container',
            type: 'number',
            inputValue: this.inputValue,
            integerDigits: 4,
            decimalDigits: 2
          }
        );
  }

  inputValue(value) {
    console.log(value); //DigitalKeyboard return value
  }
}
```

## How to Contribute

Anyone and everyone is welcome to contribute to this project. The best way to start is by checking our [open issues](https://github.com/simbawus/DigitalKeyboard/issues),[submit a new issues](https://github.com/simbawus/DigitalKeyboard/issues/new?labels=bug) or [feature request](https://github.com/simbawus/DigitalKeyboard/issues/new?labels=enhancement), participate in discussions, upvote or downvote the issues you like or dislike.

## License

[**The MIT License**](http://opensource.org/licenses/MIT).

