import React from 'react';
import App from './App';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';

describe('App Component', ()=>{
  test('Routes', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ).dive();
    
    expect(wrapper.find('Route')).not.toBeUndefined();
  });
});

