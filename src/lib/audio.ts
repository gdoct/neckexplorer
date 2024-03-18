import { NoteNames } from './musicology'

// Calculate the frequency of a note in a given octave
const calculateFrequency = (note: NoteNames, octave: number): number => {
    const baseFrequency = 440.0; // A4 frequency
    const semitoneRatio = 2 ** (1 / 12); // 12-tone equal temperament
    return baseFrequency * (semitoneRatio ** (note - 9 + (octave - 4) * 12));
};

export const playNote = (note: NoteNames, octave: number) => {
    const audioContext = new AudioContext();
    const frequency = calculateFrequency(note, octave);
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sawtooth';
    oscillator.frequency.value = frequency;

    // Create a gain node for the envelope
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0, audioContext.currentTime); // Initial volume
    gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 0.01); // Attack
    gainNode.gain.linearRampToValueAtTime(0.7, audioContext.currentTime + 0.1); // Decay
    gainNode.gain.setValueAtTime(0.7, audioContext.currentTime + 0.2); // Sustain
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.3); // Release

    // Connect the oscillator to the gain node
    oscillator.connect(gainNode);

     // Add a chorus effect
     const chorus = audioContext.createDelay();
     chorus.delayTime.value = 0.03;
     oscillator.connect(chorus);
     chorus.connect(audioContext.destination);

    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + .2);
}