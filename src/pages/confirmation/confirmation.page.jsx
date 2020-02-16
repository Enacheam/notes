import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { navToHomePage, navToHomePageAsync } from '../../actions/confirmation/confirmation.actioncreator';

class NoteConfirmationPageContainer extends Component {

    componentDidMount(){
        this.props.navToHomePageAsync();
    }

    render() {
        return (
            <div>
                <p>Your note has been created successfully!</p>
                <button className="button-primary" onClick={()=>{this.props.navToHomePage()}}>OK</button>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({
    navToHomePageAsync,
    navToHomePage
}, dispatch);

export const NoteConfirmationPage = connect(
    null,
    mapDispatchToProps
)(NoteConfirmationPageContainer);