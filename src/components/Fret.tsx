import React, { useState } from "react";
import { NoteNames } from '../lib/musictypes'
import { convertToRoman } from '../lib/musicology';
import { FretDisplaySettings } from '../lib/interfaces'
import { playNote } from '../lib/audio'
import '../Music.css'

interface FretProps {
    note: NoteNames;
    noteName: string;
    octave: number;
    active: boolean;
    displaySettings: FretDisplaySettings,
}

const Fret: React.FC<FretProps> = ({ note, noteName, octave, active, displaySettings }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isOver, setIsOver] = useState(false);

    const enableSound = false;

    const playGuitarNote = (note: NoteNames, octave: number) => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 300);
        if (enableSound)
            playNote(note, octave);
    };

    const notestyle = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        lineHeight: '19px',
        borderRadius: '50%',
        border: '1px solid grey',
        fontSize: '12px',
        color: 'black',
        zIndex: '999',
        fontWeight: displaySettings.isScaleRoot ? "bolder" : "normal",
        backgroundColor: displaySettings.backgroundColor,
        cursor: 'pointer',
        transform: isClicked ? 'scale(1.5)' : isOver ? 'scale(1.3)' : 'scale(1)',
        transition: 'transform 0.3s ease', // Add smooth transition
    };

    type PositionType = 'absolute' | 'relative' | 'fixed' | 'static' | 'sticky';
    const relPositionValue: PositionType = 'relative';
    const fretstyle = {
        width: displaySettings.isNeck ? '40px' : '70px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center', // Center the content horizontally
        position: relPositionValue, // Needed for absolute positioning of the dot
        '--dot-display': displaySettings.hasDot ? 'block' : 'none',

    };

    const innerFretstyle = {
        width: displaySettings.isNeck ? '40px' : '70px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center', // Center the content horizontally
    }

    const getRomanDisplaySize = (roman: string) => {
        const len = roman.length;
        if (len === 0) 
            return 0;
        if (len > 7) 
            return 4;
        if (len > 5) 
            return 6;
        if (len > 3) 
            return 8;
        return 10;
    };

    const romanNumeral = displaySettings.hasRomanNumeral ? convertToRoman(displaySettings.rootposition) : '';
    const romanDisplaySize = getRomanDisplaySize(romanNumeral);

    return (
        <div title={noteName} 
             style={fretstyle} 
             className="fretslot"
             onMouseOver={e => setIsOver(true)}
             onMouseOut={e => setIsOver(false)}
             onClick={(e) => playGuitarNote(note, octave)}>
                { displaySettings.hasRomanNumeral && (
                <svg width="20" height="20" className="roman-numeral">
                    <text 
                    x="0" 
                    y="15" 
                    font-family="Garamond, serif" 
                    font-size={romanDisplaySize}
                    fill="grey">{romanNumeral}</text>
                </svg> )}
            <div className="line"/> 
            {displaySettings.isNeck && 
                <div style={{ marginTop:-14 }}>
                    {noteName}
                </div>
            }
            {active && !displaySettings.isNeck &&
                <div style={innerFretstyle} title={noteName}>
                    <span style={notestyle} >
                    {noteName}
                    </span>
                </div>
            }
        </div>
    );
};
export default Fret;

