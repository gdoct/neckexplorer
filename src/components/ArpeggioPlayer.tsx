import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import { Scale, NoteNames } from '../lib/musictypes'
import { playNote } from '../lib/audio'

interface ArpeggioPlayerProps {
    scale: Scale
    rootnote: NoteNames
}

const ArpeggioPlayer: React.FC<ArpeggioPlayerProps> = ({ scale, rootnote }) => {
    const [enableArpeggios, setEnableArpeggios] = useState<boolean>(true);

    const playArpeggio = (e: any) => {
        const deftimeout = 100;
        setEnableArpeggios(false);
        let nextnote: number = rootnote;
        for (let scales: number = 0; scales < 2; scales++) {
            for (let index: number = 0; index < scale.notes.length; index++) {
                const note = scale.notes[index];
                nextnote += note.interval;
                const nextnotenorm = nextnote % 12;
                const octave = Math.floor(nextnote / 12) + 2;
                const timeout = deftimeout * (index + scales * scale.notes.length);
                const timeout_time = Date.now() + timeout
                playNote(nextnotenorm, octave, timeout_time , 0.2);
            }
        }
        setTimeout(() => {
            setEnableArpeggios(true);
        }, 200 * 3);
    }

    return (<div>
        <Button variant="info" onClick={playArpeggio} disabled={!enableArpeggios} >Play arpeggio</Button>
        </div>)
}

export default ArpeggioPlayer;