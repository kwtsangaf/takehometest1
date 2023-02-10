import { render } from '@testing-library/react';

import StadiumsPage from './stadiums-page';

describe('StadiumsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StadiumsPage />);
    expect(baseElement).toBeTruthy();
  });
});
