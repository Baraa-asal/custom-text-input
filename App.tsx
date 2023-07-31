import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import TextField from './src/Components/TextInput/TextField'; // Assuming you have the TextField component in a separate file
import {MessageIcon} from './src/assets/icons/MessageIcon';
import {PersonIcon} from './src/assets/icons/PersonIcon';

const App: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [firstNameIsValid, setFirstNameIsValid] = useState('');
  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameIsValid, setLastNameIsValid] = useState('');

  const firstNameHandler = (name: string) => {
    setFirstName(name);
    if (name.trim().length > 5)
      setFirstNameIsValid('Name must be 5 or less characters');
    else setFirstNameIsValid('');
  };
  const lastNameHandler = (name: string) => {
    setLastName(name);
    if (name.trim().length > 8)
      setLastNameIsValid('Name must be 8 or less characters');
    else setLastNameIsValid('');
  };
  const emailHandler = (email: string) => {
    setEmail(email);
    if (email.trim().length > 5) setEmailIsValid('');
    else setEmailIsValid('Email must be valid. Ex: someone@example.com');
  };

  return (
    <View style={styles.container}>
      <TextField
        onChangeText={firstNameHandler}
        error={firstNameIsValid}
        value={firstName}
        title="First Name"
        caption="Caption here!"
        startIcon={<PersonIcon />}

        // placeholder={'Hello there'}
        // onFocus={() => {
        //   console.log('onFocused from a developer!');
        // }}
        // onBlur={() => {}}
      />

      <TextField
        title="Last Name"
        onChangeText={lastNameHandler}
        error={lastNameIsValid}
        value={lastName}
        startIcon={<MessageIcon />}
      />

      <TextField
        title="Email Address"
        onChangeText={emailHandler}
        error={emailIsValid}
        value={email}
        disabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
