import { render } from '@testing-library/react';

import SuaPage from './sua-page';

describe('SuaPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SuaPage />);
    expect(baseElement).toBeTruthy();
  });
});
