// see https://remarkablemark.org/blog/2019/07/12/rollup-commonjs-umd/

import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/svelte-drag-drop-touch.ts',
  output: {
    file:     './dist/svelte-drag-drop-touch.esm.js',
    format:   'esm',
    sourcemap:true
  },
  plugins: [
    resolve(), commonjs(), typescript(),
    terser({ format:{ comments:false, safari10:true } })
  ],
};
