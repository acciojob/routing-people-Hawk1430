import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import './../styles/App.css';
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={UserList} />
        <Route path='/users/:id' component={UserDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
