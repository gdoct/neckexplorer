import { NoteNames } from './musictypes'

// Calculate the frequency of a note in a given octave
const calculateFrequency = (note: NoteNames, octave: number): number => {
    const baseFrequency = 440.0; // A4 frequency
    const semitoneRatio = 2 ** (1 / 12); // 12-tone equal temperament
    return baseFrequency * (semitoneRatio ** (note - 9 + (octave - 4) * 12));
};

export const playNote = (note: NoteNames, octave: number, after?: number, duration?: number) => {
    const audioContext = new AudioContext();
    const noteduration = duration? duration : 0.2;
    const releaseduration = duration? duration * 1.5 : 0.3;
    const attackduration = duration? duration / 2 : 0.1;
    
    const playSoundAtTime = after ? after : audioContext.currentTime;

    const frequency = calculateFrequency(note, octave);
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sawtooth';
    oscillator.frequency.value = frequency;

    // Create a gain node for the envelope
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0, playSoundAtTime); // Initial volume
    gainNode.gain.linearRampToValueAtTime(1, playSoundAtTime + attackduration);  // A ttack
    gainNode.gain.linearRampToValueAtTime(0.7, playSoundAtTime + noteduration);  // D ecay
    gainNode.gain.setValueAtTime(0.7, playSoundAtTime + noteduration);           // S ustain
    gainNode.gain.linearRampToValueAtTime(0, playSoundAtTime + releaseduration); // R elease

    // Connect the oscillator to the gain node
    oscillator.connect(gainNode);

     // Add a chorus effect
     const chorus = audioContext.createDelay();
     chorus.delayTime.value = noteduration / 5;
     oscillator.connect(chorus);
     chorus.connect(audioContext.destination);

    oscillator.connect(audioContext.destination);
    oscillator.start(playSoundAtTime);
    oscillator.stop(playSoundAtTime + noteduration);
}