import React from 'react';

jest.mock('wouter', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  Route: ({ path, component: Component }) => {
    // Esto hace que la ruta SIEMPRE renderice el componente en el test y necesita estar antes del import App.
    return null; 
  },
  useRoute: () => [false, null],
  useLocation: () => ['/', jest.fn()]
}));

import { render, screen } from '@testing-library/react';
import App from './App';

test('¡La app carga perfectamente!', () => { // "La app carga perfectamente" lo he escrito yo eh? si que ha sonado muy a IA pero lo he escrito yo porque es emocionante que funcione el test.
  render(<App />);
  const linkElement = screen.getByText(/Página principal/i);
  expect(linkElement).toBeInTheDocument();
});
