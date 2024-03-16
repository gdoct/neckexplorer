export const getNoteAtInterval = (root: NoteNames, position: number) => {
    const noteIndex = (root + position) % 12;
    return noteIndex as NoteNames;
}

export const getNoteName = (root: NoteNames, interval: number, forceSharp?: boolean) => {
    const note = getNoteAtInterval(root, interval) % 12;
    return forceSharp ? noteNamesArraySharp[note] : noteNamesArray[note];
}

/*{ scalename: 'Major scale', scaleToColorize: [{ interval: 0, color: 'red'' }, 
                                      { interval: 2, color: 'black' },
                                      { interval: 4, color: 'black' },
                                      { interval: 5, color: 'black' },
                                      { interval: 7, color: 'black' },
                                      { interval: 9, color: 'black' },
                                      { interval: 11, color: 'black' }]} */
export function getScaleNoteNames(scaleRoot?: NoteNames, scaleToColorize?: Array<{ interval: number, color: string }>) {
    const scaleNotes: string[] = [];
    if (scaleRoot === undefined || !noteNamesArray.includes(noteNamesArray[scaleRoot])) {
        return [];
    }
    if (scaleToColorize && scaleRoot) {
        let uniquekeys: string[] = [];
        //scaleNotes.push(noteNamesArraySharp[scaleRoot]);
        for (const note of scaleToColorize) {
            const nextNote = (scaleRoot + note.interval) % 12;
            let nextNoteName = noteNamesArraySharp[nextNote];
            let notebase = nextNoteName.substring(0, 1);
            if (uniquekeys.includes(notebase)) {
                nextNoteName = noteNamesArray[nextNote]; // convert to flat
            } else {
                uniquekeys.push(notebase);
            }
            scaleNotes.push(nextNoteName);
        }
    }
//return ['C','D','E','F','G','A','B'];
    return scaleNotes;
}

export function getScaleNoteNames2(scaleRoot?: NoteNames, scaleToColorize?: Array<{ interval: number, color: string }>) {
    const scaleNotes: string[] = [];
    if (scaleRoot === undefined || !noteNamesArray.includes(noteNamesArray[scaleRoot])) {
        return [];
    }
    if (scaleToColorize && scaleRoot) {
        let uniquekeys: string[] = [];
        //scaleNotes.push(noteNamesArraySharp[scaleRoot]);
        for (const note of scaleToColorize) {
            const nextNote = (scaleRoot + note.interval) % 12;
            let nextNoteName = noteNamesArraySharp[nextNote];
            let notebase = nextNoteName.substring(0, 1);
            if (uniquekeys.includes(notebase)) {
                nextNoteName = noteNamesArray[nextNote]; // convert to flat
            } else {
                uniquekeys.push(notebase);
            }
            scaleNotes.push(nextNoteName);
        }
    }
//return ['C','D','E','F','G','A','B'];
    return scaleNotes;
}
                                    
export function getChromaticScaleNoteNames(
    scaleRoot?: NoteNames,
    scaleToColorize?: Array<{ interval: number, color: string }>,
    useSharp?: boolean
): string[] {
    // Define the chromatic scale (all 12 notes)
    return ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    // let scaleNoteNames = getScaleNoteNames(scaleRoot, scaleToColorize);
    // let chromaticNotes = useSharp ? noteNamesArraySharp : noteNamesArray;

    // if (scaleToColorize && scaleNoteNames) {
    //     for (let i =0; i< scaleToColorize.length; i++) {
    //         let noteToColorize = scaleToColorize[i];
    //         let name = scaleNoteNames[i];
    //         chromaticNotes[noteToColorize.interval % 12] = name;
    //     }
    // }
    // return chromaticNotes;
}
                                                    

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
export const noteNamesArray = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
export const noteNamesArraySharp = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

// the dropdown contains the notes 1-7, 9 11 and 13
export const noteMappings: number[] =        [0, 1, 2, 3, 4, 5,  6,  8, 10, 12]; // dropdown id to actual note in the scale
export const majorScaleIntervals: number[] = [2,2,1,2,2,2,1,2,3,4]; // major scale intervals for notes in noteMappings to the next note
export const intervalMappings: number[] =    [0, 2, 4, 5, 7, 9, 11, 13, 16, 20]; // interval between the root each note in noteMappings


export function getNoteColor(currentnote: NoteNames, scaleRoot: NoteNames, intervalsToColorize?: Array<{ interval: number, color: string }>) {
    if (intervalsToColorize === undefined || intervalsToColorize.length === 0) {
        if (currentnote === scaleRoot) {
            return "red";
        }
        return "lightgrey";
    }

    // Bereken het interval tussen de huidige noot en de grondnoot (rootnote)
    const interval = (currentnote - scaleRoot + 12) % 12;

    // // Ondersteun ook de 9e, 11e en 13e intervallen
    const matchingInterval = intervalsToColorize.find(item => item.interval === interval);
    if (matchingInterval) {
        return matchingInterval.color;
    }
    return "";
}
