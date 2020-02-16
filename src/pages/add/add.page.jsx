import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { createNote } from '../../actions/add/add.actioncreator';
import { NoteEntryForm } from '../../commons/entry-form/entry-form-component.commons';

class AddNotePageContainer extends Component {

    render() {
        return (
            <div>
                <h5>Create a Note</h5>
                <NoteEntryForm isForEdit={false} execute={this.props.createNote} executeTitle={'ADD NOTE'} />
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({
    createNote
}, dispatch);

export const AddNotePage = connect(
    null,
    mapDispatchToProps
)(AddNotePageContainer);