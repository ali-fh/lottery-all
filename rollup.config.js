import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: './src/index.ts',
  output: [
    {
      format: "cjs",
      file: "dist/lottery-logic.cjs.js"
    },
    {
      format: "es",
      file: "dist/lottery-logic.esm.js"
    }
  ]
});