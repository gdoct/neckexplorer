const initialcolors = ['red', 'orange', 'yellow',
    'lime', 'cyan', '#43C6DB', 'magenta',
    'olive', 'gold', 'linen'];
// roygblv
export const presetScales = [
    {
        type: "General",
        scales: [
            {
            "scalename": "Major scale",
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
                "scalename": "Minor scale",
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
                    { interval: 0, color: initialcolors[0], name: '' },
                    { interval: 3, color: initialcolors[1], name: 'b3' },
                    { interval: 5, color: initialcolors[2], name: '4' },
                    { interval: 6, color: initialcolors[3], name: 'b5' },
                    { interval: 7, color: initialcolors[4], name: '5' },
                    { interval: 10, color: initialcolors[5], name: 'b7' }
                ]
            }]
    },
    {
        "type": "Diatonic modes",
        "scales": [
            {
                "scalename": "Ionian scale",
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
                "scalename": "Dorian scale",
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
    },

    {
        type: "Modal triads",
        scales: [
            {
                scalename: '1 - Ionian triad', notes: [
                    { interval: 0, color: initialcolors[0], name: "" },
                    { interval: 4, color: initialcolors[2], name: "3" },
                    { interval: 7, color: initialcolors[4], name: "5" }]
            },
            {
                scalename: '2 - Dorian triad', notes: [
                    { interval: 2, color: initialcolors[0], name: "2" },
                    { interval: 6, color: initialcolors[2], name: "4" },
                    { interval: 9, color: initialcolors[4], name: "6" }]
            },

            {
                scalename: '3 - Phrygian triad', notes: [
                    { interval: 4, color: initialcolors[0], name: "3" },
                    { interval: 8, color: initialcolors[2], name: "5" },
                    { interval: 11, color: initialcolors[4], name: "7" }]
            },

            {
                scalename: '4 - Lydian triad', notes: [
                    { interval: 5, color: initialcolors[0], name: "4" },
                    { interval: 9, color: initialcolors[2], name: "6" },
                    { interval: 11, color: initialcolors[4], name: "1" }]
            },

            {
                scalename: '5 - Mixolydian triad', notes: [
                    { interval: 7, color: initialcolors[0], name: "5" },
                    { interval: 11, color: initialcolors[2], name: "7" },
                    { interval: 2, color: initialcolors[4], name: "2" }]
            },

            {
                scalename: '6 - Aeolian triad', notes: [
                    { interval: 9, color: initialcolors[0], name: "6" },
                    { interval: 1, color: initialcolors[2], name: "1" },
                    { interval: 4, color: initialcolors[4], name: "3" }]
            },

            {
                scalename: '7 - Locrian triad', notes: [
                    { interval: 11, color: initialcolors[0], name: "7" },
                    { interval: 3, color: initialcolors[2], name: "2" },
                    { interval: 6, color: initialcolors[4], name: "4" }]
            },

        ]
    }
];