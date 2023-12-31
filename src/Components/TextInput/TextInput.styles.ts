import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 15,
  },

  title: {
    fontFamily: 'Inter-Regular',
    color: '#3B3F50',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 25,
    marginBottom: 4,
  },
  disabledText: {
    color: '#6E7184',
  },
  disabledContainer: {
    backgroundColor: '#F4F6FF',
  },
  disabledBorder: {
    borderColor: '#6E7184',
  },
  disabledIcon: {
    opacity: 0.3,
  },
  inputContainer: {
    justifyContent: 'center',
    width: 327,
    height: 56,
    borderWidth: 1,
    borderColor: '#B6B9CE',
    borderRadius: 3,
    paddingHorizontal: 16,
  },
  textInput: {
    color: '#4C63A3',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 25,
  },

  iconContainer: {
    position: 'absolute',
    paddingStart: 16,
  },

  iconPadding: {
    paddingLeft: 40,
  },
  caption: {
    fontFamily: 'Inter-Regular',
    color: '#6E7184',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    marginTop: 4,
    paddingHorizontal: 12,
  },
  inputContainerError: {
    borderColor: '#FF7474',
  },
  errorMsg: {
    fontFamily: 'Inter-Regular',
    color: '#FF7474',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    marginLeft: 4,
  },
  helpingText: {
    marginBottom: 20,
  },
  errorContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeIconContainer: {
    position: 'absolute',
    paddingEnd: 20,
    end: 0,
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

export default styles;
