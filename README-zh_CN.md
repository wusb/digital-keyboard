# DigitalKeyboard 数字键盘

[![Build Status](https://travis-ci.org/simbawus/DigitalKeyboard.svg?branch=master)](https://travis-ci.org/simbawus/DigitalKeyboard)
[![Coverage Status](https://coveralls.io/repos/github/simbawus/DigitalKeyboard/badge.svg?branch=master)](https://coveralls.io/github/simbawus/DigitalKeyboard?branch=master)
[![npm](https://img.shields.io/npm/v/digital-keyboard.svg)](https://www.npmjs.com/package/digital-keyboard)
[![npm](https://img.shields.io/npm/dt/digital-keyboard.svg)](https://www.npmjs.com/package/digital-keyboard)
[![GitHub license](https://img.shields.io/github/license/simbawus/DigitalKeyboard.svg)](https://github.com/simbawus/DigitalKeyboard/blob/master/LICENSE)

###### [README in English](README.md)

- 原生js开发、不依赖任何框架和库的轻量级移动端数字键盘
- 支持身份证、手机号、整数、小数多类型输入
- API简洁，非常好上手
- 开发总结：[从0开始发布一个无依赖、高质量的键盘npm](https://github.com/simbawus/blog/issues/12)

[![Example](https://i.loli.net/2018/05/16/5afc5086957b3.gif)](https://i.loli.net/2018/05/16/5afc5086957b3.gif)

## 键盘类型

<table>
  <tbody>
    <tr>
      <td align="center" valign="middle">
        <img width="240px" src="https://i.loli.net/2018/05/16/5afc5360a4c21.jpg">
        <p>小数</p>
      </td>
      <td align="center" valign="middle">
        <img width="240px" src="https://i.loli.net/2018/05/17/5afc59314b61c.jpg">
        <p>整数/手机号</p>
      </td>
      <td align="center" valign="middle">
        <img width="240px" src="https://i.loli.net/2018/05/16/5afc5360c635f.jpg">
        <p>身份证</p>
      </td>
    </tr>
  </tbody>
</table>

## 属性

| Property      | Type     | Default | Description                              |
| :------------ | :------- | :------ | :--------------------------------------- |
| el            | DOM      |         | 键盘父节点                                    |
| className     | String   |         | 外部传入可控制键盘样式的class                        |
| type          | String   | decimal | 键盘类型：decimal小数，integer整数，phone手机号，idcard身份证 |
| inputValue    | Function |         | 键盘输入返回值                                  |
| integerDigits | Number   |         | 限制整数位数                                   |
| decimalDigits | Number   |         | 限制小数位数                                   |

## 开始上手

### 安装

```shell
yarn add digital-keyboard --dev
```

### 使用示例

- **原生 JavaScript**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="author" content="吴胜斌,simbawu">
  <title>数字键盘</title>
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
        type: 'idcard',
        className: 'container',
        inputValue: inputValue,
        integerDigits: 4,
        decimalDigits: 2
    }
);
```

- **React**

```jsx
import React from 'react';
import DigitalKeyboard from "digital-keyboard";
import s from './digitalKeyboard.scss;

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
- **Angular**

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

## 如何贡献

欢迎每个人为这个项目做出贡献。可以从查看我们[未解决的问题](https://github.com/simbawus/DigitalKeyboard/issues)、[提交新问题](https://github.com/simbawus/DigitalKeyboard/issues/new?labels=bug)或[提出新功能](https://github.com/simbawus/DigitalKeyboard/issues/new?labels=enhancement)入手，参与讨论投票您喜欢或不喜欢的问题。

## 开源证书

[**The MIT License**](http://opensource.org/licenses/MIT).

