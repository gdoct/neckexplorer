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

  const handleToggleFlat = () => {
    setforceFlat(!forceFlat);
  };

  const handleToggleNumeric = () => {
    setForceNumeric(!forceNumeric);
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
          <Button title='navigate to the left' variant="light" style={{ marginRight: 10 }} onClick={e => { if (position > 0) setPosition(position - 1) }} >
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
              <span title='decrease visible fret count'>
                <Button variant="light" size="sm" style={{ marginLeft: 10 }} onClick={e => { if (fretCount > 3) setFretCount(fretCount - 1) }}>
                  <BsDash />
                </Button></span>
                <span title='increase visible fret count'>
                <Button variant="light" size="sm" style={{ marginLeft: 10 }} onClick={e => { setFretCount(fretCount + 1) }}>
                  <BsPlus />
                </Button>
                </span>
              </div>
              <span title='select guitar tuning'>
              <TuningPresets onChange={setTuning} />
              </span>
              <Button
                size='sm'
                variant="outline-secondary"
                onClick={(e) => handleToggleFlat()}
              ><span title='toggle flat/sharp' className='musicText' >{forceFlat ? "b" : "#"}</span></Button>
                <Button
                  size='sm'
                  className="sm"
                  variant="outline-secondary"
                  onClick={(e) => handleToggleNumeric()}
                >
                  <span title='toggle note names / numbers' className='musictext'>{forceNumeric ? "1" : "A"}</span>
                </Button>
              <label title='select scale root'>
                <Form.Select aria-label="Select root key" value={scaleRoot} onChange={handleScaleRootChange} size="sm" >
                  {Object.values(NoteNames).filter(value => typeof value === 'number').map((note, index) => (
                    <option key={index} value={note}>{forceFlat ? noteNamesArray[note as number] : noteNamesArraySharp[note as number]}</option>
                  ))}
                </Form.Select>
              </label>
            </div>
          </div>
          <Button title='navigate to the right'  variant="light" style={{ marginRight: 10 }} onClick={e => setPosition(position + 1)} >
            <BsCaretRight/>
          </Button>
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'left', width: '100%' }}>
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
