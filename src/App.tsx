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
      {/* ------------------ E X A M P L E ------------------ */}
      <View style={styles.exampleContainer}>
        <TextField
          onChangeText={firstNameHandler}
          error={firstNameIsValid}
          value={firstName}
          title="First Name"
          caption="Caption here!"
          startIcon={<MessageIcon />}
        />
      </View>
      <Gallery />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  exampleContainer: {
    marginHorizontal: 24,
    marginVertical: 20,
  },
});

export default App;
