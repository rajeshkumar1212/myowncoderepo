import React from 'react';
import { shallow } from 'enzyme';
import User from './User';

describe('<User />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<User />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
