import React from 'react';
import { Route } from 'react-router-dom';
import { HomePage } from './pages/home/home.page';
import './App.css';
import { AddNotePage } from './pages/add/add.page';
import { EditNotePage } from './pages/edit/edit.page';
import { NoteConfirmationPage } from './pages/confirmation/confirmation.page';
import { NoteDetailsPage } from './pages/note-detail/note-detail.page';

function App() {
  return (
    <div className="App">
      <main>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/add-note" component={AddNotePage} />
        <Route exact path="/edit-note" component={EditNotePage} />
        <Route exact path="/confirmation" component={ NoteConfirmationPage } />
        <Route exact path="/note/:id" component={NoteDetailsPage} />
      </main>
    </div>
  );
}

export default App;
