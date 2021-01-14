import React, { Component } from 'react';
import firebase from 'firebase';
import Button from '@material-ui/core/Button';

class SignIn extends Component {
  state = {
    loading: true,
    user: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        loading: false,
        user: user
      });
    });
  }

  logout() {
    firebase.auth().signOut();
  }

  render() {
    if (this.state.loading) return <div>loading</div>;
    return (
      <div>
        {this.state.user ?
          (<Button href="#loginButton" variant="contained" color="secondary" disableElevation> Start Memo </Button>) :
          (<Button href="#loginButton" variant="contained" color="secondary" disableElevation> Login </Button>)
        }
      </div>
    );
  }
}

export default SignIn;