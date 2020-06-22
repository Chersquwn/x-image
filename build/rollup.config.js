import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resovle from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from 'rollup-plugin-typescript2'
import path from 'path'

export default {
  input: '../src/index.ts',
  output: [
    {
      file: 'dist/x-image.esm.js',
      format: 'es'
    },
    {
      file: 'dist/x-image.umd.js',
      format: 'umd',
      name: 'XImage'
    }
  ],
  plugins: [
    alias({
      entries: [
        {
          find: 'src',
          replacement: path.resolve(__dirname, '../src')
        }
      ]
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    commonjs(),
    json(),
    resovle(),
    replace(),
    typescript()
  ]
}
