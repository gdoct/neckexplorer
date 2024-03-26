import React, { useState } from "react";
import { NoteNames } from '../lib/musictypes'
import { playNote } from '../lib/audio'
import '../Music.css'

interface FretProps {
    note: NoteNames;
    noteName: string;
    octave: number;
    active: boolean;
    hasDot: boolean;
    isNeck?: boolean;
    isScaleRoot? : boolean;
    backgroundColor? : string;
}

const Fret: React.FC<FretProps> = ({ note, noteName, octave, active, hasDot, isNeck, isScaleRoot, backgroundColor}) => {
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
        fontWeight: isScaleRoot ? "bolder" : "normal",
        backgroundColor: backgroundColor,
        cursor: 'pointer',
        transform: isClicked ? 'scale(1.5)' : isOver ? 'scale(1.3)' : 'scale(1)',
        transition: 'transform 0.3s ease', // Add smooth transition
    };

    type PositionType = 'absolute' | 'relative' | 'fixed' | 'static' | 'sticky';
    const relPositionValue: PositionType = 'relative';
    const fretstyle = {
        width: isNeck ? '40px' : '70px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center', // Center the content horizontally
        position: relPositionValue, // Needed for absolute positioning of the dot
        '--dot-display': hasDot ? 'block' : 'none'
    };

    const innerFretstyle = {
        width: isNeck ? '40px' : '70px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center', // Center the content horizontally
    }

    return (
        <div title={noteName} 
             style={fretstyle} 
             className="fretslot"
             onMouseOver={e => setIsOver(true)}
             onMouseOut={e => setIsOver(false)}
             onClick={(e) => playGuitarNote(note, octave)}>
            <div className="line"/> 
            {isNeck && 
                <div style={{ marginTop:-14 }}>
                    {noteName}
                </div>
            }
            {active && !isNeck &&
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

