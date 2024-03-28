import { GuitarTuningGroup, NoteNames } from './musictypes'

export const presetTunings: GuitarTuningGroup[] = [
    {
        name: "Default guitar",
        tunings: [
            {
                name: "Standard tuning", strings: [
                    { rootnote: NoteNames.E, octave: 4 },
                    { rootnote: NoteNames.B, octave: 4 },
                    { rootnote: NoteNames.G, octave: 3 },
                    { rootnote: NoteNames.D, octave: 2 },
                    { rootnote: NoteNames.A, octave: 2 },
                    { rootnote: NoteNames.E, octave: 1 },
                ]
            },
            {
                name: "Seven string", strings: [
                    { rootnote: NoteNames.E, octave: 4 },
                    { rootnote: NoteNames.B, octave: 4 },
                    { rootnote: NoteNames.G, octave: 3 },
                    { rootnote: NoteNames.D, octave: 3 },
                    { rootnote: NoteNames.A, octave: 3 },
                    { rootnote: NoteNames.E, octave: 2 },
                    { rootnote: NoteNames.B, octave: 2 },
                ]
            },
        ]
    },

    {
        name: "Alternative guitar tunings",
        tunings: [
            {
                "name": "Open G",
                "strings": [
                    { rootnote: NoteNames.D, octave: 3 },
                    { rootnote: NoteNames.B, octave: 3 },
                    { rootnote: NoteNames.G, octave: 2 },
                    { rootnote: NoteNames.D, octave: 2 },
                    { rootnote: NoteNames.G, octave: 3 },
                    { rootnote: NoteNames.D, octave: 3 }
                ]
            }
        ]
    },

    {
        name: "Other instruments",
        tunings: [
            {
                "name": "Bass",
                "strings": [
                    { rootnote: NoteNames.D, octave: 3 },
                    { rootnote: NoteNames.B, octave: 3 },
                    { rootnote: NoteNames.G, octave: 2 },
                    { rootnote: NoteNames.D, octave: 2 },
                    { rootnote: NoteNames.G, octave: 3 },
                    { rootnote: NoteNames.D, octave: 3 }
                ]
            }
        ]
    }
];
