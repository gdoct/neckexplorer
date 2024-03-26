import React from "react";
import { Scale, NoteNames } from '../lib/musictypes'
import Fret from './Fret';
import { getNoteAtInterval, getNoteColor, getChromaticScaleNoteNames } from '../lib/musicology';

interface SnareProps {
    rootnote: NoteNames;
    scaleRoot: NoteNames;
    position: number;
    fretCount: number;
    octave: number;
    showSingleDots: boolean;
    showDoubleDots: boolean;
    colorizeNotes?: boolean;
    scaleToColorize?: Scale;
    showChromaticNotes?: boolean;
    forceFlat?: boolean;
    forceNumeric?: boolean;
}

const Snare: React.FC<SnareProps & { className?: string }> = ({
    rootnote,
    scaleRoot,
    position,
    fretCount,
    octave,
    showSingleDots,
    showDoubleDots,
    colorizeNotes,
    scaleToColorize,
    className,
    showChromaticNotes,
    forceFlat,
    forceNumeric
}) => {

    const hasDot = (position: number): boolean => {
        // snare has a position
        if (position === 0) return false;

        const relativeposition = position % 12;

        if (showDoubleDots) {
            return (relativeposition === 0);
        }
        else if (showSingleDots) {
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

    const notenames = scaleToColorize ? getChromaticScaleNoteNames(scaleRoot, scaleToColorize.notes, forceFlat, forceNumeric) : [];

    return (
        <div className="snare">
            <div style={{ display: 'flex' }} className={className}>
                {Array.from({ length: fretCount }, (_, i) => {
                    // Determine the note for this position
                    const currentposition = position + i;
                    const currentnote = getNoteAtInterval(rootnote, currentposition);
                    const currentoctave = octave + Math.floor((rootnote + currentposition) / 12);

                    // Determine if this is a note or open string
                    const isRootOfNeck = position === 0 && i === 0;
                    const isScaleRoot = currentnote === scaleRoot;

                    let notecolor: string = "";
                    let isactive: boolean = true;

                    if (colorizeNotes === true && scaleRoot !== undefined && !isRootOfNeck) {
                        notecolor = getNoteColor(currentnote, scaleRoot, scaleToColorize?.notes);
                        isactive = notecolor !== "";
                    } else if (!showChromaticNotes) {
                        isactive = false;
                    }

                    const currentNoteName = notenames[currentnote as number];
                    const fretHasDot = hasDot(currentposition);

                    return (
                        <Fret
                            active={isactive}
                            note={currentnote}
                            noteName={currentNoteName}
                            key={i}
                            backgroundColor={notecolor}
                            hasDot={fretHasDot}
                            isNeck={isRootOfNeck}
                            isScaleRoot={isScaleRoot}
                            octave={currentoctave}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Snare;
