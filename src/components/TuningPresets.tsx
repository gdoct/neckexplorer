import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { presetTunings } from '../lib/presets'
import { GuitarTuning } from '../lib/musictypes'

interface TuningPresetProps {
    onChange?: (tuning?: GuitarTuning) => void;
}

const TuningPreset: React.FC<TuningPresetProps> = ({onChange}) => {
    const handleTuningChange = (target: any) => {
        const index = target.value;
        if (onChange) {
            onChange(presetTunings[index]);
        }
    }

    return ( <div>
        <Form.Select size="sm" 
                        onChange={e => handleTuningChange(e.target)}>
                        {presetTunings.map((preset, index) => (
                            <option key={index} value={index}>
                                {preset.name}
                            </option>
                        ))}
                    </Form.Select>
        </div> );
}

export default TuningPreset;