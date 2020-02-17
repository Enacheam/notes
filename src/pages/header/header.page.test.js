import React from 'react';
import { shallow } from 'enzyme';
import { HeaderContainer } from './header.page';

describe('Header Component', ()=>{
    test('Should have title of the app', ()=>{
        const wrapper = shallow(<HeaderContainer />);
        const appTitle = wrapper.find('h3').text();
        expect(appTitle).toEqual('SimpliNote');
    });

    test('should have add note button', ()=>{
        const wrapper = shallow(<HeaderContainer />);
        const button = wrapper.find('AddNoteButton');
        expect(button).toBeDefined();
    });
});