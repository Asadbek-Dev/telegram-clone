import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login';
import Telegram from './components/Telegram';
import { auth } from './firebase';
import { selectUser, login, logout } from './features/userSlice'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch((
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
          })
        ))
      } else {
        dispatch(logout())
      }
    });
  }, [dispatch])
  return (
    <div className="app">
      {user ? <Telegram /> : <Login />}
    </div>
  );
}

export default App;
