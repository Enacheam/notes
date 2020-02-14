import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { connect } from "react-redux";


class NoteEntryFormContainer extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="column column-100">
                        <form>
                            <fieldset>
                                <label htmlFor="titleField">Title</label>
                                <input type="text" placeholder="Enter title for your note" id="titleField" />

                                <label htmlFor="subTitleField">SubTitle</label>
                                <input type="text" placeholder="Enter a sub title for your note" id="subTitleField" />

                                <label htmlFor="dateField">Date</label>
                                <input type="date" placeholder="Enter a date for your note" id="dateField" />

                                <label htmlFor="descriptionField">Description</label>
                                <textarea placeholder="Details of notes here" id="descriptionField"></textarea>

                                <input className="button-primary" type="submit" value="ADD" />

                                <button className="button button-outline" onClick={()=>{this.props.cancel()}}>CANCEL</button>

                            </fieldset>
                        </form>
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