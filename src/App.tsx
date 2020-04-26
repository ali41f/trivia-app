import React, { useState } from 'react';
import './App.css';
import Welcome from './pages/Welcome'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { Question } from './pages/Question';


function App() {

  const [category, setCategory] = React.useState<string | number>('any');

  const [difficulty, setDifficulty] = React.useState<string>('any');

  const [message, setMessage] = React.useState<string>('');

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/game">
            <Question
              category={category}
              difficulty={difficulty}
              setMessage={(m) => setMessage(m)}
            />
          </Route>
          <Route path="/">
            <Welcome
              category={category}
              setCategory={(r) => setCategory(r)}
              difficulty={difficulty}
              setDifficulty={(r) => setDifficulty(r)}
              message={message} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
