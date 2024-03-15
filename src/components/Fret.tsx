import React from "react";
import { NoteNames, noteNamesArray } from '../lib/musicology'

interface FretProps {
    note: NoteNames;
    noteName: string;
    active: boolean;
    isNeck?: boolean;
    isScaleRoot? : boolean;
    backgroundColor? : string;
}

const Fret: React.FC<FretProps> = ({ note, noteName, active, isNeck, isScaleRoot, backgroundColor}) => {
    const outerClassName = isNeck ? "neck" : "note"
    const weight = isScaleRoot ? "bolder" : "normal";
    return (
        <div title={noteName} className={outerClassName} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <div className="line"/> 
            {isNeck && 
                <div style={{ marginTop:-14 }}>
                    {noteName}
                </div>
            }
            {active && !isNeck &&
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} title={noteName}>
                    <span style={{
                        display: 'inline-block',
                        width: '20px',
                        height: '20px',
                        lineHeight: '20px',
                        borderRadius: '50%',
                        border: '1px solid grey',
                        textAlign: 'center',
                        fontSize: '12px',
                        color: 'black',
                        fontWeight: weight,
                        zIndex: '99',
                        backgroundColor: backgroundColor
                    }}>
                    {noteName}
                    </span>
                </div>
            }
        </div>
    );
};
export default Fret;

