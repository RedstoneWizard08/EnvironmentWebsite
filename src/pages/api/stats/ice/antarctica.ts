import type { APIRoute } from "astro";

export interface MassData {
    time: number;
    mass: number;
    uncertainty: number;
}

const API_URL =
    "https://archive.podaac.earthdata.nasa.gov/podaac-ops-cumulus-protected/ANTARCTICA_MASS_TELLUS_MASCON_CRI_TIME_SERIES_RL06.3_V4/antarctica_mass_200204_202501.txt";

    let cache: MassData[] | undefined;

export const GET: APIRoute = async () => {
    if (!cache) {
        const raw = (
            await (
                await fetch(API_URL, {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.EDL_TOKEN}`,
                    },
                })
            ).text()
        )
            .trim()
            .split("\n");

        const data = raw.filter((v) => !v.startsWith("HDR"));

        const formatted = data.map((v) => {
            const split = v
                .split(/\s/)
                .map((v) => v.trim())
                .filter((v) => v != "");

            return {
                time: parseFloat(split[0]),
                mass: parseFloat(split[1]),
                uncertainty: parseFloat(split[2]),
            };
        });

        cache = formatted;
    }

    return new Response(JSON.stringify(cache), {
        headers: {
            "Content-Type": "application/json",
        },
    });
};
