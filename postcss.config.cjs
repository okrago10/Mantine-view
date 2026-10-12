const breakpoints = require('./breakpoints.json');

module.exports = {
  plugins: {
    'postcss-preset-mantine': {
      autoRem: true,
    },
    'postcss-simple-vars': {
      // theme.ts と同じ値を CSS Modules の $mantine-breakpoint-<名前> として使えるようにする
      variables: Object.fromEntries(
        Object.entries(breakpoints).map(([name, value]) => [`mantine-breakpoint-${name}`, value])
      ),
    },
  },
};
