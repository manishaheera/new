import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import NewGame from './components/NewGame';
import OneGame from './components/OneGame';
import AllGames from './components/AllGames';


function App() {

  return (
      <div className="App">
        <Router>

          <AllGames path="/" />

          <NewGame path="/new" />

          <OneGame path="/game/:id" />

        </Router>

      </div>
  );
}

export default App;
