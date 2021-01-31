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
    this.bindEventListener();
    this.show(0);
  }
    
    bindClassTitle(element) {
      this.tabsetTitle = element.children[0];
      this.tabsetTitle.classList.add(Tabset.TITLE_CLASS);

      Array.prototype.forEach.call(this.tabsetTitle.children,(tabsetTitleItem) => {
        tabsetTitleItem.classList.add(Tabset.TITLE_ITEM_CLASS);
      });
    }

    bindClassBody(element) {
      this.tabsetBody = element.children[1];
      this.tabsetBody.classList.add(Tabset.BODY_CLASS);

      Array.prototype.forEach.call(this.tabsetBody.children,(tabsetBodyItem) => {
        tabsetBodyItem.classList.add(Tabset.BODY_ITEM_CLASS);
      });
    }
    
    bindEventListener() {
      this.tabsetTitle.addEventListener('click',(el) => this.clickHandler(el));
    }

    clickHandler(event) {
      if(event.target.classList.contains(Tabset.TITLE_ITEM_CLASS)) {
      const index = Array.prototype.indexOf.call(this.tabsetTitle.children, event.target); 
      this.show(index);
      } 
    }
    hideAll() {
    for (let i = 0; i < this.tabsetTitle.children.length; i++) {
      this.hide(i);
      }
    }

    hide(index) {
      this.tabsetTitle.children[index].classList.remove(Tabset.ACTIVE_CLASS);
      this.tabsetBody.children[index].classList.remove(Tabset.ACTIVE_CLASS);
  }
  
    show(index) {
      this.hideAll();
      this.tabsetTitle.children[index].classList.add(Tabset.ACTIVE_CLASS);
      this.tabsetBody.children[index].classList.add(Tabset.ACTIVE_CLASS);
    }
}