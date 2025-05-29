import Chart, { type ApexOptions } from "apexcharts";

interface MassData {
    time: number;
    mass: number;
    uncertainty: number;
}

export const setupAntarctica = async (selector: string) => {
    const data: MassData[] = await (
        await fetch("/api/stats/ice/antarctica")
    ).json();
    
    const element = document.getElementById(selector) as HTMLDivElement;

    const chart = new Chart(element, {
        chart: {
            type: "line",
            height: "50%",
            zoom: {
                allowMouseWheelZoom: false,
            },
        },
        title: {
            text: "Antarctica Ice Mass Variation",
        },
        subtitle: {
            text: "2002 - present",
        },
        series: [
            {
                name: "data",
                data: data.map((v) => ({
                    x: v.time,
                    y: v.mass,
                })),
            },
        ],
        xaxis: {
            type: "category",
        },
    } satisfies ApexOptions);

    chart.render();
};

export const setupGreenland = async (selector: string) => {
    const data: MassData[] = await (
        await fetch("/api/stats/ice/greenland")
    ).json();
    
    const element = document.getElementById(selector) as HTMLDivElement;

    const chart = new Chart(element, {
        chart: {
            type: "line",
            height: "50%",
            zoom: {
                allowMouseWheelZoom: false,
            },
        },
        title: {
            text: "Greenland Ice Mass Variation",
        },
        subtitle: {
            text: "2002 - present",
        },
        series: [
            {
                name: "data",
                data: data.map((v) => ({
                    x: v.time,
                    y: v.mass,
                })),
            },
        ],
        xaxis: {
            type: "category",
        },
    } satisfies ApexOptions);

    chart.render();
};
