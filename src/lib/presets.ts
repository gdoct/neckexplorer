const initialcolors = ['red', 'lightgreen', 'chocolate',
    'papayawhip', 'tan', 'thistle', 'orange',
    'olive', 'gold', 'linen'];

export const presetScales = [
    {
        type: "Pentatonic",
        scales: [
            {

                scalename: 'Major Pentatonic scale', notes: [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 2, color: initialcolors[1], name: "2" },
                    { interval: 4, color: initialcolors[2], name: "3" },
                    { interval: 7, color: initialcolors[3], name: "5" },
                    { interval: 9, color: initialcolors[4], name: "6" },
                ]
            },
            {
                scalename: 'Minor Pentatonic scale', notes: [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 3, color: initialcolors[1], name: "b3" },
                    { interval: 5, color: initialcolors[2], name: "4" },
                    { interval: 7, color: initialcolors[3], name: "5" },
                    { interval: 10, color: initialcolors[4], name: "b7" },
                ]
            },
            {
                scalename: "Blues scale (Minor)",
                notes: [
                    {interval: 0, color: initialcolors[0], name: ''},
                    {interval: 3, color: initialcolors[1], name: 'b3'},
                    {interval: 5, color: initialcolors[2], name: '4'},
                    {interval: 6, color: initialcolors[3], name: 'b5'},
                    {interval: 7, color: initialcolors[4], name: '5'},
                    {interval: 10, color: initialcolors[5], name: 'b7'}
                ]
            }]
    },
    {
        "type": "Diatonic modes",
        "scales": [
            {
                "scalename": "Major / Ionian scale",
                "notes": [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 2, color: initialcolors[1], name: "2" },
                    { interval: 4, color: initialcolors[2], name: "3" },
                    { interval: 5, color: initialcolors[3], name: "4" },
                    { interval: 7, color: initialcolors[4], name: "5" },
                    { interval: 9, color: initialcolors[5], name: "6" },
                    { interval: 11, color: initialcolors[6], name: "7" }
                ]
            },
            {
                "scalename": "Minor / Dorian scale",
                "notes": [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 2, color: initialcolors[1], name: "2" },
                    { interval: 3, color: initialcolors[2], name: "b3" },
                    { interval: 5, color: initialcolors[3], name: "4" },
                    { interval: 7, color: initialcolors[4], name: "5" },
                    { interval: 9, color: initialcolors[5], name: "6" },
                    { interval: 10, color: initialcolors[6], name: "b7" }
                ]
            },
            {
                "scalename": "Phrygian scale",
                "notes": [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 1, color: initialcolors[1], name: "b2" },
                    { interval: 3, color: initialcolors[2], name: "b3" },
                    { interval: 5, color: initialcolors[3], name: "4" },
                    { interval: 7, color: initialcolors[4], name: "5" },
                    { interval: 8, color: initialcolors[5], name: "b6" },
                    { interval: 10, color: initialcolors[6], name: "b7" }
                ]
            },
            {
                "scalename": "Lydian scale",
                "notes": [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 2, color: initialcolors[1], name: "2" },
                    { interval: 4, color: initialcolors[2], name: "3" },
                    { interval: 6, color: initialcolors[3], name: "#4" },
                    { interval: 7, color: initialcolors[4], name: "5" },
                    { interval: 9, color: initialcolors[5], name: "6" },
                    { interval: 11, color: initialcolors[6], name: "7" }
                ]
            },
            {
                "scalename": "Mixolydian scale",
                "notes": [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 2, color: initialcolors[1], name: "2" },
                    { interval: 4, color: initialcolors[2], name: "3" },
                    { interval: 5, color: initialcolors[3], name: "4" },
                    { interval: 7, color: initialcolors[4], name: "5" },
                    { interval: 9, color: initialcolors[5], name: "6" },
                    { interval: 10, color: initialcolors[6], name: "b7" }
                ]
            },
            {
                "scalename": "Aeolian scale",
                "notes": [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 2, color: initialcolors[1], name: "2" },
                    { interval: 3, color: initialcolors[2], name: "b3" },
                    { interval: 5, color: initialcolors[3], name: "4" },
                    { interval: 7, color: initialcolors[4], name: "5" },
                    { interval: 8, color: initialcolors[5], name: "b6" },
                    { interval: 10, color: initialcolors[6], name: "b7" }
                ]
            },
            {
                "scalename": "Locrian scale",
                "notes": [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 1, color: initialcolors[1], name: "b2" },
                    { interval: 3, color: initialcolors[2], name: "b3" },
                    { interval: 5, color: initialcolors[3], name: "4" },
                    { interval: 6, color: initialcolors[4], name: "b5" },
                    { interval: 8, color: initialcolors[5], name: "b6" },
                    { interval: 10, color: initialcolors[6], name: "b7" }
                ]
            }]
    },
    {
        "type": "Minor scales",
        "scales": [
            {
                "scalename": "Natural Minor (Aeolian) scale",
                "notes": [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 2, color: initialcolors[1], name: "2" },
                    { interval: 3, color: initialcolors[2], name: "b3" },
                    { interval: 5, color: initialcolors[3], name: "4" },
                    { interval: 7, color: initialcolors[4], name: "5" },
                    { interval: 8, color: initialcolors[5], name: "b6" },
                    { interval: 10, color: initialcolors[6], name: "b7" }
                ]
            },
            {
                "scalename": "Harmonic Minor scale",
                "notes": [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 2, color: initialcolors[1], name: "2" },
                    { interval: 3, color: initialcolors[2], name: "b3" },
                    { interval: 5, color: initialcolors[3], name: "4" },
                    { interval: 7, color: initialcolors[4], name: "5" },
                    { interval: 8, color: initialcolors[5], name: "b6" },
                    { interval: 11, color: initialcolors[6], name: "7" }
                ]
            },
            {
                "scalename": "Melodic Minor scale",
                "notes": [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 2, color: initialcolors[1], name: "2" },
                    { interval: 3, color: initialcolors[2], name: "b3" },
                    { interval: 5, color: initialcolors[3], name: "4" },
                    { interval: 7, color: initialcolors[4], name: "5" },
                    { interval: 9, color: initialcolors[5], name: "6" },
                    { interval: 11, color: initialcolors[6], name: "7" }
                ]
            },
            {
                "scalename": "Harmonic major scale",
                "notes": [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 2, color: initialcolors[1], name: "2" },
                    { interval: 4, color: initialcolors[2], name: "3" },
                    { interval: 5, color: initialcolors[3], name: "4" },
                    { interval: 7, color: initialcolors[4], name: "5" },
                    { interval: 8, color: initialcolors[5], name: "b6" },
                    { interval: 11, color: initialcolors[6], name: "7" }
                ]
            }
        ]
    },

    {
        type: "Triads",
        scales: [
            {
                scalename: 'Major triad', notes: [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 4, color: initialcolors[2], name: "3" },
                    { interval: 7, color: initialcolors[4], name: "5" }]
            },
            {
                scalename: 'Minor triad', notes: [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 3, color: initialcolors[2], name: "b3" },
                    { interval: 7, color: initialcolors[4], name: "5" }]
            },
            {
                scalename: 'Flat 5 triad', notes: [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 4, color: initialcolors[2], name: "3" },
                    { interval: 6, color: initialcolors[4], name: "b5" }]
            },
            {
                scalename: 'Diminished triad', notes: [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 3, color: initialcolors[2], name: "b3" },
                    { interval: 6, color: initialcolors[4], name: "b5" }]
            },
            {
                scalename: 'Augmented triad', notes: [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 5, color: initialcolors[2], name: "#3" },
                    { interval: 7, color: initialcolors[4], name: "5" }]
            },
            {
                scalename: 'Augmented sharp 5', notes: [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 5, color: initialcolors[2], name: "#3" },
                    { interval: 8, color: initialcolors[4], name: "#5" }]
            }
        ]
    }
];