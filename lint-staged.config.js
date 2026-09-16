export default {
  "*.css": ["stylelint", "oxfmt"],
  "*.{ts,tsx,js,jsx,json,mjs,mts}": ["eslint"],
  "*.{ts,tsx}": () => "tsc --noEmit -p tsconfig.app.json",
};
