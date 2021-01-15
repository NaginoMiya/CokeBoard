import React, { Component } from 'react';
import firebase from 'firebase';
import Button from '@material-ui/core/Button';


function SignIn(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState('');

  React.useEffect(() => {
    (async () => {
      await firebase.auth().onAuthStateChanged(user => {
        setIsLoading(false);
        setUser(user);

        //親のstateであるuidにユーザー名をセット
        if(user != null) props.setUid(user.uid);
      });

    })()
  })

  const logout = () => {
    firebase.auth().signOut();
  }

  return (
    <div className="SignIn">
      {(() => {
        if(isLoading) return <div>Now Loading</div>;
        else {
          return(
            <div>
              {user ?
                (<Button href="#loginButton" variant="contained" color="secondary" disableElevation> Start Memo </Button>) :
                (<Button href="#loginButton" variant="contained" color="secondary" disableElevation> Login </Button>)
              }
            </div>
          );
        }
      })()}
    </div>
  )
}
export default SignIn;