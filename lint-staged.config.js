export default {
  '*.css': ['stylelint', 'oxfmt'],
  '*.{ts,tsx,js,jsx,json,mjs,mts}': ['eslint'],
  '*.{ts,tsx}': () => 'tsc -b',
};
