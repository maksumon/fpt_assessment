import {showErrorAlert} from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const signIn = async (dispatch, navigation, data) => {
  if (data.username === 'asd' && data.password === 'qwe') {
    dispatch({type: 'SIGNIN_SUCCESS'});
    await AsyncStorage.setItem('isSignedIn', 'true');
    return navigation.replace('Home');
  } else {
    dispatch({type: 'SIGNIN_ERROR'});
    return showErrorAlert(
      'The username or password is incorrect. Please try again',
    );
  }
};

export const signOut = async (dispatch, navigation) => {
  dispatch({type: 'SIGNOUT'});
  await AsyncStorage.removeItem('isSignedIn');
  return navigation.replace('Welcome');
};
