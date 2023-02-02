/* eslint-disable no-unused-vars */

import { SERIES } from '../../mocks/series';
import { SerieStructure } from '../../models/serie';
import { Component } from '../component/component';

export class SeriesCard extends Component {
  constructor(public selector: string, public series: SerieStructure[]) {
    super();
    this.template = this.createTemplate();
    this.series = SERIES;
    this.render('beforeend');
  }

  private createTemplate() {
    const series = this.series.map(
      (item) => `
      <li class="serie">
    <img
      class="serie__poster"
      src="${item.poster}"
      alt="${item.posterAlt}"
    />
    <h4 class="serie__title">${item.title} ---</h4>
    <p class="serie__info">${item.info}</p>
    <ul class="score">
      <li class="score__star">
        <i class="icon--score fas fa-star" title="1/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score fas fa-star" title="2/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score fas fa-star" title="3/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score fas fa-star" title="4/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score fas fa-star" title="5/5"></i>
      </li>
    </ul>
    <i class="fas fa-times-circle icon--delete"></i>
    </li>
    `
    );
    return `${series.join('')}`;
  }
}
