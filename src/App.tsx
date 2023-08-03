import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import TextField from './Components/TextInput/TextField';
import {MessageIcon} from './assets/icons/MessageIcon';
import Gallery from './Components/TextInput/Gallery';

const App: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [firstNameIsValid, setFirstNameIsValid] = useState('');

  const firstNameHandler = (name: string) => {
    setFirstName(name);
    if (name.trim().length > 5)
      setFirstNameIsValid('Name must be 5 or less characters');
    else setFirstNameIsValid('');
  };

  return (
    <View style={styles.container}>
      {/* EXAMPLE : */}
      <TextField
        editable={false}
        onChangeText={firstNameHandler}
        error={firstNameIsValid}
        value={firstName}
        title="First Name"
        caption="Caption here!"
        startIcon={<MessageIcon />}
      />
      <Gallery />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 40,
  },
});

export default App;
