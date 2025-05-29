export interface MassData {
    time: number;
    mass: number;
    uncertainty: number;
}

export const getAntarctica = async (): Promise<MassData[]> =>
    await (await fetch("/api/stats/ice/antarctica")).json();
