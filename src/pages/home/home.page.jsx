import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Header } from '../header/header.page';
import { NotesPage } from "../notes/notes.page";

class HomePageContainer extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const notes2 = [];
        const notes = [
            {
                noteId: 1,
                title: 'Sermon at church',
                subTitle: 'Love thy nieghbor',
                description: 'Lipsem param Lipsem param  Lipsem param Lipsem param '
            }, 
            {
                noteId: 2,
                title: 'Sermon at church',
                subTitle: 'Love thy nieghbor',
                description: 'Lipsem param Lipsem param  Lipsem param Lipsem param '
            }, 
            {
                noteId: 3,
                title: 'Sermon at church',
                subTitle: 'Love thy nieghbor',
                description: 'Lipsem param Lipsem param  Lipsem param Lipsem param '
            },
            {
                noteId: 4,
                title: 'Sermon at church',
                subTitle: 'Love thy nieghbor',
                description: 'Lipsem param Lipsem param  Lipsem param Lipsem param '
            },
            {
                noteId: 5,
                title: 'Sermon at church',
                subTitle: 'Love thy nieghbor',
                description: 'Lipsem param Lipsem param  Lipsem param Lipsem param '
            },
            {
                noteId: 6,
                title: 'Sermon at church',
                subTitle: 'Love thy nieghbor',
                description: 'Lipsem param Lipsem param  Lipsem param Lipsem param '
            }
        ];


        return (
        <div className="home-layout">
            <Header />
            <NotesPage notes={notes} />  
        </div>
        );
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
  
  export const HomePage = connect(
    null, 
    mapDispatchToProps
  )(HomePageContainer);