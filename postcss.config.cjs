const breakpoints = require('./breakpoints.json');

module.exports = {
  plugins: {
    'postcss-preset-mantine': {
      autoRem: true,
    },
    'postcss-simple-vars': {
      // breakpoints.json の各値から、CSS Modules で使う $mantine-breakpoint-<名前> を生成する
      variables: Object.fromEntries(
        Object.entries(breakpoints).map(([name, value]) => [`mantine-breakpoint-${name}`, value])
      ),
    },
  },
};
