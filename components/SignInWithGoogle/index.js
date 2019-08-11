import React from 'react';
import * as Google from 'expo-google-app-auth';
import * as firebase from 'firebase';

import { ImageButton } from 'react-native-image-button-text';
import { app, db } from '../../firebaseConfig';

export default function Index() {
  const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;

      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  const onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = app.auth().onAuthStateChanged(function(firebaseUser) {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );
        // Sign in with credential from the Google user.
        app
          .auth()
          .signInWithCredential(credential)
          .then(function(result) {
            console.log(result);
            if (result.additionalUserInfo.isNewUser) {
              db.collection('users')
                .doc(result.user.uid)
                .set({
                  gmail: result.user.email,
                  profile_picture: result.additionalUserInfo.profile.picture,
                  first_name: result.additionalUserInfo.profile.given_name,
                  last_name: result.additionalUserInfo.profile.family_name,
                  created_at: Date.now()
                });
            } else {
              db.collection('users')
                .doc(result.user.uid)
                .update({
                  last_logged_in: Date.now()
                });
            }
          })
          .catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;

            console.log(errorCode, errorMessage, email, credential);
          });
      } else {
        console.log('User already signed-in Firebase.');
      }
    });
  };

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: '1066590212649-mphf93gkd51gkorb7lav48pl621etn0b.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      });
      if (result.type === 'success') {
        onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  return (
    <ImageButton
      width={250}
      height={60}
      text=""
      source={require('../../assets/images/Google_Signin.png')}
      onPress={() => {
        signInWithGoogleAsync();
      }}
    />
  );
}
