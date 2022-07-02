import './App.css';

import Main from '../Main/Main';
import { Route, Switch } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import ErrNotFound from '../ErrNotFound/ErrNotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"><Main /></Route>
        <Route exact path="/movies"><Movies /></Route>
        <Route exact path="/saved-movies"><SavedMovies /></Route>
        <Route exact path="/profile"><Profile /></Route>
        <Route exact path="/signin"><SignIn /></Route>
        <Route exact path="/signup"><SignUp /></Route>
        <Route exact path="/404"><ErrNotFound /></Route>
      </Switch>
    </div>
  );
}

export default App;
