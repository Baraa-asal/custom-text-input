import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {INPUT_STATUSES, INPUT_VARIATIONS} from '../../Dummy_Data';
import TextField from './TextField';
import styles from './TextInput.styles';

const Gallery = () => {
  return (
    <ScrollView style={{marginTop: 50}}>
      {/* G A L L E R Y : */}
      {INPUT_STATUSES.map((status, i) => {
        return (
          <View key={`s-${i}`} style={{marginBottom: 50}}>
            <Text style={styles.galleryTitle}>{status.title}</Text>
            {INPUT_VARIATIONS.map((variation, j) => {
              const combinedProps = {...status.props, ...variation.props};
              return (
                // in case it's editable: show it ALL, if not editable, just show the cases with NO error
                (status.props.editable ||
                  (!status.props.editable && !variation.props.error)) && (
                  <View key={`v-${i}-${j}`}>
                    <TextField {...combinedProps} />
                  </View>
                )
              );
            })}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Gallery;
