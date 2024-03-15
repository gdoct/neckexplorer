import React from "react";

interface FretIndicatorProps {
    position: number;
    fretCount: number;
}

const fretDots: number[] = [3,5,7,9,12,15,17,19,22];
const fretDoubleDots: number[] = [12,24];

const FretIndicator: React.FC<FretIndicatorProps & { className?: string }> = ({ position, fretCount, className }) => (
    <div className="snare">
        <div style={{ display: 'flex' }} className={className}>
            {Array.from({ length: fretCount }, (_, i) => {
                const thisposition = i + position;
                const singledot = fretDots.includes(thisposition);
                const doubledot = fretDoubleDots.includes(thisposition);
                if (doubledot) {
                    return <div key={i} className='fret-indicator-doubledot'>..</div>
                } else if (singledot) {
                    return (<div key={i} className='fret-indicator'>.</div>);
                } 
                return (<div key={i} className='fret-indicator' ></div>)
                }
            )}
        </div>
    </div>
);

export default FretIndicator;
