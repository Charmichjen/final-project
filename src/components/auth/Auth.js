import React, { PureComponent } from 'react';
import firebaseui from 'firebaseui';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { providers, db } from '../../services/firebase';
import { clearUser } from './actions';


const ui = new firebaseui.auth.AuthUI(firebase.auth());
const users = db.ref('users');

class Auth extends PureComponent{
  componentDidMount() {
    this.props.user ? clearUser() : '';
    const { origin } = window.location;
    const { history } = this.props;
    
    ui.start('#firebaseui-auth-container', {
      //need to correct this route or delete it.
      signInSuccessUrl: `${origin}/dashboard`,
      callbacks: { 
        signInSuccess: function(user) {
          //need to change to route to go to correct place. should be where user came from
          
          setTimeout(() =>  {
            users.child(user.uid).update({ name: user.displayName });
            history.push('/dashboard');}, 100);
          
          
          return false;
        }
      },
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInOptions:[
        {
          provider: providers.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: true
        },
        providers.GoogleAuthProvider.PROVIDER_ID
      ]
    });
  }

  render(){
    return (
      <div>
        <div id="firebaseui-auth-container"></div>
      </div>
    );
  }
}

export default connect(
  //might be different state so change to what is needed.
  state => ({ user: state.user }),
  { clearUser }
)(Auth);