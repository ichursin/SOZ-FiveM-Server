import { JobType } from './job';
import { Weather } from './weather';

export type GlobalState = {
    disableAFK: boolean;
    blackout: boolean;
    blackoutLevel: number;
    blackoutOverride: boolean;
    jobEnergy: Record<JobType, number>;
    weather: Weather;
    halloween: string;
    rain: number;
    snow: boolean;
    streamUrls: {
        bennys: string;
        cinema: string;
    };
};

export const BLACK_SCREEN_URL = 'nui://soz-core/public/dui_twitch_stream.html';
