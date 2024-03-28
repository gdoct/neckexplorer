import { NoteNames, noteNamesArraySharp } from './musictypes'

const samplesfolder = '/samples/';

const transpose = (audioContext: AudioContext, buffer: AudioBuffer, octave: number): AudioBufferSourceNode => {
    // Usage example:
    // To transpose C3 to C2, steps would be -12 (down one octave)
    // To transpose A5 to A7, steps would be 24 (up two octaves)
    const steps = octave * 12;
    // Create a buffer source
    const source = audioContext.createBufferSource();
    source.buffer = buffer;

    // Calculate the playback rate for transposition
    const semitoneRatio = Math.pow(2, 1 / 12);
    source.playbackRate.value = Math.pow(semitoneRatio, steps);

    return source;
};

const availableNoteFiles = ['A2',
    'A3',
    'A4',
    'As2',
    'As3',
    'As4',
    'B2',
    'B3',
    'B4',
    'C3',
    'C4',
    //'C5',
    'Cs3',
    'Cs4',
    //'Cs5',
    'D2',
    'D3',
    'D4',
    'D5',
    'Ds2',
    'Ds3',
    'Ds4',
    'E2',
    'E3',
    'E4',
    'F2',
    'F3',
    'F4',
    'Fs2',
    'Fs3',
    'Fs4',
    'G2',
    'G3',
    'G4',
    'Gs2',
    'Gs3',
    'Gs4'];

const getBaseNoteFileName = (note: NoteNames, octave: number): { fileName: string, octaveShift: number } => {
    let octaveShift = 0;
    if (note < NoteNames.C) octaveShift -= 1;
    let baseNoteFileName = noteNamesArraySharp[note].replace('#', 's') + octave;
    if (!availableNoteFiles.includes(baseNoteFileName)) {
        if (octave < 3) {
            octaveShift = -(3 - octave);
            if (octaveShift < -3) octaveShift = -3;
        }
        else if (octave > 4) {
            octaveShift = octave - 4;
            if (octaveShift > 7) octaveShift = 7;
        }
        baseNoteFileName = noteNamesArraySharp[note].replace('#', 's') + (octave - octaveShift)
    }

    return { fileName: baseNoteFileName, octaveShift };
};

export const playNote = async (note: NoteNames, octave: number, duration: number = 1, after?: number) => {
    // note NoteNames.A# in octave 5 will resolve to /samples/As5.wav
    let baseNoteFilename = getBaseNoteFileName(note, octave);
    let noteUri = samplesfolder + baseNoteFilename.fileName + '.wav';

    const response = await fetch(noteUri);
    if (response.ok) {
        const arrayBuffer = await response.arrayBuffer();
        const audioContext = new AudioContext();

        audioContext.decodeAudioData(arrayBuffer, (audioBuffer) => {
            const source = transpose(audioContext, audioBuffer, baseNoteFilename.octaveShift);
            source.connect(audioContext.destination);
            const startTime = audioContext.currentTime + (after || 0);
            source.start(startTime);
            source.stop(startTime + duration);
        });
    } else {
        console.error('Audio file does not exist:', noteUri);
    }
};