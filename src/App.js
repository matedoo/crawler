import React from 'react';
import LoginApp from './Components/LoginComponents/LoginApp'
import RegisterApp from './Components/LoginComponents/RegisterApp'
import StartApp from './Components/LoginComponents/StartApp'
import MainApp from './Components/MainApp/MainApp'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'




class App extends React.Component {

  render(){
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={StartApp}></Route>
          <Route path='/LoginApp' component={LoginApp}></Route>
          <Route path='/RegisterApp' component={RegisterApp}></Route>
          <Route path='/MainApp' component={MainApp}></Route>
        </Switch>
      </Router>
    );
  }
}



export default App;
