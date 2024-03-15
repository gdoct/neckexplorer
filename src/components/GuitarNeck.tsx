import React from "react";
import Snare from './Snare'
import { NoteNames } from "../lib/musicology";
import FretIndicator from "./FretIndicator";

interface TabProps {
    rootNotes: NoteNames[];
    fretCount: number;
    position: number;
    scaleRoot: NoteNames;
    colorizeNotes?: boolean;
    scaleToColorize?: Array<{ interval: number, color: string }>;
    showChromaticNpotes?: boolean;
}

const Tab: React.FC<TabProps> = ({ rootNotes, fretCount, position, scaleRoot, colorizeNotes, scaleToColorize, showChromaticNpotes: showChromaticNotes }) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative' }}>
            { (position > 0) &&
            (
                <label>{position}</label>
            )
            }
        </div>
        <div style={{ position: 'relative' }}>
            {/* Snare div */
            // determine the name for the notes in the colorized scale
            }
            {rootNotes.map((rootnote, index) => (
                <Snare
                    rootnote={rootnote}
                    position={position}
                    fretCount={fretCount}
                    className={index === 0 ? "first-snare" : index === rootNotes.length - 1 ? "last-snare" : ""}
                    key={index}
                    scaleRoot={scaleRoot}
                    colorizeNotes={colorizeNotes}
                    scaleToColorize={scaleToColorize}
                    showChromaticNotes={showChromaticNotes}
                />
            ))}
            {/* Fret div (positioned on top of snare div) */}
            <div style={{ position: 'absolute', transform: 'translateY(-435%) translateX(-0.3%)', zIndex:'9955' }}>
                <FretIndicator fretCount={fretCount} position={position} />
            </div>
        </div>
    </div>
);

export default Tab;
