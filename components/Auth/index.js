import React from 'react';

import app from '../../firebaseConfig';

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    app.auth().onAuthStateChanged(user => {
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
