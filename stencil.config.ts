import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'animated-charts',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
  ],
}; 