/* eslint-disable no-new */
/* eslint-disable no-unused-vars */

import { SERIES } from '../../mocks/series';
import { Component } from '../component/component';
import { SeriesCard } from '../series-card/series-card';

export class PendingSeries extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforebegin');
  }

  private createTemplate() {
    return `
    <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have 4 series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">
            </ul>
          </section>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    new SeriesCard('.series-list', SERIES);
  }
}
