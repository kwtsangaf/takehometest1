import { render } from '@testing-library/react';

import MapModal from './map-modal';

describe('MapModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MapModal />);
    expect(baseElement).toBeTruthy();
  });
});
