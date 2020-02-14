import React from 'react';
import { Route, Link } from 'react-router-dom';
import { HomePage } from './pages/home/home.page';
import './App.css';
import { AddNotePage } from './pages/add/add.page';
import { EditNotePage } from './pages/edit/edit.page';

function App() {
  return (
    <div className="App">
      <main>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/add-note" component={AddNotePage} />
        <Route exact path="/edit-note" component={EditNotePage} />
      </main>
    </div>
  );
}

export default App;
