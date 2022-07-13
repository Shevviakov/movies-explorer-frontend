import React from 'react';

import './App.css';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

import Main from '../Main/Main';
import { Route, Switch, useHistory } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Preloader from '../Preloader/Preloader'
import ErrNotFound from '../ErrNotFound/ErrNotFound';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { AppContext } from '../../contexts/AppContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [movies, setMovies] = React.useState([])
  const [currentUser, setCurrentUser] = React.useState(null)
  const [loggedIn, setLoggedIn] = React.useState(null);

  const history = useHistory();

  React.useEffect(() => {
    mainApi.getMe()
      .then((user) => {
        setCurrentUser(user)
        setLoggedIn(true)
        console.log('User Logged')
      })
      .catch(() => {
        setLoggedIn(false)
        setCurrentUser(null)
        console.log('User not logged')
      });
  }, [loggedIn]);

  function onSignIn() {
    setLoggedIn(true)
    history.push('/movies')
  }

  function onSignOut() {
    setLoggedIn(false)
    history.push('/')
  }

  function onProfileUpdate(user) {
    setCurrentUser(user)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AppContext.Provider value={{ loggedIn }}>
        <div className="app">
          {loggedIn === null ?
            <Preloader className="app__preloader" /> :
            <Switch>
              <Route exact path="/"><Main /></Route>
              <ProtectedRoute exact path="/movies"><Movies /></ProtectedRoute>
              <ProtectedRoute exact path="/saved-movies"><SavedMovies /></ProtectedRoute>
              <ProtectedRoute exact path="/profile"><Profile onSignOut={onSignOut} onProfileUpdate={onProfileUpdate} /></ProtectedRoute>
              <Route exact path="/signin"><SignIn onSignIn={onSignIn} /></Route>
              <Route exact path="/signup"><SignUp onSignIn={onSignIn} /></Route>
              <Route exact path="/404"><ErrNotFound /></Route>
            </Switch>
          }
        </div>
      </AppContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
