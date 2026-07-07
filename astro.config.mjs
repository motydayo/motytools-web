import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://motytools.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
