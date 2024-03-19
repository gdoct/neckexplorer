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
    showDot: boolean;
    colorizeNotes?: boolean;
    scaleToColorize?: Scale;
    showChromaticNotes? : boolean;
    forceFlat?: boolean;
    forceNumeric?: boolean;
}

const Snare: React.FC<SnareProps & { className?: string }> = ({
    rootnote,
    scaleRoot,
    position,
    fretCount,
    octave,
    showDot,
    colorizeNotes,
    scaleToColorize,
    className,
    showChromaticNotes,
    forceFlat,
    forceNumeric
}) => {
    let notenames = scaleToColorize ? getChromaticScaleNoteNames(scaleRoot, scaleToColorize.notes, forceFlat, forceNumeric) : [];
    return (
        <div className="snare">
            <div style={{ display: 'flex' }} className={className}>
                {Array.from({ length: fretCount }, (_, i) => {
                    // Determine the note for this position
                    const currentnote = getNoteAtInterval(rootnote, position + i);
                    let currentoctave = octave + Math.floor((rootnote + position) / 12 );
                    
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

                    let currentNoteName = notenames[currentnote as number];

                    return (
                        <Fret
                            active={isactive}
                            note={currentnote}
                            noteName={currentNoteName}
                            position={position + i}
                            key={i}
                            showDot={showDot}
                            backgroundColor={notecolor}
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
