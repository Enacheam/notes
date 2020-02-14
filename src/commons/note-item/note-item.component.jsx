import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { connect } from "react-redux";

class NoteItemContainer extends Component{

    constructor(props){
        super(props);
    }

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
                    <button className="button button-clear" onClick={()=>this.props.changePage()}>Edit</button>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/edit-note')
  }, dispatch)
  
export const NoteItem = connect(null, mapDispatchToProps)(NoteItemContainer);