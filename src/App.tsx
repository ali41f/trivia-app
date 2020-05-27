import React, { useState } from 'react';
import './App.css';
import Welcome from './pages/Welcome'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { QuestionsTimer } from './pages/QuestionsTimer';
import { QuestionList } from './pages/QuestionList';


function App() {

  const [category, setCategory] = React.useState<string | number>('any');

  const [difficulty, setDifficulty] = React.useState<string>('any');

  const [styleValue, setStyleValue] = useState<string>('list')

  const [message, setMessage] = React.useState<string>('');

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/game">
            {
              styleValue == "time" ?
                <QuestionsTimer
                  category={category}
                  difficulty={difficulty}
                  setMessage={(m) => setMessage(m)}
                /> :
                <QuestionList
                  category={category}
                  difficulty={difficulty}
                  setMessage={(m) => setMessage(m)} />
            }

          </Route>
          <Route path="/">
            <Welcome
              category={category}
              setStyle={(v) => setStyleValue(v)}
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
