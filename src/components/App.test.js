import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('<App />', () => {
  const app = mount(<App />);

  test('Render del componente App', () => {
    expect(app.length).toEqual(1);
  });

  test('Render del título', () => {
    expect(app.find('h1').text()).toEqual('Changes in app!');
  });
});
