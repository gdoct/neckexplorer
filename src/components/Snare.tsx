import React from "react";
import { Scale, NoteNames } from '../lib/musictypes'
import Fret from './Fret';
import { getNoteAtInterval, getNoteColor, getChromaticScaleNoteNames } from '../lib/musicology';
//import doubleDotImage from './img/dot1.png';
import doubleDotImage from './img/dikkenerd.jpg';
import singleDotImage from './img/dot2.png';

interface SnareProps {
    rootnote: NoteNames;
    scaleRoot: NoteNames;
    position: number;
    fretCount: number;
    octave: number;
    snareHasFretImages: boolean;
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
    snareHasFretImages,
    colorizeNotes,
    scaleToColorize,
    className,
    showChromaticNotes,
    forceFlat,
    forceNumeric
}) => {

    const fretImage = (rootnote: NoteNames, position: number):string => {
        if (!snareHasFretImages) return '';
        const fretposition = rootnote + position;
        if (fretposition === 0) return '';
        const relativeposition = fretposition % 12;
        switch (relativeposition) {
            case 0:
                return doubleDotImage;
            case 3:
            case 5:
            case 7:
            case 9:
                return singleDotImage;
            default:
                return '';
        }
    }

    const notenames = scaleToColorize ? getChromaticScaleNoteNames(scaleRoot, scaleToColorize.notes, forceFlat, forceNumeric) : [];

    return (
        <div className="snare">
            <div style={{ display: 'flex' }} className={className}>
                {Array.from({ length: fretCount }, (_, i) => {
                    // Determine the note for this position
                    const currentnote = getNoteAtInterval(rootnote, position + i);
                    const currentoctave = octave + Math.floor((rootnote + position) / 12 );
                    
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

                    return (
                        <Fret
                            active={isactive}
                            note={currentnote}
                            noteName={currentNoteName}
                            key={i}
                            backgroundColor={notecolor}
                            fretImage={fretImage(rootnote, position)}
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
