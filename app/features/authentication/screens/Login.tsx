import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import {View, TextInput, StyleSheet, Button, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useLoginMutation} from '../authApiSlice';
import {setCredentials} from '../authSlice';

const Login: React.FC<any> = () => {
  const [user, setUserName] = useState('');
  const [pwd, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [login, {isLoading}] = useLoginMutation();
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();

  const [currentLanguage, setLanguage] = useState('en');

  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };
  const handleSubmit = async () => {
    try {
      const userData = await login({user, pwd}).unwrap();
      dispatch(setCredentials({...userData, user}));
      setUserName('');
      setPassword('');
    } catch (err) {
        console.log("ERROR",JSON.stringify(err))
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg('No Server Response');
      } else if (err.originalStatus === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.originalStatus === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>{t('name')}</Text>
        <TextInput style={styles.inputField} value={user} onChangeText={txt => setUserName(txt)} />
      </View>
      <View style={styles.inputContainer}>
        <Text>{t('password')}</Text>
        <TextInput style={styles.inputField} value={pwd} onChangeText={txt => setPassword(txt)} />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
      <Button title="Change Language" onPress={()=>changeLanguage("hi")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer:{

  },
  inputField:{
    borderColor: 'green',
    borderWidth:1
  }
});

export {Login};
