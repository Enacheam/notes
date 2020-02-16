import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { connect } from "react-redux";


class NoteEntryFormContainer extends Component{

    note = {};
    isForEdit = false;

    constructor(props){
        super(props);
        this.setTitle = this.setTitle.bind(this);
        this.setSubTitle = this.setSubTitle.bind(this);
        this.setInsertedDate = this.setInsertedDate.bind(this);
        this.setNoteDescription = this.setNoteDescription.bind(this);
    }

    componentWillMount(){
        this.isForEdit = this.props.isForEdit;
        if(this.isForEdit){
            this.note = this.props.note;
        }
    }


    setTitle(event) {
        this.note.title = event.target.value;
    }

    setSubTitle(event){
        this.note.subTitle = event.target.value;
    }

    setInsertedDate(event){
        this.note.insertedDate = event.target.value;
    }

    setNoteDescription(event){
        this.note.description = event.target.value;
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="column column-100">
                        <label htmlFor="titleField">Title</label>
                        <input type="text" defaultValue={this.note.title} onChange={this.setTitle} placeholder="Enter title for your note" id="titleField" />

                        <label htmlFor="subTitleField">SubTitle</label>
                        <input type="text" defaultValue={this.note.subTitle} onChange={this.setSubTitle} placeholder="Enter a sub title for your note" id="subTitleField" />

                        <label htmlFor="dateField">Date</label>
                        <input type="date" defaultValue={this.note.insertedDate} onChange={this.setInsertedDate} placeholder="Enter a date for your note" id="dateField" />

                        <label htmlFor="descriptionField">Description</label>
                        <textarea defaultValue={this.note.description} onChange={this.setNoteDescription} placeholder="Details of notes here" id="descriptionField"></textarea>

                        <button className="button-primary" onClick={()=>{this.props.execute(this.note)}}>{this.props.executeTitle}</button>

                        <button className="button button-outline" onClick={()=>{this.props.cancel()}}>CANCEL</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    cancel: () => push('/')
  }, dispatch)
  
  export const NoteEntryForm = connect(
    null, 
    mapDispatchToProps
  )(NoteEntryFormContainer);