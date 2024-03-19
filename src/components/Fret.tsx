import React, { useState } from "react";
import { NoteNames } from '../lib/musictypes'
import { playNote } from '../lib/audio'
import '../Music.css'
import doubleDotImage from './img/double-dot.png';
import singleDotImage from './img/single-dot.png';

interface FretProps {
    note: NoteNames;
    noteName: string;
    position: number;
    octave: number;
    active: boolean;
    showDot: boolean;
    isNeck?: boolean;
    isScaleRoot? : boolean;
    backgroundColor? : string;
}

const Fret: React.FC<FretProps> = ({ note, noteName, position, octave, active, showDot, isNeck, isScaleRoot, backgroundColor}) => {
    const [isClicked, setIsClicked] = useState(false);

    const playGuitarNote = (note: NoteNames, octave: number) => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 300);
        playNote(note, octave);
    };

    const fretImage = (fretposition: number):string => {
        if (!showDot || fretposition === 0) return '';
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
    const fretstyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundImage:`url(${fretImage(position)})`,
        // backgroundSize: '100%',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'right 20px bottom 22px'
    };
    
    const notestyle = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        lineHeight: '20px',
        borderRadius: '50%',
        border: '1px solid grey',
        fontSize: '12px',
        color: 'black',
        zIndex: '999',
        fontWeight: isScaleRoot ? "bolder" : "normal",
        backgroundColor: backgroundColor,
        cursor: 'pointer',
        transform: isClicked ? 'scale(1.5)' : 'scale(1)', // Scale up when clicked
        transition: 'transform 0.3s ease', // Add smooth transition
    };

    return (
        <div title={noteName} 
             className={isNeck ? "neck" : "note"} 
             style={fretstyle}
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

