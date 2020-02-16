/**
 * Add Note action creator
 */
import { push } from 'connected-react-router';
import {REQUEST_CREATE_NOTE_INITIATED, 
    REQUEST_CREATE_NOTE_COMPLETED,
    NOTE_CREATED,
    NOTE_CREATION_FAILED
 } from '../../constants/notes.action-types';

 export const createNote = (note)=>{
    return (dispatch)=>{
        dispatch(initiateCreateNoteRequest('sending request to create not'));
        return postNote(note)
        .then(
            (success)=>{
                dispatch(createNoteRequestCompleted('request completed successfully'));
                dispatch(noteCreatedSuccessfully('note created successfully'));
                dispatch(push('/confirmation'));
            },
            (error)=>{
                dispatch(noteFailedTobeCreated('failed to create note'));
            }
        );
    };
 }

 /////////////////////////////////////////////////////////////////////////////////////////////////////

 /**
  * Makes service calls to backend to create note
  * @param {object} note 
  */
 async function postNote(note={}){
     const res = await fetch('http://localhost:8080/smart-note-app/notes/add-note', 
     {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    });

    return await res.json();
 }


 /**
  * Action for initiating a new note creation
  * @param {string} description 
  */
 function initiateCreateNoteRequest(description){
     return{
        type: REQUEST_CREATE_NOTE_INITIATED,
        description
     };
 }

 
 /**
  * Action for when a note creation request is completed
  * @param {string} description 
  */
function createNoteRequestCompleted(description){
    return{
        type: REQUEST_CREATE_NOTE_COMPLETED,
        description: description
    };
}

/**
 * Action for when a note is created successfully
 * @param {string} description 
 */
function noteCreatedSuccessfully(description){
    return{
        type: NOTE_CREATED,
        description
    };
}

/**
 * Action for when note creation fails
 * @param {string} description 
 */
function noteFailedTobeCreated(description){
    return{
        type: NOTE_CREATION_FAILED,
        description
    };
}