import React from "react";
import Snare from './Snare'
import { NoteNames, Scale, GuitarTuning } from "../lib/musictypes";
import { SnareDisplaySettings } from '../lib/interfaces'

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
    return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative' }}>
            {tuning.strings.map((guitarstring, index) => {
                // these numbers must be made relative to the number of snares in the tuning
                const displaySettings : SnareDisplaySettings = {
                    showSingleDots:index === 3,
                    showDoubleDots:index === 2 || index === 4,
                    colorizeNotes: colorizeNotes,
                    scaleToColorize: scaleToColorize,
                    showChromaticNotes: showChromaticNotes,
                    showRootPosition: position > 0 && index === 0
                };

                return (
                <Snare
                    rootnote={guitarstring.rootnote}
                    octave={guitarstring.octave}
                    position={position}
                    fretCount={fretCount}
                    className={index === 0 ? "first-snare" : index === tuning.strings.length - 1 ? "last-snare" : ""}
                    key={index}
                    displaySettings={displaySettings}
                    scaleRoot={scaleRoot}
                    forceFlat={forceFlat}
                    forceNumeric={forceNumeric}
                />
            )})}
        </div>
    </div>
)};

export default GuitarNeck;
