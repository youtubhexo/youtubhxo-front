module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-mutating-props': 'off',
    'vue/script-setup-uses-vars':'off'
  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  plugins: ['prettier']
}
