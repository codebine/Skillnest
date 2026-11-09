import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Deploy the server using Netlify instead of Cloudflare
  nitro: {
    preset: "netlify",
  },

  tanstackStart: {
    server: { entry: "server" },
  },
});
