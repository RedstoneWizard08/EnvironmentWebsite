import {
    defineConfig,
    presetIcons,
    presetWebFonts,
    presetTypography,
    presetWind3,
} from "unocss";

export default defineConfig({
    presets: [
        presetIcons(),
        presetWebFonts({
            provider: "bunny",
            fonts: {
                jbm: "JetBrains Mono",
                alexandria: "Alexandria",
            },
        }),
        presetTypography(),
        presetWind3(),
    ],
});
