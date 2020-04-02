import React from 'react';
import './App.css';
import {HomePage} from './pages/homepage/homepage.component.jsx';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import { auth } from './firebase/firebase.utils'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      currrentUser: null
    }
  }

  unsubcribeFromAuth = null

  componentDidMount(){
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currrentUser:user});

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header currrentUser = {this.state.currrentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
}
}

export default App;
