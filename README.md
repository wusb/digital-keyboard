# DigitalKeyboard 数字键盘
轻量级、无依赖数字键盘

[![Build Status](https://travis-ci.org/simbawus/DigitalKeyboard.svg?branch=master)](https://travis-ci.org/simbawus/DigitalKeyboard)
[![Coverage Status](https://coveralls.io/repos/github/simbawus/DigitalKeyboard/badge.svg?branch=master)](https://coveralls.io/github/simbawus/DigitalKeyboard?branch=master)
[![npm](https://img.shields.io/npm/v/digital-keyboard.svg)](https://www.npmjs.com/package/digital-keyboard)
[![npm](https://img.shields.io/npm/dt/digital-keyboard.svg)](https://www.npmjs.com/package/digital-keyboard)
[![GitHub license](https://img.shields.io/github/license/simbawus/DigitalKeyboard.svg)](https://github.com/simbawus/DigitalKeyboard/blob/master/LICENSE)

## Getting Started

### Install

```shell
yarn add digital-keyboard --dev
```

### Usage Example

- **原生 JavaScript**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="author" content="吴胜斌,simbawu">
  <title>数字键盘</title>
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

