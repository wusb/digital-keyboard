import s from './index.scss';

class DigitalKeyboard {
  constructor(options = {}){
    this.value = '';
    this.options = {

    };

    Object.assign(this.options, options);

    this.init(options);
  }

  handleClick(action, content){
    let { options } = this;

    switch(action){
      case 'delete':
        this.value = this.value.substr(0, this.value.length - 1);
        break;
      case 'clear':
        this.value = '';
        break;
      default:
        switch (options.type){
          case 'phone':
            if(this.value.length < 11){
              this.value += content;
            }
            break;
          case 'idcard':
            if(this.value.length < 18){
              this.value += content;
            }
            break;
          default:
            this.value += content;
        }
        break;
    }

    options.returnValue(this.value);
  }

  initKeys(type){
    let typeKey = {};
    switch (type){
      case 'number':
        typeKey = {
          content: '清空',
          action: 'clear'
        };
        break;
      case 'phone':
        typeKey = {
          content: '清空',
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
          'action': 'value',
        }, {
          'content': '2',
          'action': 'value',
        }, {
          'content': '3',
          'action': 'value',
        }, {
          'content': '4',
          'action': 'value',
        }, {
          'content': '5',
          'action': 'value',
        }, {
          'content': '6',
          'action': 'value',
        }, {
          'content': '7',
          'action': 'value',
        }, {
          'content': '8',
          'action': 'value',
        }, {
          'content': '9',
          'action': 'value',
        }, typeKey, {
          'content': '0',
          'action': 'value',
        }, {
          'content': '&larr;',
          'action': 'delete',
        }
    ];
  }

  _renderKeyboard(container){
    let className = '';
    let keyboards = this.items.map((item, index) => {
      switch (item.content){
        case 'X':
          className = s.keyX;
          break;
        case '清空':
          className = s.keyClear;
          break;
        default:
          className = '';
          break;
      }

      return `<button class="${className}" data-action="${item.action}" data-content="${item.content}">${item.content}</button>`;
    });

    let keyboardBox = `<div id="keyboardBox" class="${s.keyboard}">${keyboards.join('')}</div>`;

    container.innerHTML = keyboardBox;
    document.querySelector('#keyboardBox').addEventListener('click', (e) => {
      let {action, content} = e.target.dataset;
      this.handleClick(action, content);
    });
  }

  init(options){
    this.initKeys(options.type);
    this._renderKeyboard(options.el);
  }
}

export default DigitalKeyboard;