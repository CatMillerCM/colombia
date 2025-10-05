module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'selector-class-pattern': [
      '^([a-z][a-zA-Z]*)?$',
      {
        message: 'Expected selector to be camelCase'
      }
    ]
  }
};
