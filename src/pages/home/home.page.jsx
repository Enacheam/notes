import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Header } from '../header/header.page';
import { NotesPage } from "../notes/notes.page";
import { getAllNotes } from '../../actions/get-notes/get-notes.actioncreator';

class HomePageContainer extends Component{

    componentWillMount(){
        this.props.getAllNotes();
    }

    render(){
        return (
        <div className="home-layout">
            <Header />
            <NotesPage notes={this.props.notes} />  
        </div>
        );
    }
}

const mapStateToProps = ({notesData})=>{
    return{
        notes: notesData.notes
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    getAllNotes
}, dispatch);
  
  export const HomePage = connect(
    mapStateToProps, 
    mapDispatchToProps
  )(HomePageContainer);