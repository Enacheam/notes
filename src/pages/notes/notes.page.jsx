import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { NoteItem } from "../../commons/note-item/note-item.component";


class NotesPageContainer extends Component {

    render() {
        const notes = this.props.notes;

        if (notes.length > 0) {
            const noteItems = notes.map((note) =>
                <NoteItem key={note.noteId.toString()} note={note} />
            );

            return (
                <div className="notes-container">
                    <div className="container">
                        {noteItems}
                    </div>
                </div>
            );
        }

        return <div>No notes available, click Add Note to create your first note</div>;
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export const NotesPage = connect(
    null,
    mapDispatchToProps
)(NotesPageContainer);