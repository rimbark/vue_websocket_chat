require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  'plugins': [
    'sort-imports-es6-autofix'
  ],
  rules: {
    'vue/attributes-order': ['error'],
    'vue/max-attributes-per-line': [
      'error', {
        'singleline': {
          'max': 1
        }
      }],
    'vue/first-attribute-linebreak': [
      'error', {
        'singleline': 'ignore',
        'multiline': 'below'
      }],
    'vue/order-in-components': ['error'],
    'vue/block-lang': [
      'error',
      {
        'script': {
          'lang': 'ts'
        }
      }
    ],
    'sort-imports': [
      'error', {
        'ignoreCase': true,
        'ignoreDeclarationSort': false,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': ['all', 'single', 'multiple', 'none'],
        'allowSeparatedGroups': false
      }],
    'sort-imports-es6-autofix/sort-imports-es6': [
      2, {
        'ignoreCase': true,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': ['all', 'single', 'multiple', 'none']
      }],
    'semi': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'func-call-spacing': ['error', 'always'],
    "vue/mustache-interpolation-spacing": ["error", "always"],
    "vue/html-closing-bracket-spacing": ["error"]
  }

}