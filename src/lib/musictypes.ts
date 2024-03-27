export enum NoteNames {
    A = 0,
    Bb = 1,
    B = 2,
    C = 3,
    Db = 4,
    D = 5,
    Eb = 6,
    E = 7,
    F = 8,
    Gb = 9,
    G = 10,
    Ab = 11
}

export interface Note {
    interval: number;
    color: string;
    name: string;
}

export interface Scale {
    scalename: string;
    notes: Note[];
}

export interface ScaleType {
    type: string;
    scales: Scale[];
}

export interface GuitarTuningGroup {
    name: string;
    tunings: GuitarTuning[];
}

export interface GuitarTuning {
    name: string;
    strings: GuitarString[];
}

export interface GuitarString {
    rootnote: NoteNames;
    octave: number;
}

export const noteNamesArray = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
export const noteNamesArraySharp = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
export const noteMappings: number[] =        [0, 1, 2, 3, 4, 5,  6,  8, 10, 12]; // dropdown id to actual note in the scale
export const majorScaleIntervals: number[] = [2,2,1,2,2,2,1,2,3,4]; // major scale intervals for notes in noteMappings to the next note
export const intervalMappings: number[] =    [0, 2, 4, 5, 7, 9, 11, 13, 16, 20]; // interval between the root each note in noteMappings
