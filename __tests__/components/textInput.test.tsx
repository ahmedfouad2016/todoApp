import 'react-native';
import React from 'react';
import {TextInput} from '@components/TextInput';

import {fireEvent, render} from '@testing-library/react-native';

describe('TextInput Component', () => {
  it('should TextInput render ', () => {
    const wrapper = render(<TextInput onChangeText={() => null} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should TextInput display placeholder', () => {
    const placeholder = 'add list name';
    const {queryByPlaceholderText} = render(
      <TextInput onChangeText={() => null} placeholder={placeholder} />,
    );
    const comp = queryByPlaceholderText(placeholder);
    expect(comp).not.toBeNull();
  });

  it('should TextInput display default value', () => {
    const value = 'my list';
    const {queryByDisplayValue} = render(
      <TextInput onChangeText={() => null} value={value} />,
    );
    const comp = queryByDisplayValue(value);
    expect(comp).not.toBeNull();
  });

  it('should TextInput inputStyle reflect text input style', () => {
    const result = {height: 300, margin: 25};
    const {getByTestId} = render(
      <TextInput onChangeText={() => null} inputStyle={result} />,
    );
    const comp = getByTestId('text-input');
    expect(comp.props.style).toMatchObject(result);
  });

  it('should fire onChangeText event', () => {
    const onChangeFn = jest.fn();
    const param = 'my list';
    const {getByTestId} = render(<TextInput onChangeText={onChangeFn} />);
    fireEvent(getByTestId('text-input'), 'onChangeText', param);
    expect(onChangeFn).toHaveBeenCalled();
    expect(onChangeFn).toHaveBeenCalledWith(param);
  });
});
