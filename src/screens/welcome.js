import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {signIn, useAuthDispatch} from '../contexts';
import {ADVANCE_HEALTH_SCREENING} from '../assets';

export const Welcome = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, onChangeUsername] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  const dispatch = useAuthDispatch();

  const onPressLogin = () => {
    setModalVisible(true);
  };

  const onPressCancel = () => {
    setModalVisible(false);
  };

  const onPressSignIn = () => {
    setModalVisible(false);
    signIn(dispatch, navigation, {username: username, password: password});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.container}>
            <View style={styles.modalView}>
              <Text>Type your username and password to sign in</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeUsername}
                value={username}
                placeholder="Username"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
              />
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={styles.buttonCancel}
                  onPress={onPressCancel}>
                  <Text style={styles.textButton}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonLogin}
                  onPress={onPressSignIn}>
                  <Text style={styles.textButton}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={ADVANCE_HEALTH_SCREENING}
        />
        <TouchableOpacity style={styles.buttonLogin} onPress={onPressLogin}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 96,
    height: 112,
    margin: 10,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    alignSelf: 'stretch',
  },
  buttonLogin: {
    alignItems: 'center',
    backgroundColor: '#841584',
    padding: 10,
  },
  textButton: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  buttonCancel: {
    alignItems: 'center',
    backgroundColor: '#841584',
    padding: 10,
  },
});
