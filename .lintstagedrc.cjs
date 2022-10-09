// NOTE: Lint-staged runs things against staged files (eg. only files being committed)
// See: https://www.npmjs.com/package/lint-staged
// We use Husky to run this.

module.exports = {
  // `npx …` runs it from our local bin files
  '*.+(js|jsx|cjs)': 'eslint --fix',
  '*.+(json|css|md)': 'prettier --write',
};
