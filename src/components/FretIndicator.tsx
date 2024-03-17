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
                    if (position === 0) {
                        return (<div key={i} className='fret-indicator fret-indicator-doubledot-neck-visible'>..</div>)
                    } else
                    {
                        return (<div key={i} className='fret-indicator fret-indicator-doubledot'>..</div>)
                    }
                } else if (singledot) {
                    if (position === 0) {
                        return (<div key={i} className='fret-indicator fret-indicator-singledot-neck-visible'>.</div>);
                    }
                    else {
                        return (<div key={i} className='fret-indicator fret-indicator-singledot'>.</div>);
                    }
                } 
                return (<div key={i} className='fret-indicator fret-indicator-singledot' ></div>)
                }
            )}
        </div>
    </div>
);

export default FretIndicator;
