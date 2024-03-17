import React from "react";
import { presetScales } from '../lib/presets'
import Form from 'react-bootstrap/Form';

interface ScalePresetsProps {
    onChange?: (scale: Array<{ interval: number, color: string, name: string }>) => void;
    forceFlat?: boolean;
}

const ScalePresets : React.FC<ScalePresetsProps> = ({ onChange, forceFlat }) => {
    const handlePresetChange = (presetIndex: number) => {
        const selectedPreset = presetScales[presetIndex];
        onChange && onChange(selectedPreset.notes);
    };

    return (
        <div >
            <Form.Select
                onChange={(e) => handlePresetChange(Number(e.target.value))}
                defaultValue="" // Set the default value to an empty string
            >
                <option value="" >
                    Choose a preset
                </option>
                {presetScales.map((scale, index) => (
                    <option key={index} value={index}>
                        {scale.scalename}
                    </option>
                ))}
            </Form.Select>
        </div>
    );
};

export default ScalePresets;