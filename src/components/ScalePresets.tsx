import React, { useState } from "react";
import { ScaleType,  Scale} from '../lib/musictypes'
import { presetScales } from '../lib/presets'
import Form from 'react-bootstrap/Form';

interface ScalePresetsProps {
    onChange?: (scale: Scale) => void;
}

type Dictionary<Key extends keyof any, Value> = {
    [key in Key]: Value;
};

const ScalePresets: React.FC<ScalePresetsProps> = ({ onChange }) => {

    const presets: ScaleType[] = presetScales.map(s => s);
    const scaleTypes = presets.map(s => s.type);

    const [activePresets] = useState<Dictionary<string, string>>( {} );

    const handleMultiPresetChange = (groupname: string, target: any) => {
        let group = presets.find(p => p.type === groupname);
        if (!group) return;
        const newPresetIndex = Number(target.value);
        const selectedPreset = group.scales[newPresetIndex];
        onChange && onChange(selectedPreset);
        // setActivePresetGroup(groupname);
        for (const key in activePresets) {
            activePresets[key] = (groupname === key) ? groupname + '_' + newPresetIndex : "";
        }
    }

    const getActivePresetForGroup = (groupname: string) => {
        for (const key in activePresets) {
            if (key === groupname) {
                return activePresets[key];
            }
        }
        return "";
    }
   
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
            {scaleTypes.map((groupname: string, index) => {
                let scales = presets.find(s => s.type === groupname)?.scales || [];
                return (
                    <Form.Select
                        key={index}
                        value={getActivePresetForGroup(groupname)}
                        onChange={e => handleMultiPresetChange(groupname, e.target)}
                    >
                        <option value="" style={{ fontStyle: 'italic', color: 'red' }} >&#x28;{groupname}&#x29;</option>
                        {scales.map((scale, scaleIndex) => (
                            <option key={groupname + '_' + scaleIndex} value={scaleIndex}>
                                {scale.scalename}
                            </option>
                        ))}
                    </Form.Select>
                );
            })}
        </div>
    );
};

export default ScalePresets;