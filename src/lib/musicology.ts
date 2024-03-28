
import { noteNamesArray, NoteNames, noteNamesArraySharp} from './musictypes'
export const getNoteAtInterval = (root: NoteNames, position: number) => {
    const noteIndex = (root + position) % 12;
    return noteIndex as NoteNames;
}

export const getNoteName = (root: NoteNames, interval: number, forceSharp?: boolean) => {
    const note = getNoteAtInterval(root, interval) % 12;
    return forceSharp ? noteNamesArraySharp[note] : noteNamesArray[note];
}

export const getSimpleNoteName = (note: NoteNames, forceFlat: boolean) => {
    return forceFlat ? noteNamesArray[note] : noteNamesArraySharp[note];
}

export function getScaleNoteNames(scaleRoot: NoteNames, scaleToColorize?: Array<{ interval: number, color: string, name: string }>, forceFlat? : boolean, forceNumeric?: boolean) {
    const scaleNotes = [];
    if (scaleRoot === undefined || scaleRoot >= noteNamesArray.length || scaleRoot < 0) {
        return [];
    }

    const noteNamesSharp = forceFlat ? noteNamesArray.slice() : noteNamesArraySharp.slice();
    const noteNamesFlat = forceFlat ? noteNamesArraySharp.slice() : noteNamesArray.slice();
    const uniqueLetters = new Set();
    if (scaleToColorize) {
        for (const note of scaleToColorize) {
            const nextNote = (scaleRoot + note.interval) % 12;
            const nextNoteName = noteNamesSharp[nextNote];
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
                const index = noteNamesFlat.indexOf(currentNote);
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
    const scaleNoteNames = scaleToColorizeNoteNames ? scaleToColorizeNoteNames.slice() : getScaleNoteNames(scaleRoot, scaleToColorize, forceFlat, forceNumeric);
    const chromaticNotes: string[] = forceFlat ? noteNamesArray.slice() : noteNamesArraySharp.slice();

    for (let i = 0; i < scaleToColorize.length; i++) {
        const noteToColorize = scaleToColorize[i];
        const name = scaleNoteNames[i];
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

export function convertToRoman(num: number) : string {
    var lookup: { [key: string]: number} = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    },
    roman = '',
    i;
    for (i in lookup) {
      while (num >= lookup[i]) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }