import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 15,
  },
  disabledContainer: {
    backgroundColor: '#F4F6FF',
  },
  title: {
    fontFamily: 'Inter-Regular',
    color: '#3B3F50',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 25,
  },
  disabledText:{
    color: '#6E7184'
  },
  input: {
    justifyContent: 'center',
    width: 327,
    height: 56,
    borderWidth: 1,
    borderColor: '#B6B9CE',
    borderRadius: 3,
    paddingLeft: 16,
    marginTop: 4,
  },
  filledTextInput: {
    color: '#4C63A3',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 25,
  },
  disabledBorder: {
    borderColor: '#6E7184',
  },
  iconContainer: {
    position: 'absolute',
    paddingStart: 16,
  },
  disabledIcon: {
    opacity: 0.3,
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
  errorInput: {
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
  errorContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center', 
  },
  closeIconContainer: {
    position: 'absolute',
    paddingEnd: 12,
    end: 0,
  },
  galleryTitle: {
    color: '#00bfa5',
    fontSize: 18,
    fontStyle: 'italic',
  }
});

export default styles;
