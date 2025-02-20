import { NamedZone } from '../polyzone/box.zone';
import { Vector3 } from '../polyzone/vector';

export type Dialog = {
    audio: string;
    text: string[];
    timing?: number[];
};

export type StoryObject = {
    model: string;
    coords: Vector3;
    rotation: Vector3;
};

export type Story = {
    name: string;
    dialog: { [key: string]: Dialog };
    zones?: (NamedZone & { part: number; label: string; icon: string })[];
    props?: StoryObject[];
};

export enum ScenarioState {
    NotStarted,
    Running,
    Finished,
}

export const ScenarioOrder = {
    halloween2022: ['scenario1', 'scenario2', 'scenario3', 'scenario4'],
    halloween2023: ['scenario1', 'scenario2', 'scenario3', 'scenario4'],
};
