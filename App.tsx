import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import TextField from './src/Components/TextInput/TextField'; // Assuming you have the TextField component in a separate file
import {MessageIcon} from './src/assets/icons/MessageIcon';
import {PersonIcon} from './src/assets/icons/PersonIcon';

const App: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [firstNameIsValid, setFirstNameIsValid] = useState('');

  const firstNameHandler = (name: string) => {
    setFirstName(name);
    if (name.trim().length > 5)
      setFirstNameIsValid('Name must be 5 or less characters');
    else setFirstNameIsValid('');
  };

  const InputStatuses = [
    {title: 'Default', props: {}},
    {title: 'Filled', props: {value: 'Text input'}},
    {title: 'Disabled', props: {disabled: true}},
  ];
  const InputVariations = [
    {title: 'No icon', props: {title: 'Title'}},
    {title: 'With icon', props: {title: 'Title', startIcon: <MessageIcon />}},
    {
      title: 'No icon with caption',
      props: {title: 'Title', caption: 'Caption here!'},
    },
    {
      title: 'With icon with caption',
      props: {
        title: 'Title',
        startIcon: <MessageIcon />,
        caption: 'Caption here!',
      },
    },
    {
      title: 'No icon with error',
      props: {title: 'Title', error: 'Error Message'},
    },
    {
      title: 'With icon with error',
      props: {
        title: 'Title',
        startIcon: <PersonIcon />,
        error: 'Error Message',
      },
    },
  ];

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

      <ScrollView style={{marginTop: 50}}>
        {/* G A L L E R Y : */}
        {InputStatuses.map((status, i) => {
          return (
            <View key={`s-${i}`} style={{marginBottom: 50}}>
              <Text style={styles.galleryTitle}>{status.title}</Text>
              {InputVariations.map((variation, j) => {
                const combinedProps = {...status.props, ...variation.props};
                return (
                  (!status.props.disabled ||
                    (status.props.disabled && !variation.props.error)) && (
                    <View key={`v-${i}-${j}`}>
                      {/* <Text key={`s-${i}`}>{variation.title}</Text> */}
                      <TextField {...combinedProps} />
                    </View>
                  )
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 40,
  },
  galleryTitle: {
    width: 327,
    color: '#00bfa5',
    fontSize: 18,
    fontStyle: 'italic',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 20,
    borderTopWidth: 1,
    borderTopColor: 'black',
  },
});

export default App;
