# Digital Keyboard

[![Build Status](https://travis-ci.org/simbawus/DigitalKeyboard.svg?branch=master)](https://travis-ci.org/simbawus/DigitalKeyboard)
[![Coverage Status](https://coveralls.io/repos/github/simbawus/DigitalKeyboard/badge.svg?branch=master)](https://coveralls.io/github/simbawus/DigitalKeyboard?branch=master)
[![npm](https://img.shields.io/npm/v/digital-keyboard.svg)](https://www.npmjs.com/package/digital-keyboard)
[![npm](https://img.shields.io/npm/dt/digital-keyboard.svg)](https://www.npmjs.com/package/digital-keyboard)
[![GitHub license](https://img.shields.io/github/license/simbawus/DigitalKeyboard.svg)](https://github.com/simbawus/DigitalKeyboard/blob/master/LICENSE)

###### [中文README](README-zh_CN.md)

- Develop with native javascript, doesn't rely on any frameworks and libraries.
- Support ID card, mobile number, integer, decimal, etc.
- Easy API, easy use.
- Development summary：[How to release a Digital Keyboard npm package](https://github.com/simbawus/blog/issues/12).

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

| Property        | Type     | Default      | Description           |
| :-------------- | :------- | :----------- | :-------------------- |
| el | DOM |  | parent node  | 
| type  | String   | decimal | decimal，integer，phone，idcard |
| inputValue    | Function   |  |  return keyboard value      |

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
        type: 'idcard', 
        inputValue: inputValue
    }
);
```

- **React**

```jsx
import React from 'react';
import DigitalKeyboard from "digital-keyboard";
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
        type: 'number',
        inputValue: this.inputValue
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
            type: 'number',
            inputValue: this.inputValue
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
## How to Contribute

Anyone and everyone is welcome to contribute to this project. The best way to start is by checking our [open issues](https://github.com/simbawus/DigitalKeyboard/issues),[submit a new issues](https://github.com/simbawus/DigitalKeyboard/issues/new?labels=bug) or [feature request](https://github.com/simbawus/DigitalKeyboard/issues/new?labels=enhancement), participate in discussions, upvote or downvote the issues you like or dislike.

## License

[**The MIT License**](http://opensource.org/licenses/MIT).

