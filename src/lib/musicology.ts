
import { noteNamesArray, NoteNames, noteNamesArraySharp} from './musictypes'
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