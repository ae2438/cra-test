// module.exports = {
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'react-app',
//   ],
//   plugins: ['react', 'react-hooks'],
//   env: {
//     browser: true,
//     jasmine: true,
//     jest: true,
//   },
//   rules: {
//     'react-hooks/exhaustive-deps': 'off',
//     'react/prop-types': 'off',
//     'react/display-name': 'off',
//     'react/jsx-key': 'off',
//     'react/no-children-prop': 'off',
//   },
//   overrides: [
//     {
//       files: ['**/*.ts?(x)'],
//       extends: [
//         'eslint:recommended',
//         'plugin:@typescript-eslint/eslint-recommended',
//         'plugin:@typescript-eslint/recommended',
//         'plugin:@typescript-eslint/recommended-requiring-type-checking',
//       ],
//       plugins: ['@typescript-eslint'],
//       parser: '@typescript-eslint/parser',
//       parserOptions: {
//         project: './tsconfig.json',
//         tsconfigRootDir: '.',
//       },
//     },
//   ],
// };

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'react-app',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    ecmaFeatures: {
      jsx: true,
    }
  },
  env: {
    browser: true,
    jasmine: true,
    jest: true,
  },
}

// module.exports = {
//   extends: ['eslint:recommended', 'react-app', 'plugin:react/recommended'],
//   plugins: ['react', 'react-hooks'],
//   parser: 'babel-eslint',
//   env: {
//     browser: true,
//     jasmine: true,
//     jest: true,
//   },
//   overrides: [
//     {
//       files: ['**/*.ts?(x)'],
//       extends: [
//         'eslint:recommended',
//         'plugin:@typescript-eslint/eslint-recommended',
//         'plugin:@typescript-eslint/recommended',
//         'plugin:@typescript-eslint/recommended-requiring-type-checking',
//       ],
//       plugins: ['@typescript-eslint'],
//       parser: '@typescript-eslint/parser',
//       // parserOptions: {
//       //   project: './tsconfig.json',
//       //   tsconfigRootDir: '.',
//       // },
//     },
//     {
//       files: ['**/*.js'],
//       parser: 'babel-eslint',
//       rules: {
//         'react-hooks/exhaustive-deps': 'off',
//         'react/prop-types': 'off',
//         'react/display-name': 'off',
//         'react/jsx-key': 'off',
//         'react/no-children-prop': 'off',
//       },
//     },
//   ],
// };
