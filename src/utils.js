import {Alert} from 'react-native';

export const showErrorAlert = message => {
  return Alert.alert('Error', message, [{text: 'OK'}], {cancelable: false});
};
