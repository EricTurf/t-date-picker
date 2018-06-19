import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: './src/index.js',
  output: {
    file: './build/bundle.js',
    format: 'iife',
    name: 'tDatePicker',
    sourceMap: true
  },
  external: ['react', 'react-proptypes'],
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    ,
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    })
  ]
};
