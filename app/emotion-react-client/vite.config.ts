/// <reference types="vitest" />
import react from "@vitejs/plugin-react"
import { sassPlugin } from "esbuild-sass-plugin"
import { defineConfig } from "vite"
import svgrPlugin from "vite-plugin-svgr"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
    tsconfigPaths(),
    sassPlugin(),
  ],

  esbuild: {
    define: {
      this: `window`,
    },
  },

  test: {
    globals: true,
    environment: `jsdom`,
    css: false,
  },
})
