import React from 'react';
import Status from './pages/Status';
import Deploy from './pages/Deploy'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';


class App extends React.Component {
constructor(props){ 
  super(props); 
  this.state = { 
    open: false, 
    setSelectedValue: "",
    selectedValue: "",
    val : this.props.selectedValue
  }

}

render(){
  
  return (
    <BrowserRouter> 
    <Switch>
      <Route exact path="/" component={Deploy}/>
      <Route exact path = '/deploy' component={Status}/>
    </Switch>
    
    </BrowserRouter>
  );
}
};

export default App;
