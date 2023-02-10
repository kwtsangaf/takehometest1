import { render } from '@testing-library/react';

import AirportsPage from './airports-page';

describe('AirportsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AirportsPage />);
    expect(baseElement).toBeTruthy();
  });
});
