import merge from 'deepmerge'
import { createBasicConfig } from '@open-wc/building-rollup'
import typescript from 'rollup-plugin-typescript'
import commonjs from 'rollup-plugin-commonjs'

const baseConfig = createBasicConfig()

export default merge(baseConfig, {
  input: './src/index.ts',
  output: [
    {
      format: 'cjs',
      file: 'dist/lottery-logic.cjs.js'
    },
    {
      format: 'es',
      file: 'dist/lottery-logic.esm.js'
    }
  ],
  plugins: [
    typescript({
      exclude: 'node_modules/**',
      typescript: require('typescript')
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/lodash/lodash.js': ['cloneDeep']
      }
    })
  ],
  onwarn: function (warning) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return
    }

    console.warn(warning.message)
  }
})
