import React from 'react';
import { shallow } from 'enzyme';
import { EditNotePageContainer } from './edit.page';

describe('EditPage Component', ()=>{
    test('Should have Edit title', ()=>{
        const wrapper = shallow(<EditNotePageContainer />);
        const title = wrapper.find('h5').text();
        expect(title).toEqual('Edit Note');
    });
});