import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { connect } from "react-redux";
import { NoteEntryForm } from '../../commons/entry-form/entry-form-component.commons';

class AddNotePageContainer extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h5>Create a Note</h5>
                <NoteEntryForm />
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export const AddNotePage = connect(
    null,
    mapDispatchToProps
)(AddNotePageContainer);