import React from "react";
import Fret from './Fret';

import { getNoteAtInterval, NoteNames, getNoteColor, getChromaticScaleNoteNames, noteNamesArray } from '../lib/musicology';

interface SnareProps {
    rootnote: NoteNames;
    scaleRoot: NoteNames;
    position: number;
    fretCount: number;
    colorizeNotes?: boolean;
    scaleToColorize?: Array<{ interval: number, color: string }>;
    showChromaticNotes? : boolean;
}

const Snare: React.FC<SnareProps & { className?: string }> = ({
    rootnote,
    scaleRoot,
    position,
    fretCount,
    colorizeNotes,
    scaleToColorize,
    className,
    showChromaticNotes,
}) => {
    const notenames = getChromaticScaleNoteNames(scaleRoot, scaleToColorize)
    return (
        <div className="snare">
            <div style={{ display: 'flex' }} className={className}>
                {Array.from({ length: fretCount }, (_, i) => {
                    // Determine the note for this position
                    const currentnote = getNoteAtInterval(rootnote, position + i);
                    // Determine if this is a note or open string
                    const isRootOfNeck = position === 0 && i === 0;
                    const isScaleRoot = currentnote === scaleRoot;

                    let notecolor: string = "";
                    let isactive: boolean = true;

                    if (colorizeNotes === true && scaleRoot !== undefined && !isRootOfNeck) {
                        notecolor = getNoteColor(currentnote, scaleRoot, scaleToColorize);
                        isactive = notecolor !== "";
                    } else if (!showChromaticNotes) {
                        isactive = false;
                    }

                    const currentNoteName = noteNamesArray[currentnote as number];

                    return (
                        <Fret
                            active={isactive}
                            note={currentnote}
                            noteName={currentNoteName}
                            key={i}
                            backgroundColor={notecolor}
                            isNeck={isRootOfNeck}
                            isScaleRoot={isScaleRoot}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Snare;
