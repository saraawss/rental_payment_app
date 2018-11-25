import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RentalManager from './rental-manager';
import UserRentalManager from './user-rental-manager';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  
  <main>
    <Switch>
      <Route exact path='/home' component={RentalManager}/>
      <Route exact path='/user-list' component={UserRentalManager}/>
      <Route exact path='/home/:id' component={RentalManager}/>
     </Switch>
  </main>
  
)

export default Main