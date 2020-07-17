module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-restricted-globals": ["error", "event", "fdescribe"],
    'space-before-function-paren': 0,
    // 'generator-star-spacing': 0,
    // 'arrow-parens': 0,
    // 'vue/max-attributes-per-line': ['error', {
    //   'singleline': 3,
    //   'multiline': {
    //     'max': 1,
    //     'allowFirstLine': true
    //   }
    // }],
    // 'vue/script-indent': ['error', 2, {'baseIndent': 1}],
    // 'indent': 'off'
  }
}
