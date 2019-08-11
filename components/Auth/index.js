import React from 'react';
import firebase from 'firebase';

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}

const useAuthContext = () => React.useContext(AuthContext);

export { AuthContext, AuthProvider, useAuthContext };
