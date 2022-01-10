import React, {useReducer, createContext, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthReducer, InitialState} from '../reducers/authreducer';
import * as RootNavigation from '../../RootNavigation.js';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }

  return context;
};

export const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  }

  return context;
};

const getSignedInState = async () => {
  try {
    const isSignedIn = await AsyncStorage.getItem('isSignedIn');
    return isSignedIn;
  } catch (e) {
    console.log('Failed to fetch the data from storage');
  }
};

export const AuthProvider = ({children}) => {
  const [user, dispatch] = useReducer(AuthReducer, InitialState);

  // Loading initial Satte
  useEffect(() => {
    const fetchSignedInState = async () => {
      const isSignedIn = await getSignedInState();
      if (isSignedIn === 'true') {
        dispatch({type: 'SIGNIN_SUCCESS'});
        return RootNavigation.replace('Home');
      }
    };

    fetchSignedInState();
  }, []);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
