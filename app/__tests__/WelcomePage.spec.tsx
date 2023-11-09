import React from 'react';
import {screen, render} from '@testing-library/react-native';

import WelcomePage from '../index';

describe('[WelcomePage]', () => {
  test('should render WonderBody title', () => {
    render(<WelcomePage />);

    const title = screen.findByText('WonderBody');
    expect(title).toBeTruthy();
  });
});
