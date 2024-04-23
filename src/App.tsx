import React, { useState } from 'react';
import './App.css';
import './Music.css'
import GuitarNeck from './components/GuitarNeck'
import ArpeggioPlayer from './components/ArpeggioPlayer'
import { GuitarTuning, NoteNames, Scale, noteNamesArray, noteNamesArraySharp } from './lib/musictypes';
import ScalePresets from './components/ScalePresets';
import { ToggleButton } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { BsCaretLeft, BsCaretRight, BsPlus, BsDash } from 'react-icons/bs';
import TuningPresets from './components/TuningPresets'
import { presetTunings } from './lib/tunings';
// import TabPlayer from './components/TabPlayer';

function App() {
  const [fretCount, setFretCount] = useState(6);
  const [position, setPosition] = useState(4);
  const [forceFlat, setforceFlat] = useState(true);
  const [forceNumeric, setForceNumeric] = useState(false);
  const [scaleRoot, setScaleRoot] = useState(NoteNames.C);
  const [selectedNotes, setSelectedNotes] = useState<Scale>({ scalename: "", notes: [] });
  const defaultTuning = presetTunings[0].tunings[0];
  const [activeTuning, setActiveTuning] = useState<GuitarTuning>(defaultTuning);

  const useArpeggioPlayer = false;
  const useTabPlayer = true;

  const handleSetScale = (scale: Scale) => {
    setSelectedNotes(scale);
  }

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

  const setTuning = (t?: GuitarTuning) => {
    if (t) {
      setActiveTuning(t);
    }
  }

  return (
    <div className="App">
      <div style={{ display: 'block', alignItems: 'left' }}>
        <div style={{ display: 'flex', alignItems: 'left' }}>
          <Button variant="light" style={{ marginRight: 10 }} onClick={e => { if (position > 0) setPosition(position - 1) }} >
            <BsCaretLeft/>
          </Button>
          <div style={{ border: '1px solid black', padding: 10 }}>
            <GuitarNeck
              fretCount={fretCount}
              position={position}
              tuning={activeTuning}
              colorizeNotes={true}
              scaleRoot={scaleRoot}
              scaleToColorize={selectedNotes}
              forceFlat={forceFlat}
              forceNumeric={forceNumeric}
            />
            <div style={{ display: 'flex', alignItems: 'left' }}>
              <div style={{ alignItems: 'left', alignContent: 'left', textAlign: 'left' }}>
                <Button variant="light" size="sm" style={{ marginLeft: 10 }} onClick={e => { if (fretCount > 3) setFretCount(fretCount - 1) }}>
                  <BsDash />
                </Button>
                <Button variant="light" size="sm" style={{ marginLeft: 10 }} onClick={e => { setFretCount(fretCount + 1) }}>
                  <BsPlus />
                </Button>
              </div>
              <TuningPresets onChange={setTuning} />
              <label>
                <Form.Select aria-label="Select root key" value={scaleRoot} onChange={handleScaleRootChange} size="sm" >
                  {Object.values(NoteNames).filter(value => typeof value === 'number').map((note, index) => (
                    <option key={index} value={note}>{forceFlat ? noteNamesArray[note as number] : noteNamesArraySharp[note as number]}</option>
                  ))}
                </Form.Select>
              </label>
              {/* {selectedNotes.scalename && (<h6 style={{marginBottom: '6px !important'}}>{getSimpleNoteName(scaleRoot, forceFlat)} {selectedNotes.scalename}</h6>)} */}
            </div>
          </div>
          <Button variant="light" style={{ marginRight: 10 }} onClick={e => setPosition(position + 1)} >
            <BsCaretRight/>
          </Button>
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'left', width: '100%' }}>
          <div style={{ width: '80px' }} ></div>
          <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>

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
          </div>
          <div style={{ width: '80px' }} ></div>
          <div>
            <ScalePresets onChange={handleSetScale} />
          </div>
        </div>
        {useArpeggioPlayer &&
          <div style={{ display: 'block', textAlign: 'center' }}>
            <ArpeggioPlayer rootnote={scaleRoot} scale={selectedNotes} />
          </div>}

          {useTabPlayer &&
          <div style={{ display: 'block', textAlign: 'center' }}>
            {/* <TabPlayer  /> */}
          </div>}
      </div>
    </div>
  );
}

export default App;
