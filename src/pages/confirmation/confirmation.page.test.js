import React from 'react';
import { shallow } from 'enzyme';
import { NoteConfirmationPageContainer } from './confirmation.page';

describe('ConfirmationPage Component', ()=>{
    test('Should have text and Ok button', ()=>{
        const navToHomePageAsync = ()=>{};
        const navToHomePage = ()=>{};
        const wrapper = shallow(<NoteConfirmationPageContainer navToHomePageAsync={navToHomePageAsync}navToHomePage={navToHomePage} />);

        const message = wrapper.find('p').text();
        expect(message).toEqual('Your note has been created successfully!');

        const okButton = wrapper.find('button').text();
        expect(okButton).toEqual('OK');
    });
});