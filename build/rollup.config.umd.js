import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
export default {
  input: 'index.js',
  output: {
    file: 'dist/index.umd.js',
    format: 'umd',
    name: 'browserUp'
  },
  plugins: [
    commonjs(),
    resolve(),
    babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
    terser()
  ]
}