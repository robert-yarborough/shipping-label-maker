import React, { useState } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
// context
import {AuthContext} from './context/auth';
// decorators
import {PrivateRoute} from './core/decorators/PrivateRoute';
// navigation
import { Nav } from './core/components/navigation';
import {Admin} from './core/pages/Admin';
import {ShippingLabelMaker} from './core/pages/ShippingLabeMaker';
import {Login} from './core/pages/Login';
import {Signup} from './core/pages/Signup';



function App(){
  const existingTokens = JSON.parse(localStorage.getItem('tokens'));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  }

  return (<AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
              <Router>
                <div>
                  <Nav />
                  <Route exact path="/" component={ShippingLabelMaker} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                  <PrivateRoute path="/admin" component={Admin} />
                </div>
              </Router>
          </AuthContext.Provider>);
};
export default App;
