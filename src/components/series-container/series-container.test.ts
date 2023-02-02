import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { SeriesContainer } from './series-container';

describe('Given the SeriesContainer component', () => {
  document.body.innerHTML = '<slot></slot>';
  const element = new SeriesContainer('slot');
  describe('When it`s instantiated', () => {
    test('Then it should render', () => {
      expect(element).toBeInstanceOf(SeriesContainer);
    });
    test('The it should contain a h2 with a series list title', () => {
      const h2 = screen.getByRole('heading', { name: 'Series list' });
      expect(h2).toBeInTheDocument();
    });
  });
});
