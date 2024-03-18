import React from "react";
import Snare from './Snare'
import { NoteNames, noteNamesArray } from "../lib/musicology";
import FretIndicator from "./FretIndicator";

interface GuitarNeckProps {
    rootNotes: NoteNames[];
    fretCount: number;
    position: number;
    scaleRoot: NoteNames;
    colorizeNotes?: boolean;
    scaleToColorize?: Array<{ interval: number, color: string, name: string }>;
    showChromaticNotes?: boolean;
    forceFlat?: boolean;
    forceNumeric?: boolean;
}

const GuitarNeck: React.FC<GuitarNeckProps> = ({ rootNotes, fretCount, position, scaleRoot, colorizeNotes, scaleToColorize, showChromaticNotes, forceFlat, forceNumeric }) => {
    const getOctave = (rootnote: NoteNames, index: number) => {
        if (rootnote === NoteNames.E)
        {
            if (index === 0) return 4;
            return 2;
        }
        if (rootnote === NoteNames.A || rootnote == NoteNames.D) return 2;
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
            {rootNotes.map((rootnote, index) => (
                <Snare
                    rootnote={rootnote}
                    octave={getOctave(rootnote, index)}
                    position={position}
                    fretCount={fretCount}
                    className={index === 0 ? "first-snare" : index === rootNotes.length - 1 ? "last-snare" : ""}
                    key={index}
                    scaleRoot={scaleRoot}
                    colorizeNotes={colorizeNotes}
                    scaleToColorize={scaleToColorize}
                    showChromaticNotes={showChromaticNotes}
                    forceFlat={forceFlat}
                    forceNumeric={forceNumeric}
                />
            ))}
            {/* Fret div (positioned on top of snare div) */}
            <div style={{ position: 'absolute', transform: 'translateY(-435%) translateX(-0.3%)', zIndex:'-1' }}>
                <FretIndicator fretCount={fretCount} position={position} />
            </div>
        </div>
    </div>
)};

export default GuitarNeck;
