import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { getNoteUsingId } from '../../actions/get-notes/get-notes.actioncreator';

class NoteDetails extends Component {

    componentWillMount(){
        this.props.getNoteUsingId(this.props.noteId);
    }

    render() {
        if (this.props.note) {
            return (
                <div className="notes-container">
                    <div className="container">
                        <div className="column column-80">
                            <h1>Note Details</h1>
                            <h2>{this.props.note.title}</h2>
                            <h5>{this.props.note.subTitle}</h5>
                            <p>
                                {this.props.note.description}
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        return <h2>No available note matches this id, please check the id and try again</h2>;
    }
}

const mapStateToProps = (state) => {
    const location = state.router.location.pathname;
    const idFromURL = parseInt(location.slice(location.lastIndexOf('/')+1), 10);
    return {
        note: state.notesData.detailNote,
        noteId: idFromURL
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    getNoteUsingId
}, dispatch);

export const NoteDetailsPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteDetails);