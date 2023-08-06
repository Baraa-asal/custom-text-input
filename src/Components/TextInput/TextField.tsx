import React, {useState, forwardRef} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {TextFieldProps} from './TextField.interface';
import {ErrorIcon} from '../../assets/icons/ErrorIcon';
import {CloseIcon} from '../../assets/icons/CloseIcon';
import styles from './TextInput.styles';

const TextField = forwardRef<TextInput, TextFieldProps>(
  ({title, caption, error, startIcon, editable = true, ...rest}, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const deleteText = () => {
      if (!rest.onChangeText) return;
      rest.onChangeText('');
    };

    return (
      <View style={styles.container}>
        <Text style={[styles.title, !editable ? styles.disabledText : {}]}>
          {title}
        </Text>
        <View
          style={[
            styles.inputContainer,
            error ? styles.inputContainerError : {},
            !!startIcon ? styles.iconPadding : {},
            !editable ? [styles.disabledContainer, styles.disabledBorder] : {},
          ]}>
          <View
            style={[
              styles.iconContainer,
              !editable ? styles.disabledIcon : {},
            ]}>
            {startIcon}
          </View>
          <TextInput
            ref={ref}
            style={styles.textInput}
            editable={editable}
            {...rest}
            onFocus={e => {
              setIsFocused(true);
              if (rest.onFocus) {
                rest.onFocus(e);
              }
            }}
            onBlur={e => {
              setIsFocused(false);
              if (rest.onBlur) {
                rest.onBlur(e);
              }
            }}
          />
          {isFocused && (
            <Pressable style={styles.closeIconContainer} onPress={deleteText}>
              <CloseIcon />
            </Pressable>
          )}
        </View>
        <View style={styles.helpingText}>
          {!!error && (
            <View style={styles.errorContainer}>
              <ErrorIcon />
              <Text style={styles.errorMsg}>{error}</Text>
            </View>
          )}

          {!error && caption && (
            <Text
              style={[styles.caption, !editable ? styles.disabledText : {}]}>
              {caption}
            </Text>
          )}
        </View>
      </View>
    );
  },
);

export default TextField;
