import React, { useState } from 'react';
import './App.css';
import './Music.css'
import GuitarNeck from './components/GuitarNeck'
import { NoteNames, noteNamesArray, noteNamesArraySharp } from './lib/musicology';
import ScalePresets from './components/ScalePresets';
import { ToggleButton } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function App() {
  const [fretCount, setFretCount] = useState(13);
  const [position, setPosition] = useState(0);
  const [forceFlat, setforceFlat] = useState(true);
  const [forceNumeric, setForceNumeric] = useState(false);
  const [scaleRoot, setScaleRoot] = useState(NoteNames.C);
  const [selectedNotes, setSelectedNotes] = useState<Array<{ interval: number, color: string, name: string }>>([]);

  const handleFretCountChange = (event: any) => {
    setFretCount(Number(event.target.value));
  };

  const handlePositionChange = (event: any) => {
    setPosition(Number(event.target.value));
  };

  const handleScaleRootChange = (event: any) => {
    setScaleRoot(Number(event.target.value));
  };

  const handleToggleFlat = (newvalue: boolean) => {
    if (newvalue) { setforceFlat(newvalue); }
    else { setforceFlat(newvalue); }
  };

  const handleToggleNumeric = (newvalue: boolean) => {
    if (newvalue) { setForceNumeric(newvalue); }
    else { setForceNumeric(newvalue); }
  };

  return (
    <div className="App">
      <div>
        <GuitarNeck fretCount={fretCount}
          position={position}
          rootNotes={[NoteNames.E, NoteNames.B, NoteNames.G, NoteNames.D, NoteNames.A, NoteNames.E]}
          colorizeNotes={true}
          scaleRoot={scaleRoot}
          scaleToColorize={selectedNotes}
          forceFlat={forceFlat}
          forceNumeric={forceNumeric}
        />
        <div style={{height:20}}></div>
        <div style={{display: 'inline-flex'}}>
          <label>
          <Form.Select aria-label="Select root key" value={scaleRoot} onChange={handleScaleRootChange}>
              {Object.values(NoteNames).filter(value => typeof value === 'number').map((note, index) => (
                <option key={index} value={note}>{forceFlat ? noteNamesArray[note as number] : noteNamesArraySharp[note as number]}</option>
              ))}
            </Form.Select>
          </label>
          <ScalePresets onChange={setSelectedNotes} />
          </div>
          <div>
          <span><ToggleButton
            className="mb-2"
            id="toggle-check"
            type="checkbox"
            variant="outline-primary"
            checked={forceFlat}
            value="1"
            onChange={(e) => handleToggleFlat(e.currentTarget.checked)}
          >
            Using {forceFlat ? "flat" : "sharp"} notes
          </ToggleButton>
          </span>
          <span>
            <ToggleButton
              className="mb-2"
              id="toggle-numeric"
              type="checkbox"
              variant="outline-primary"
              checked={forceNumeric}
              value="0"
              onChange={(e) => handleToggleNumeric(e.currentTarget.checked)}
            >
              Showing note {forceNumeric ? "numbers" : "names"}
            </ToggleButton>
          </span>
        </div>
        <div style={{ display: 'block', textAlign: 'center' }}>
        <label>
          Visible fret Count:
          <input type="number" value={fretCount} onChange={handleFretCountChange} width={13} max={48} min={1} />
        </label>
        <label>
          Root position:
          <input type="number" value={position} onChange={handlePositionChange} width={13} max={47} min={0} />
        </label>
      </div>
      </div>
    </div>
  );
}

export default App;
