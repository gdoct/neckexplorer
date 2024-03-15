const initialcolors = ['red', 'lightgreen', 'chocolate',
        'papayawhip', 'tan', 'thistle', 'orange',
        'olive', 'gold', 'linen'];

export const presetScales = [
    // Example presets:
    {
        scalename: 'Major Pentatonic scale', notes: [{ interval: 0, color: initialcolors[0] },
        { interval: 2, color: initialcolors[1] },
        { interval: 4, color: initialcolors[2] },
        { interval: 7, color: initialcolors[3] },
        { interval: 9, color: initialcolors[4] },
        ]
    },
    {
        scalename: 'Major scale', notes: [{ interval: 0, color: initialcolors[0] },
        { interval: 2, color: initialcolors[1] },
        { interval: 4, color: initialcolors[2] },
        { interval: 5, color: initialcolors[3] },
        { interval: 7, color: initialcolors[4] },
        { interval: 9, color: initialcolors[5] },
        { interval: 11, color: initialcolors[6] }]
    },
    {
        scalename: 'Minor Pentatonic scale', notes: [{ interval: 0, color: initialcolors[0] },
        { interval: 2, color: initialcolors[1] },
        { interval: 3, color: initialcolors[2] },
        { interval: 7, color: initialcolors[3] },
        { interval: 9, color: initialcolors[4] },
        ]
    },
    {
        scalename: 'Minor (Dorian) scale', notes: [{ interval: 0, color: initialcolors[0] },
        { interval: 2, color: initialcolors[1] },
        { interval: 3, color: initialcolors[2] },
        { interval: 5, color: initialcolors[3] },
        { interval: 7, color: initialcolors[4] },
        { interval: 9, color: initialcolors[5] },
        { interval: 11, color: initialcolors[6] }]
    },
    {
        scalename: 'Major triad', notes: [{ interval: 0, color: initialcolors[0] },
        { interval: 4, color: initialcolors[2] },
        { interval: 7, color: initialcolors[4] }]
    },
    {
        scalename: 'Minor triad', notes: [{ interval: 0, color: initialcolors[0] },
        { interval: 3, color: initialcolors[2] },
        { interval: 7, color: initialcolors[4] }]
    },
    {
        scalename: 'Flat 5 triad', notes: [{ interval: 0, color: initialcolors[0] },
        { interval: 4, color: initialcolors[2] },
        { interval: 6, color: initialcolors[4] }]
    },
    {
        scalename: 'Diminished triad', notes: [{ interval: 0, color: initialcolors[0] },
        { interval: 3, color: initialcolors[2] },
        { interval: 6, color: initialcolors[4] }]
    },
    {
        scalename: 'Augmented triad', notes: [{ interval: 0, color: initialcolors[0] },
        { interval: 5, color: initialcolors[2] },
        { interval: 7, color: initialcolors[4] }]
    },
    {
        scalename: 'Augmented sharp 5', notes: [{ interval: 0, color: initialcolors[0] },
        { interval: 5, color: initialcolors[2] },
        { interval: 8, color: initialcolors[4] }]
    },

];