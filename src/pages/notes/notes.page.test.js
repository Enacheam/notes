import React from 'react';
import { shallow } from 'enzyme';
import { NotesPageContainer } from './notes.page';


describe('NotesPage Component', ()=>{
    test('Should render list of notes', ()=>{
        const notes = [
            {
                noteId: 1,
                title: 'Test Note 1',
                subTitle: 'List 1',
                insertedDate: '2020-02-15',
                decription: 'Description for test note 1'
            },
            {
                noteId: 2,
                title: 'Test Note 2',
                subTitle: 'List 2',
                insertedDate: '2020-02-16',
                decription: 'Description for test note 2'
            }
        ];
        const wrapper = shallow(<NotesPageContainer notes={notes} />); 
        const numberOfListRendered = wrapper.find('.container').children().length;
        expect(numberOfListRendered).toEqual(2);
    });

    test('Should render blank state message', ()=>{
        const notes = [];
        const wrapper = shallow(<NotesPageContainer notes={notes} />);
        const message = wrapper.find('div').text();
        expect(message).toEqual('No notes available, click Add Note to create your first note'); 
    });
});



describe('NotesPage Component', ()=>{
    test('', ()=>{

    });
});