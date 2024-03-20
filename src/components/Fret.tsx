import React, { useState } from "react";
import { NoteNames } from '../lib/musictypes'
import { playNote } from '../lib/audio'
import '../Music.css'

interface FretProps {
    note: NoteNames;
    noteName: string;
    octave: number;
    active: boolean;
    isNeck?: boolean;
    isScaleRoot? : boolean;
    backgroundColor? : string;
    fretImage?: string;
}

const Fret: React.FC<FretProps> = ({ note, noteName, octave, active, isNeck, isScaleRoot, backgroundColor, fretImage}) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isOver, setIsOver] = useState(false);

    const playGuitarNote = (note: NoteNames, octave: number) => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 300);
        playNote(note, octave);
    };

    
    const fretstyle = {
        backgroundImage: fretImage,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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

    return (
        <div title={noteName} 
             className={isNeck ? "neck" : "note"} 
             style={fretstyle}
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
                <div style={fretstyle} title={noteName}>
                    <span style={notestyle} >
                    {noteName}
                    </span>
                </div>
            }
        </div>
    );
};
export default Fret;

