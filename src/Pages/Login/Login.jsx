import React, { useState, useEffect } from 'react';
import './Login.scss';
import BigButton from '../../Components/BigButton/BigButton';
import GoogleIcon from '../../Assets/googleIcon.svg';
import firebase from '../../Firebase';
import { Redirect } from 'react-router-dom';

const Login = (props) => { 

  const formSubmitted = (e) => { 
    e.preventDefault();
    
    if(pin) { 
      firebase.firestore()
      .collection('approved')
      .doc(props.approvedUser)
      .get()
      .then((data) => { 
        if(data.data().secretPin.toString() === pin) { 
          let provider = new firebase.auth.GoogleAuthProvider();

          firebase.auth().signInWithPopup(provider)
            .then(data => {
              firebase.firestore()
              .collection('approved')
              .doc(props.approvedUser)
              .collection('admins') 
              .doc(`${data.user.displayName.split(' ')[0]}`)
              .set({ 
                admin: data.user.displayName,
                adminEmail: data.user.email,
              })
            })

        }
        else console.log(`${typeof data.data().secretPin} ${typeof pin}`)
      })
    }
  };

  const inputChange = (e) => { 
    setPin(e.target.value);
  };

  let [pin, setPin] = useState();
  return ( 
    <div id='login'> 
      <div className="userIcon"></div>
      <form onSubmit={formSubmitted}>
        <input 
          placeholder='your approved pin'
          onChange={inputChange}
          type='password'
        />
        <BigButton 
          bttImg={GoogleIcon}
          bttnTitle='login with a google account'
          onClick={formSubmitted}
        />
      </form>
    </div>
  );
};

export default Login;