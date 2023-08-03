import React from 'react';
import {MessageIcon} from './assets/icons/MessageIcon';
import {PersonIcon} from './assets/icons/PersonIcon';

export const INPUT_STATUSES = [
  {title: 'Default', props: {}},
  {title: 'Filled', props: {value: 'Text input'}},
  {title: 'Disabled', props: {editable: false}},
];

export const INPUT_VARIATIONS = [
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
