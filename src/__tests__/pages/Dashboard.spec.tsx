import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../../pages/Dashboard';

import { MemoryRouter} from 'react-router-dom'

describe('Dashboard', () => {

  it('should be able to verify the existence of some components', async () => {

    const { getByTestId } = render(<Dashboard />, {wrapper: MemoryRouter})

    const img_header = getByTestId('img-header');
    const button = getByTestId('button_signout');
    const button_new = getByTestId('button_new');
    
  
    expect(img_header).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button_new).toBeInTheDocument();

  });
});