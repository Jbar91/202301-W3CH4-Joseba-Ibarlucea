/* eslint-disable no-new */
import { Header } from './components/header/header';
import { SeriesContainer } from './components/series-container/series-container';
import { SERIES } from './mocks/series';

console.log(SERIES);

new Header('.container');
new SeriesContainer('.main');
