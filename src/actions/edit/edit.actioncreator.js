/**
 * Edit Note action creator
 */
import { push } from 'connected-react-router';
import {REQUEST_EDIT_NOTE_INITIATED, 
    NOTE_EDITED,
    NOTE_EDIT_FAILED,
    SELECT_NOTE_FOR_EDIT
 } from '../../constants/notes.action-types';

 export const editNote = (note)=>{
    return (dispatch)=>{
        dispatch(initiateEditNoteRequest('sending request to edit note'));
        return updateNote(note)
        .then(
            (success)=>{
                dispatch(noteEditedSuccessfully('request completed successfully'));
                dispatch(push('/confirmation'), success);
            },
            (error)=>{
                dispatch(noteFailedTobeEdited('failed to edit note', error));
            }
        );
    };
 }


export function selectNoteForEdit(noteId){
    return (dispatch)=>{
        dispatch(push('/edit-note'));
        dispatch(selectNoteForEditDispatch(noteId, 'Selecting note for editing'));
    };
}

 /////////////////////////////////////////////////////////////////////////////////////////////////////

 async function updateNote(note={}){
     const res = await fetch('http://localhost:8080/smart-note-app/notes/updates/note', 
     {
        method: 'PUT',
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    });

    return await res.json();
 }


 function selectNoteForEditDispatch(noteId, description){
    return{
       type: SELECT_NOTE_FOR_EDIT,
       description,
       noteId
    };
}
 

 function initiateEditNoteRequest(description){
     return{
        type: REQUEST_EDIT_NOTE_INITIATED,
        description
     };
 }

 
function noteEditedSuccessfully(description, payload){
    return{
        type: NOTE_EDITED,
        description,
        payload
    };
}


function noteFailedTobeEdited(description, payload){
    return{
        type: NOTE_EDIT_FAILED,
        description,
        payload
    };
}