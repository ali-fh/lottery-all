import typescript from 'rollup-plugin-typescript'
import commonjs from 'rollup-plugin-commonjs'

import copy from 'rollup-plugin-copy-assets'
import nodeResolve from 'rollup-plugin-node-resolve'
import babel from '@rollup/plugin-babel'

export default {
  input: './src/index.ts',
  output: [
    {
      format: 'cjs',
      file: 'dist/lottery-all.cjs.js'
    },
    {
      format: 'es',
      file: 'dist/lottery-all.esm.js'
    },
    {
      format: 'iife',
      file: 'dist/lottery-all.iife.js',
      name: 'cp',
    }
  ],
  plugins: [
    copy({
      assets: ['assets']
    }),
    nodeResolve(),
    typescript({
      exclude: 'node_modules/**',
      typescript: require('typescript')
    }),
    babel({ exclude: 'node_modules/**' }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/lodash/lodash.js': ['cloneDeep']
      }
    }),

  ],
  onwarn: function(warning) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return
    }
    console.warn(warning.message)
  }
}
