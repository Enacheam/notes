import React from 'react';
import { shallow } from 'enzyme';
import { NoteDetails } from './note-detail.page';

describe('NoteDetails Component', ()=>{
    test('should render notes details', ()=>{
        const note = {
            noteId: 1,
            title: 'Test Note 1',
            subTitle: 'List 1',
            insertedDate: '2020-02-15',
            description: 'Description for test note 1'
        };

        const getNoteUsingId = (id)=>{

        };
        const wrapper = shallow(<NoteDetails  note={note} getNoteUsingId={getNoteUsingId} />);
        const defPageText = wrapper.find('h1').text();
        expect(defPageText).toEqual('Note Details');
        
        const noteTitle = wrapper.find('h2').text();
        expect(noteTitle).toEqual(note.title);

        const noteSubTitle = wrapper.find('h5').text();
        expect(noteSubTitle).toEqual(note.subTitle);

        const noteDescription = wrapper.find('p').text();
        expect(noteDescription).toEqual(note.description);
    });

    test('Should render blank state message', ()=>{
        const note = null;
        const getNoteUsingId = (id)=>{ };
        const wrapper = shallow(<NoteDetails  note={note} getNoteUsingId={getNoteUsingId} />);
        const message = wrapper.find('h2').text();
        expect(message).toEqual('No available note matches this id, please check the id and try again');
    });
});