import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from 'vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: 'users',
      filename: 'remoteEntry.js',

      exposes: {
        './Users': './src/Users.tsx',
      },

      shared: [],
      dts: false,
    }),
  ],

  build: {
    target: 'esnext',
  },

  server: {
    port: 3003,
  },
});