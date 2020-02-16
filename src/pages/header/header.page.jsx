import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { AddNoteButton } from "../../commons/add-button/add-button.component";


class HeaderContainer extends Component{

    render(){
        return (
            <div className="container header">
                <div className="row">
                    <div className="column column-90">
                        <h3>SimpliNote</h3>
                    </div>
                    <div className="column column-10">
                        <AddNoteButton />
                    </div>
                </div>  
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
  
export const Header =  connect(
    null, 
    mapDispatchToProps
)(HeaderContainer);