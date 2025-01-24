import { render, screen } from '@testing-library/react';

import { App } from '@/App.tsx';

describe('App', () => {
  it('renders', () => {
    render(<App />);

    expect(screen.queryByText('React Vite Template')).toBeTruthy();
  });
});
