import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { selectNoteForEdit } from '../../actions/edit/edit.actioncreator';

class NoteItemContainer extends Component{

    render(){
        const note = this.props.note;

        return (
            <div className="row note-item-border">
                <div className="column column-80 note">
                    <h2>{note.title}</h2>
                    <h5>{note.subTitle}</h5>
                    <p>
                        {note.description}
                    </p>
                </div>
                <div className="column column-20">
                    <button className="button button-clear" onClick={()=>this.props.selectNoteForEdit(note.noteId)}>Edit</button>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({
    selectNoteForEdit
  }, dispatch)
  
export const NoteItem = connect(null, mapDispatchToProps)(NoteItemContainer);