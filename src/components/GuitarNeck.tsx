import React from "react";
import Snare from './Snare'
import { NoteNames, Scale, GuitarTuning } from "../lib/musictypes";

interface GuitarNeckProps {
    tuning: GuitarTuning;
    fretCount: number;
    position: number;
    scaleRoot: NoteNames;
    colorizeNotes?: boolean;
    scaleToColorize?: Scale;
    showChromaticNotes?: boolean;
    forceFlat?: boolean;
    forceNumeric?: boolean;
}

const GuitarNeck: React.FC<GuitarNeckProps> = ({ tuning, fretCount, position, scaleRoot, colorizeNotes, scaleToColorize, showChromaticNotes, forceFlat, forceNumeric }) => {
    const getOctave = (rootnote: NoteNames, index: number) => {
        if (rootnote === NoteNames.E)
        {
            if (index === 0) return 4;
            return 2;
        }
        if (rootnote === NoteNames.A || rootnote === NoteNames.D) return 2;
        return 3;
    };

    return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative' }}>
            { (position > 0) &&
            (
                <label>{position}</label>
            )
            }
        </div>
        <div style={{ position: 'relative' }}>
            {tuning.strings.map((guitarstring, index) => (
                <Snare
                    rootnote={guitarstring.rootnote}
                    octave={guitarstring.octave}
                    position={position}
                    fretCount={fretCount}
                    className={index === 0 ? "first-snare" : index === tuning.strings.length - 1 ? "last-snare" : ""}
                    key={index}
                    showDot={index===3}
                    scaleRoot={scaleRoot}
                    colorizeNotes={colorizeNotes}
                    scaleToColorize={scaleToColorize}
                    showChromaticNotes={showChromaticNotes}
                    forceFlat={forceFlat}
                    forceNumeric={forceNumeric}
                />
            ))}
        </div>
    </div>
)};

export default GuitarNeck;
