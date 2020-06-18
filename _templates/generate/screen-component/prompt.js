module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter component name...',
  },
  {
    type: 'select',
    name: 'folder',
    message: 'Select screen folder...',
    choices: [
      'Main',
      'Example',
      'Settings',
      'Initializing',
      'Modal',
      'Information',
      'Profile',
      //ADD MORE SCREENS
    ],
  },
];
