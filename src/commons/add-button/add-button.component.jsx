import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { connect } from "react-redux";


class AddNoteButtonContainer extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return  <button className="pure-button" onClick={()=> this.props.navToAddNotePage() }>Add Note</button>
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({
    navToAddNotePage: () => push('/add-note')
  }, dispatch);
  
  export const AddNoteButton =  connect(
    null, 
    mapDispatchToProps
  )(AddNoteButtonContainer);