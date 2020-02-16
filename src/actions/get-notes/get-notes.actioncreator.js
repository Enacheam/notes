/**
 * Action creators for getting notes
 */
import { 
    REQUEST_RETRIEVE_ALL_NOTES_INITIATED,
    ALL_NOTES_RETRIEVED,
    ALL_NOTES_RETRIEVAL_FAILED,
    NOTE_RETRIEVED,
    NOTE_RETRIEVAL_FAILED
} from '../../constants/notes.action-types';


const url = 'http://localhost:8080/smart-note-app/notes';

export const getAllNotes = ()=>{
   return (dispatch)=>{
       dispatch(initiateRetrieveAllNotesRequest('sending request to retrieve all notes'));
       return retrieveNotes()
       .then(
           (success)=>{
               dispatch(allNotesRetrievedSuccessfully('request completed successfully',  success.data));
           },
           (error)=>{
               dispatch(failedToRetrieveAllNotes('failed to retrieve all notes'));
           }
       );
   };
}


export const getNoteUsingId = (id)=>{
    return (dispatch)=>{
        return retrieveNoteDetails(id)
        .then(
            (success)=>{
                dispatch(noteDetailObtainedAction('completed successfully', success))
            },
            ()=>{
                console.log("In the failure fxn");
                dispatch(noteDetailFailedAction('failed to complete'));
            }
        );
    };
};

/////////////////////////////////////////////////////////////////////////////////////////////////////

async function retrieveNotes(){
    const res = await fetch(url + '/all-notes', 
    {
       method: 'GET',
       headers: {
          'Content-Type': 'application/json'
       }
   });

   return await res.json();
}

async function retrieveNoteDetails(id){
    const res = await fetch(url + '/retrieve/note-id/'+ id, 
    {
       method: 'GET',
       headers: {
          'Content-Type': 'application/json'
       }
   });

   if(res.ok){
    return await res.json();
   }

   throw new Error(res.json());
   
}


function initiateRetrieveAllNotesRequest(description){
    return{
       type: REQUEST_RETRIEVE_ALL_NOTES_INITIATED,
       description
    };
}


function allNotesRetrievedSuccessfully(description, payload){
   return{
       type: ALL_NOTES_RETRIEVED,
       description,
       payload
   };
}


function failedToRetrieveAllNotes(description){
   return{
       type: ALL_NOTES_RETRIEVAL_FAILED,
       description
   };
}

 function noteDetailObtainedAction(description, payload){
    return{
        type: NOTE_RETRIEVED,
        description,
        payload
    };
 }

 function noteDetailFailedAction(description, payload){
    return{
        type: NOTE_RETRIEVAL_FAILED,
        description,
        payload
    };
 }