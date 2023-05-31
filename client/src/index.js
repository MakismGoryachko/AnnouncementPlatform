import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UsersStore"
import AnnouncementStore from "./store/AnnouncementStore"

export const Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new AnnouncementStore()
  }}>
    <App />
  </Context.Provider>
);