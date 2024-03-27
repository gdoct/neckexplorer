import React from "react";
import Form from 'react-bootstrap/Form';
import { presetTunings } from '../lib/tunings'
import { GuitarTuning } from '../lib/musictypes'

interface TuningPresetProps {
    onChange?: (tuning?: GuitarTuning) => void;
}

const TuningPreset: React.FC<TuningPresetProps> = ({ onChange }) => {

    const handleTuningChange = (target: any) => {
        if (onChange) {
            onChange(target as GuitarTuning);
        }
    }

    return (<div>
        <Form.Select size="sm" onChange={e => handleTuningChange(e.target)}>
            {presetTunings.map((presetgroup, num) => [
                <option key={`group-${num}`} disabled>{presetgroup.name}</option>,
                ...presetgroup.tunings.map((preset, index) => (
                    <option key={`${num}-${index}`} value={index}>
                        &nbsp;{preset.name}
                    </option>
                ))
            ])}
        </Form.Select>

    </div>);
}

export default TuningPreset;