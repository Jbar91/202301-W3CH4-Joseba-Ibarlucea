/* eslint-disable no-unused-vars */

import { Component } from '../component/component';

export class Header extends Component {
  constructor(public selector: string, public title: string = 'My series') {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
      <header class="main-header">
        <h1 class="main-title">${this.title}</h1>
      </header>
      <main class="main">
      </main>
    `;
  }
}
