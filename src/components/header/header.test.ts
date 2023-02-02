import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given the header component', () => {
  document.body.innerHTML = '<slot></slot>';
  const element = new Header('slot');
  describe('When the component is instantiated', () => {
    test('Then it should render ', () => {
      expect(element).toBeInstanceOf(Header);
    });
    test('Then it should render with a h1', () => {
      const h1 = screen.getByRole('heading');
      expect(h1).toBeInTheDocument();
    });
  });
});
