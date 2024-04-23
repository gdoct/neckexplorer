import React, { useState } from "react";
import { Scale } from '../lib/musictypes'
import { presetScales } from '../lib/presets'
import ListGroup from 'react-bootstrap/ListGroup';
import { act } from "react-dom/test-utils";

interface ScalePresetsProps {
    onChange?: (scale: Scale) => void;
}

interface ScaleData {
    enabled: boolean,
    name: string,
    type: string,
    scale: Scale | undefined
}

const ListItemStyle = {
    backgroundColor: 'blue',
    color: 'white'
}


const ScalePresets: React.FC<ScalePresetsProps> = ({ onChange }) => {
    const selectScale = function (event: any, scaledata: ScaleData) {
        if (!scaledata.enabled) {
            if (scaledata.name === activeScaleGroup) {
                setActiveScaleGroup('');
            } else {
                setActiveScaleGroup(scaledata.name);
            }
            return;
        }
        if (scaledata.scale) {
            setActiveScale(scaledata);
            let actualscale: Scale = scaledata.scale;
            if (onChange && actualscale) {
                onChange(actualscale);
            }
        }
    };

    const [activeScale, setActiveScale] = useState<ScaleData | undefined>(undefined);
    const [activeScaleGroup, setActiveScaleGroup] = useState<string>("");

    const getItemStyle = (item: ScaleData) => { 
        if (!item.enabled) return { 
            backgroundColor: 'darkslategray',
            color: 'antiquewhite',
            padding: '0px 10px'
        }
        if (activeScale && item.name === activeScale.name && item.type === activeScale.type) {
            return { 
                backgroundColor: 'lightyellow',
                padding: '0px 10px'
            }
        }
        return { padding: '0px 10px' };
    };

    let allScales: ScaleData[] = [];
    for (const presetgroup of presetScales) {
        allScales.push({ enabled: false, name: presetgroup.type, type: presetgroup.type, scale: undefined });
        if (presetgroup.type === activeScaleGroup) {
            for (const scale of presetgroup.scales) {
                allScales.push({ enabled: true, name: scale.scalename, type: presetgroup.type, scale: scale });
            }
        }
    }
    return (
        <div style={{ height: "260px", width: "250px", overflowY: "scroll", 'margin': '5px' }}>
                <ListGroup>
                    {allScales.map((scale, index) => (
                        <ListGroup.Item
                            key={index}
                            action
                            onClick={e => selectScale(e.target, scale)}
                            style={getItemStyle(scale)}
                        >
                            {scale.name}

                        </ListGroup.Item>
                    ))}
                </ListGroup>
        </div>
    );
};

export default ScalePresets;