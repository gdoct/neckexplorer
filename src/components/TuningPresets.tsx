import React from "react";
import Form from 'react-bootstrap/Form';
import { presetTunings } from '../lib/tunings'
import { GuitarTuning } from '../lib/musictypes'

interface TuningPresetProps {
    onChange?: (tuning?: GuitarTuning) => void;
}

// export const presetTunings: GuitarTuningGroup[] = [
//     {
//         name: "Default guitar",
//         tunings: [
//             {
//                 name: "Standard tuning", strings: [
//                     { rootnote: NoteNames.E, octave: 4 },
//                     { rootnote: NoteNames.B, octave: 4 },
//                     { rootnote: NoteNames.G, octave: 3 },
//                     { rootnote: NoteNames.D, octave: 2 },
//                     { rootnote: NoteNames.A, octave: 2 },
//                     { rootnote: NoteNames.E, octave: 1 },
//                 ]
//             },
//             {
//                 name: "Seven string", strings: [
//                     { rootnote: NoteNames.E, octave: 4 },
//                     { rootnote: NoteNames.B, octave: 4 },
// and so on ..

const TuningPreset: React.FC<TuningPresetProps> = ({ onChange }) => {

    const handleTuningChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            const selectedValue = event.target.value; // Format: '{groupid}-{index}'
            if (selectedValue) {
                const [groupId, tuningIndex] = selectedValue.split('-').map(Number);
                if (
                    presetTunings &&
                    presetTunings[groupId] &&
                    presetTunings[groupId].tunings &&
                    presetTunings[groupId].tunings[tuningIndex]
                ) {
                    const selectedTuning = presetTunings[groupId].tunings[tuningIndex];
                    onChange(selectedTuning);
                }
            }
        }
    };

    return (<div>
        <Form.Select size="sm" onChange={e => handleTuningChange(e)}>
            {presetTunings.map((presetgroup, num) => [
                <option key={`group-${num}`} disabled>{presetgroup.name}</option>,
                ...presetgroup.tunings.map((preset, index) => (
                    <option key={`${num}-${index}`} value={`${num}-${index}`}>
                        &nbsp;{preset.name}
                    </option>
                ))
            ])}
        </Form.Select>

    </div>);
}

export default TuningPreset;