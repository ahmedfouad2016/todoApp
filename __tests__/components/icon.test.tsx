/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Icon} from '@components/Icon';

import {render} from '@testing-library/react-native';

describe('Icon Component', () => {
  it('should Icon render ', () => {
    const wrapper = render(<Icon icon="add" size={25} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should Icon size reflect on width and height', () => {
    const result = {height: 25, width: 25};
    const {getByTestId} = render(<Icon icon="add" size={25} />);
    const img = getByTestId('icon-image');
    expect(img.props.style).toMatchObject(result);
  });
});
