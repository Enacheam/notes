import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

class NoteConfirmationPageContainer extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                Your note has been created successfully!
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export const NoteConfirmationPage = connect(
    null,
    mapDispatchToProps
)(NoteConfirmationPageContainer);