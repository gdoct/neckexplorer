import React, { useState } from 'react';
import './App.css';
import './Music.css'
import GuitarNeck from './components/GuitarNeck'
import { NoteNames, noteNamesArray } from './lib/musicology';
import ScaleBuilder from './components/Scalebuilder';

function App() {
  const [fretCount, setFretCount] = useState(13);
  const [position, setPosition] = useState(0);
  const [scaleRoot, setScaleRoot] = useState(NoteNames.C);
  const [selectedNotes, setSelectedNotes] = useState<Array<{ interval: number, color: string }>>([]);

  const handleFretCountChange = (event: any) => {
    setFretCount(Number(event.target.value));
  };

  const handlePositionChange = (event: any) => {
    setPosition(Number(event.target.value));
  };

  const handleScaleRootChange = (event: any) => {
    setScaleRoot(Number(event.target.value));
  };

  return (
    <div className="App">
      <div style={{ display: 'block', textAlign: 'center' }}>
          <label>
            Fret Count:
            <input type="number" value={fretCount} onChange={handleFretCountChange} width={13} max={48} min={1}/>
          </label>
          <label>
            Position:
            <input type="number" value={position} onChange={handlePositionChange} width={13} max={47} min={0} />
          </label>
        </div>
      <div>
        <GuitarNeck fretCount={fretCount}
          position={position}
          rootNotes={[NoteNames.E, NoteNames.B, NoteNames.G, NoteNames.D, NoteNames.A, NoteNames.E]}
          colorizeNotes={true}
          scaleRoot={scaleRoot}
          scaleToColorize={selectedNotes}
        />
        
        <div style={{ display: 'flex', textAlign: 'center' }}>
        <label>
            Scale Root:
            <select value={scaleRoot} onChange={handleScaleRootChange}>
              {Object.values(NoteNames).filter(value => typeof value === 'number').map((note, index) => (
                <option key={index} value={note}>{noteNamesArray[note as number]}</option>
              ))}
            </select>
          </label>
          <ScaleBuilder onChange={setSelectedNotes} />
        </div>
      </div>
    </div>
  );
}

export default App;
