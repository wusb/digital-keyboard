import s from './Keyboard.scss';

class DigitalKeyboard {
  constructor(options = {}) {
    this.value = '';
    this.options = {
      language: 'chinese',
      clearName: '清空'
    };

    Object.assign(this.options, options);

    this.init(options);
  }

  handleClick(action, content) {
    let { options } = this;

    switch (action) {
      case 'delete':
        this.value = this.value.substr(0, this.value.length - 1);
        break;
      case 'clear':
        this.value = '';
        break;
      default:
        switch (options.type) {
          case 'phone':
            if (this.value.length < 11) {
              this.value += content;
            }
            break;
          case 'idcard':
            if (this.value.length < 18) {
              this.value += content;
            }
            break;
          case 'integer':
            if (options.integerDigits && options.integerDigits <= this.value.length) {
              this.value = this.value;
            } else {
              this.value += content;
            }
            break;
          default:
            let _value = this.value + content;
            let _valueArr = _value.split('.');
            let integerDigits = _valueArr[0] && _valueArr[0].length || 0;
            let decimalDigits = _valueArr[1] && _valueArr[1].length || 0;
            let integerPass = !options.integerDigits || options.integerDigits >= integerDigits;
            let decimalPass = !options.decimalDigits || options.decimalDigits >= decimalDigits;
            if (_valueArr.length === 1 && integerPass) {
              this.value += content;
            } else if (_valueArr.length === 2 && decimalPass) {
              this.value += content;
            } else {
              this.value = this.value;
            }

        }
        break;
    }

    options.inputValue(this.value);
  }

  handleClearName() {
    const { language } = this.options;
    let clearName = '清空';
    switch (language) {
      case 'chinese':
        clearName = '清空';
        break;
      case 'english':
        clearName = 'Clear';
        break;
      default:
        clearName = '清空';
    }
    this.options.clearName = clearName;
  }

  initKeys(type) {
    const { clearName } = this.options;
    let typeKey = {};
    switch (typeKey) {

    }
    switch (type) {
      case 'integer':
        typeKey = {
          content: clearName,
          action: 'clear'
        };
        break;
      case 'phone':
        typeKey = {
          content: clearName,
          action: 'clear'
        };
        break;
      case 'idcard':
        typeKey = {
          content: 'X',
          action: 'value'
        };
        break;
      default:
        typeKey = {
          content: '.',
          action: 'value'
        };
        break;
    }

    this.items = [
      {
        'content': '1',
        'action': 'value'
      }, {
        'content': '2',
        'action': 'value'
      }, {
        'content': '3',
        'action': 'value'
      }, {
        'content': '4',
        'action': 'value'
      }, {
        'content': '5',
        'action': 'value'
      }, {
        'content': '6',
        'action': 'value'
      }, {
        'content': '7',
        'action': 'value'
      }, {
        'content': '8',
        'action': 'value'
      }, {
        'content': '9',
        'action': 'value'
      }, typeKey, {
        'content': '0',
        'action': 'value'
      }, {
        'content': '&larr;',
        'action': 'delete'
      }
    ];
  }

  _renderKeyboard(container) {
    const { clearName } = this.options;
    let className = '';
    let keyboards = this.items.map((item) => {
      switch (item.content) {
        case 'X':
          className = s.keyX;
          break;
        case clearName:
          className = s.keyClear;
          break;
        case '&larr;':
          className = s.keyDelete;
          break;
        default:
          className = '';
          break;
      }

      return `<button ontouchstart="" class="${className}" data-action="${item.action}" data-content="${item.content}">${item.content}</button>`;
    });

    const keyboardBox = document.createElement('div');
    keyboardBox.className = `${s.keyboard} ${this.options.className}`;
    keyboardBox.innerHTML = keyboards.join('');
    keyboardBox.addEventListener('touchend', (e) => {
      let {action, content} = e.target.dataset;
      this.handleClick(action, content);
    });

    container.appendChild(keyboardBox);
  }

  init(options) {
    this.handleClearName();
    this.initKeys(options.type);
    this._renderKeyboard(options.el);
  }
}

export default DigitalKeyboard;
