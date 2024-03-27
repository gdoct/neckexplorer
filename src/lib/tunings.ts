import { GuitarTuningGroup, NoteNames } from './musictypes'

export const presetTunings: GuitarTuningGroup[] = [
    {
        name: "Default guitar",
        tunings: [
            {
                name: "Standard tuning", strings: [
                    { rootnote: NoteNames.E, octave: 5 },
                    { rootnote: NoteNames.B, octave: 5 },
                    { rootnote: NoteNames.G, octave: 4 },
                    { rootnote: NoteNames.D, octave: 4 },
                    { rootnote: NoteNames.A, octave: 4 },
                    { rootnote: NoteNames.E, octave: 3 },
                ]
            },
            {
                name: "Seven string", strings: [
                    { rootnote: NoteNames.E, octave: 5 },
                    { rootnote: NoteNames.B, octave: 5 },
                    { rootnote: NoteNames.G, octave: 4 },
                    { rootnote: NoteNames.D, octave: 4 },
                    { rootnote: NoteNames.A, octave: 4 },
                    { rootnote: NoteNames.E, octave: 3 },
                    { rootnote: NoteNames.B, octave: 3 },
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
                    { rootnote: NoteNames.D, octave: 4 },
                    { rootnote: NoteNames.B, octave: 4 },
                    { rootnote: NoteNames.G, octave: 3 },
                    { rootnote: NoteNames.D, octave: 3 },
                    { rootnote: NoteNames.G, octave: 2 },
                    { rootnote: NoteNames.D, octave: 2 }
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
                    { rootnote: NoteNames.D, octave: 4 },
                    { rootnote: NoteNames.B, octave: 4 },
                    { rootnote: NoteNames.G, octave: 3 },
                    { rootnote: NoteNames.D, octave: 3 },
                    { rootnote: NoteNames.G, octave: 2 },
                    { rootnote: NoteNames.D, octave: 2 }
                ]
            }
        ]
    }
];
