import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { connect } from "react-redux";
import { NoteEntryForm } from '../../commons/entry-form/entry-form-component.commons';

class EditNotePageContainer extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return (
            <div>
                <h5>Edit Note</h5>
                <NoteEntryForm />
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/add-note')
  }, dispatch)
  
  export const EditNotePage = connect(
    null, 
    mapDispatchToProps
  )(EditNotePageContainer);