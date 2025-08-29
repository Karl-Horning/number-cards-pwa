import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    // GitHub Pages project path
    base: "/number-cards-pwa/",
    plugins: [
        tailwindcss(),
        react(),
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: ["icons/icon-192.png", "icons/icon-512.png"],
            manifest: {
                name: "Number Cards",
                short_name: "Cards",
                description: "Guess-my-number cards (1-63) as a tiny PWA.",
                theme_color: "#111827",
                background_color: "#111827",
                display: "standalone",

                // Relative so iOS anchors to the subfolder
                id: "./",
                start_url: "./",
                scope: "./",

                icons: [
                    {
                        src: "icons/icon-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "icons/icon-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        }),
    ],
});
