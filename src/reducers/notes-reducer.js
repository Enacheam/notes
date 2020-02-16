/**
 * Notes Reducer
 */

import {
    REQUEST_CREATE_NOTE_INITIATED,
    REQUEST_CREATE_NOTE_COMPLETED,
    NOTE_CREATED,
    NOTE_CREATION_FAILED,
    REQUEST_RETRIEVE_ALL_NOTES_INITIATED,
    ALL_NOTES_RETRIEVED,
    ALL_NOTES_RETRIEVAL_FAILED,
    REQUEST_EDIT_NOTE_INITIATED,
    NOTE_EDITED,
    NOTE_EDIT_FAILED,
    SELECT_NOTE_FOR_EDIT,
    NOTE_RETRIEVED,
    NOTE_RETRIEVAL_FAILED
} from '../constants/notes.action-types';

const initialNotesState = {
    isLoading: true,
    noteToEdit: null,
    notes: []
};

export default (state = initialNotesState, action) => {
    switch (action.type) {
        case REQUEST_CREATE_NOTE_INITIATED:
            return {
                ...state,
                isLoading: true
            };

        case REQUEST_CREATE_NOTE_COMPLETED:
            return {
                ...state,
                isLoading: false
            };

        case NOTE_CREATED:
            return {
                ...state,
                isLoading: false
            };

        case NOTE_CREATION_FAILED:
            return {
                ...state,
                isLoading: false
            };
        case REQUEST_RETRIEVE_ALL_NOTES_INITIATED:
            return {
                ...state,
                isLoading: true
            };
        case ALL_NOTES_RETRIEVED:
            return {
                ...state,
                notes: action.payload,
                isLoading: false
            };

        case ALL_NOTES_RETRIEVAL_FAILED:
            return {
                ...state,
                isLoading: false
            };

        case SELECT_NOTE_FOR_EDIT:
            const note = state.notes.find((el) => {
                return el.noteId === action.noteId;
            });

            return {
                ...state,
                isLoading: false,
                noteToEdit: note
            };

        case REQUEST_EDIT_NOTE_INITIATED:
            return {
                ...state,
                isLoading: true
            };

        case NOTE_EDITED:
            return {
                ...state,
                isLoading: false
            };

        case NOTE_EDIT_FAILED:
            return {
                ...state,
                isLoading: false
            };

        case NOTE_RETRIEVED:
            return {
                ...state,
                detailNote: action.payload,
                isLoading: false
            };
        case NOTE_RETRIEVAL_FAILED:
            return {
                ...state,
                detailNote: null,
                isLoading: false
            };

        default:
            return {
                ...state
            };
    }
}