import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
export default {
  input: 'index.js',
  output: {
    file: 'dist/index.esm.js',
    format: 'es'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
    terser()
  ]
}