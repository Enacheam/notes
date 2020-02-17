import React from 'react';
import { shallow } from 'enzyme';
import { HomePageContainer } from './home.page';

describe('HomePage Component', ()=>{
    test('Should display Header and NotesPage components', ()=>{
        const getAllNotes = ()=>{};
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
        const wrapper = shallow(<HomePageContainer notes={notes} getAllNotes={getAllNotes} />);
        const headerComponent = wrapper.find('Header');
        expect(headerComponent).not.toBeUndefined();

        const notesPageComponent = wrapper.find('NotesPage');
        expect(notesPageComponent).not.toBeUndefined();
    });
});