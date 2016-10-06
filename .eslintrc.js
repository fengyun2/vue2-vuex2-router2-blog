/**
* @Date:   2016-09-27T09:55:50+08:00
* @Last modified time: 2016-09-30T09:28:58+08:00
*/

module.exports = {
  root: true,
  parser: 'babel-eslint',
  "env": {
    "browser": true,
    "node": true
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
