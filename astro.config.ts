import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import unocss from "unocss/astro";

export default defineConfig({
    site: "https://redstonewizard08.github.io",
    base: "EnvironmentWebsite",
    integrations: [react(), unocss({
        injectReset: true,
    })],
    vite: {
        server: {
            port: 5173,
            strictPort: true,
            hmr: {
                port: 5173,
                clientPort: 443,
                protocol: "wss",
            },
        },
    },
});
