// codegen.ts
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://develop.api.samansa.com/graphql',
  documents: ['app/**/*.graphql'],
  generates: {
    './lib/graphql/generated/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: false,
      },
      plugins: [],
    },
  },
};

export default config;
