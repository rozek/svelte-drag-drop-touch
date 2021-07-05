// see https://github.com/rozek/build-configuration-study

import commonjs   from '@rollup/plugin-commonjs'
import resolve    from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/svelte-drag-drop-touch.ts',
  output: [
    {
      file:     './dist/svelte-drag-drop-touch.js',
      format:    'umd', // builds for both Node.js and Browser
      name:      'DragDropTouch', // required for UMD modules
      noConflict:true,
      sourcemap: true,
      exports:   'default',
      plugins:   [terser({ format:{ comments:false, safari10:true } })],
    },{
      file:     './dist/svelte-drag-drop-touch.esm.js',
      format:   'esm',
      sourcemap:true
    }
  ],
  plugins: [
    resolve(), commonjs(), typescript()
  ],
};
