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

export const noteNamesArray = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
export const noteNamesArraySharp = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
export const noteMappings: number[] =        [0, 1, 2, 3, 4, 5,  6,  8, 10, 12]; // dropdown id to actual note in the scale
export const majorScaleIntervals: number[] = [2,2,1,2,2,2,1,2,3,4]; // major scale intervals for notes in noteMappings to the next note
export const intervalMappings: number[] =    [0, 2, 4, 5, 7, 9, 11, 13, 16, 20]; // interval between the root each note in noteMappings

export const getNoteAtInterval = (root: NoteNames, position: number) => {
    const noteIndex = (root + position) % 12;
    return noteIndex as NoteNames;
}

export const getNoteName = (root: NoteNames, interval: number, forceSharp?: boolean) => {
    const note = getNoteAtInterval(root, interval) % 12;
    return forceSharp ? noteNamesArraySharp[note] : noteNamesArray[note];
}

export function getScaleNoteNames(scaleRoot: NoteNames, scaleToColorize?: Array<{ interval: number, color: string, name: string }>, forceFlat? : boolean, forceNumeric?: boolean) {
    const scaleNotes = [];
    if (scaleRoot === undefined || scaleRoot >= noteNamesArray.length || scaleRoot < 0) {
        return [];
    }

    let noteNamesSharp = forceFlat ? noteNamesArray.slice() : noteNamesArraySharp.slice();
    let noteNamesFlat = forceFlat ? noteNamesArraySharp.slice() : noteNamesArray.slice();

    const uniqueLetters = new Set();
    if (scaleToColorize) {
        for (const note of scaleToColorize) {
            const nextNote = (scaleRoot + note.interval) % 12;
            let nextNoteName = noteNamesSharp[nextNote];
            scaleNotes.push(nextNoteName);
            const firstLetter = nextNoteName[0];
            if (!uniqueLetters.has(firstLetter)) {
                uniqueLetters.add(firstLetter);
            }
        }
    }

    for (let i = 0; i < scaleNotes.length; i++) {
        const currentNote: string = scaleNotes[i];
        if (currentNote.length > 1) {
            const firstLetter = currentNote[0];
            if (!uniqueLetters.has(firstLetter)) {
                var index = noteNamesFlat.indexOf(currentNote);
                const correspondingNote = noteNamesFlat[index];
                scaleNotes[i] = correspondingNote;
            }
        }
    }

    return scaleNotes;
}
                                    
export function getChromaticScaleNoteNames(
    scaleRoot: NoteNames,
    scaleToColorize: Array<{ interval: number, color: string, name: string }>,
    forceFlat?: boolean,
    forceNumeric?: boolean,
    scaleToColorizeNoteNames?: string[]
): string[] {
    // Define the chromatic scale (all 12 notes)
    let scaleNoteNames = scaleToColorizeNoteNames ? scaleToColorizeNoteNames.slice() : getScaleNoteNames(scaleRoot, scaleToColorize, forceFlat, forceNumeric);
    let chromaticNotes: string[] = forceFlat ? noteNamesArray.slice() : noteNamesArraySharp.slice();

    for (let i =0; i< scaleToColorize.length; i++) {
        let noteToColorize = scaleToColorize[i];
        let name = scaleNoteNames[i];
        chromaticNotes[(scaleRoot + noteToColorize.interval) % 12] = forceNumeric && noteToColorize.name !== '' ? noteToColorize.name : name;
    }
    return chromaticNotes;
}

export function getNoteColor(currentnote: NoteNames, scaleRoot: NoteNames, intervalsToColorize?: Array<{ interval: number, color: string }>) {
    if (intervalsToColorize === undefined || intervalsToColorize.length === 0) {
        if (currentnote === scaleRoot) {
            return "red";
        }
        return "lightgrey";
    }

    const interval = (currentnote - scaleRoot + 12) % 12;
    const matchingInterval = intervalsToColorize.find(item => item.interval === interval);
    if (matchingInterval) {
        return matchingInterval.color;
    }
    return "";
}