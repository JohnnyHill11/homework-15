'use strict';

class Tabset {
  static TITLE_CLASS = 'tabset-title';
  static BODY_CLASS = 'tabset-body';
  static TITLE_ITEM_CLASS = 'tabset-title-item';
  static BODY_ITEM_CLASS = 'tabset-body-item';
  static ACTIVE_CLASS = 'active';

  constructor(element) {
    this._element = element;
    this.bindClassTitle(element);
    this.bindClassBody(element);
    this.bindEventListener(element);
    
    element.firstElementChild.addEventListener('click', (e) => this.cliclHandler);
  }
    
    bindClassTitle(element) {
      const tabsetTitle = element.children[0];
      tabsetTitle.classList.add(Tabset.TITLE_CLASS);

      Array.prototype.forEach.call(tabsetTitle.children,(tabsetTitleItem) => {
        tabsetTitleItem.classList.add(Tabset.TITLE_ITEM_CLASS);
      });
    }

    bindClassBody(element) {
      const tabsetBody = element.children[1];
      tabsetBody.classList.add(Tabset.BODY_CLASS);

      Array.prototype.forEach.call(tabsetBody.children,(tabsetBodyItem) => {
        tabsetBodyItem.classList.add(Tabset.BODY_ITEM_CLASS);
      });
    }
    
    bindEventListener(element) {
      element.children[0].addEventListener('click',this.cliclHandler);
    }

    cliclHandler(event) {
    let itemBody = event.target.parentElement.parentElement;
    let bodyEl = itemBody.children[1].children;

    Array.prototype.forEach.call(bodyEl,(tabsetBodyItem) => {
      tabsetBodyItem.classList.add(Tabset.ACTIVE_CLASS);
    });  
  }
}