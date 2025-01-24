import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

import config from './vite.config.mts';
const consfigPlugins = config.plugins ?? [];

export default defineConfig({
  plugins: [...consfigPlugins, tsconfigPaths()],
  test: {
    // This means we don't have to import `describe`,
    // `it`, and `expect` into every test file
    globals: true,
    environment: 'jsdom',
  },
});
