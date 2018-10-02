import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import './App.css';

class App extends Component {
  state = { isVerified: false };

  handleSignUp = () => {
    if (this.state.isVerified) {
      alert('Signing Up...');
    } else {
      alert('Hey there! ROBOT.');
    }
  };

  verifyCallback = response => {
    if (response) {
      this.setState({
        isVerified: true
      });
    }
  };
  render() {
    console.log(24, this.state);
    return (
      <div className="App">
        <Recaptcha
          // https://www.google.com/recaptcha
          // You can go there and create your project. Add localhost or domain name as domain.
          sitekey="<-sitekey->"
          render="explicit"
          onloadCallback={() => console.log('successfully loaded')}
          verifyCallback={res => this.verifyCallback(res)}
        />
        <button className="button button1" onClick={() => this.handleSignUp()}>
          Sign Up
        </button>
      </div>
    );
  }
}

export default App;
