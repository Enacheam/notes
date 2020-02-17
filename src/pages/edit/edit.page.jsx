import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { NoteEntryForm } from '../../commons/entry-form/entry-form-component.commons';
import { editNote } from '../../actions/edit/edit.actioncreator';

export class EditNotePageContainer extends Component{

    render(){
        return (
            <div>
                <h5>Edit Note</h5>
                <NoteEntryForm isForEdit={true} execute={this.props.editNote} executeTitle={'EDIT NOTE'}  note={this.props.notesToEdit} />
            </div>
        );
    }
}


const mapStateToProps = ({notesData})=>{
    return{
        notesToEdit: notesData.noteToEdit
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    editNote
  }, dispatch)
  
  export const EditNotePage = connect(
    mapStateToProps, 
    mapDispatchToProps
  )(EditNotePageContainer);