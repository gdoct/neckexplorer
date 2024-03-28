import React from "react";
import { NoteNames } from '../lib/musictypes'
import { SnareDisplaySettings, FretDisplaySettings } from '../lib/interfaces'
import Fret from './Fret';
import { getNoteAtInterval, getNoteColor, getChromaticScaleNoteNames, getSimpleNoteName, convertToRoman } from '../lib/musicology';

interface SnareProps {
    rootnote: NoteNames;
    scaleRoot: NoteNames;
    position: number;
    fretCount: number;
    octave: number;
    displaySettings: SnareDisplaySettings,
    forceFlat?: boolean;
    forceNumeric?: boolean;
}

const Snare: React.FC<SnareProps & { className?: string }> = ({
    rootnote,
    scaleRoot,
    position,
    fretCount,
    octave,
    displaySettings,
    className,
    forceFlat,
    forceNumeric
}) => {

    const hasDot = (position: number): boolean => {
        if (position === 0) return false;

        const relativeposition = position % 12;

        if (displaySettings.showDoubleDots) {
            return (relativeposition === 0);
        }
        else if (displaySettings.showSingleDots) {
            switch (relativeposition) {
                case 3:
                case 5:
                case 7:
                case 9:
                    return true;
                default:
                    return false;
            }
        }
        return false;
    }

    const notenames = displaySettings.scaleToColorize ? getChromaticScaleNoteNames(scaleRoot, displaySettings.scaleToColorize.notes, forceFlat, forceNumeric) : [];

    return (
        <div className="snare">
            <div style={{ display: 'flex' }} className={className}>
                {Array.from({ length: fretCount }, (_, i) => {
                    const currentposition = position + i;
                    const currentnote = getNoteAtInterval(rootnote, currentposition);
                    const currentoctave = octave + Math.floor((rootnote + currentposition) / 12);
                    const isRootOfNeck = position === 0 && i === 0;
                    let notecolor: string = "";
                    let isactive: boolean = true;
                    if (displaySettings.colorizeNotes === true && scaleRoot !== undefined && !isRootOfNeck) {
                        notecolor = getNoteColor(currentnote, scaleRoot, displaySettings.scaleToColorize?.notes);
                        isactive = notecolor !== "";
                    } else if (!displaySettings.showChromaticNotes) {
                        isactive = false;
                    }

                    const currentNoteName = isRootOfNeck ? getSimpleNoteName(currentnote, forceFlat? true: false) : notenames[currentnote as number];
                    const hasRoman = (displaySettings.showRootPosition && (i === 0 || i === fretCount - 1)) ? true : false;
                    const fretSettings  : FretDisplaySettings = {
                        backgroundColor: isactive ? notecolor : undefined,
                        hasDot: hasDot(currentposition),
                        isNeck: position === 0 && i === 0,
                        isScaleRoot: currentnote === scaleRoot,
                        hasRomanNumeral: hasRoman,
                        romanNumeral: hasRoman ? convertToRoman(position + i) : '',
                        fretIndex: i
                    };

                    return (
                        <Fret
                            active={isactive}
                            note={currentnote}
                            noteName={currentNoteName}
                            key={i}
                            octave={currentoctave}
                            displaySettings={fretSettings}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Snare;
