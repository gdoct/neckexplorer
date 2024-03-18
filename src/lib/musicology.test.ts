import { NoteNames, getScaleNoteNames, getChromaticScaleNoteNames, ScaleType, Scale } from './musicology'
import { presetScales } from './presets';
const allpresets: ScaleType[] = presetScales.map(s => s);

const getMajorScale = () => {
    let harmonicscales = allpresets.find(p => p.type === 'Harmonic');
    let ret: Scale = { scalename: "", notes: []};
    if (!harmonicscales) return ret;
    let majorscale = harmonicscales.scales.find(p => p.scalename === 'Major scale');
    if (!majorscale) return ret;
    return majorscale;
}

test('GetScaleNoteNames_ReturnsEmptyWithIncorrectArguments', () => {
    let rootnote = NoteNames.D;
    expect(getScaleNoteNames(rootnote, undefined))
            .toStrictEqual([]);
})

test('GetScaleNoteNames_CMajorScale', () => {
     let majorscale = getMajorScale();
     expect(majorscale).toBeDefined();
     let rootnote = NoteNames.C;
     let notes = majorscale.notes;
     expect(getScaleNoteNames(rootnote, majorscale.notes))
               .toStrictEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
})

describe('GetScaleNoteNames_AllMajorScales', () => {
     it('should return the correct note names for the Major scale', () => {
         const majorscale = getMajorScale();
         expect(majorscale).toBeDefined();
 
         // Test for each note
         const rootNotesToTest = [ 
             NoteNames.A, NoteNames.B, NoteNames.Eb, NoteNames.Gb,
             NoteNames.C, NoteNames.D, NoteNames.F, NoteNames.G,
             NoteNames.Bb
         ];
 
         rootNotesToTest.forEach(rootnote => {
            let expectedScale: string[] = [];
            let forceFlat = false;
            switch (rootnote) {
                 case NoteNames.A:
                     expectedScale = ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'];
                     break;
                 case NoteNames.B:
                     expectedScale = ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'];
                     break;
                 case NoteNames.Eb:
                     expectedScale = ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'];
                     forceFlat = true;
                     break;
                 case NoteNames.Gb:
                     expectedScale = ['Gb', 'Ab', 'Bb', 'B', 'Db', 'Eb', 'F'];
                     forceFlat = true;
                     break;
                 case NoteNames.C:
                     expectedScale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
                     break;
                 case NoteNames.D:
                     expectedScale = ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'];
                     break;
                 case NoteNames.F:
                     expectedScale = ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'];
                     forceFlat = true;
                     break;
                 case NoteNames.G:
                     expectedScale = ['G', 'A', 'B', 'C', 'D', 'E', 'F#'];
                     break;
                 case NoteNames.Bb:
                     expectedScale = ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'];
                     forceFlat = true;
                     break;
                 default:
                     expectedScale = []; // Handle any other cases
             }
            let result = getScaleNoteNames(rootnote, majorscale?.notes, forceFlat);
            expect(result).toStrictEqual(expectedScale);
         });
     });
 });
 
test("getChromaticScaleNoteNames", () => {
    let majorscale = getMajorScale();
    expect(majorscale).toBeDefined();
    expect(majorscale?.notes).toBeDefined();
    if (majorscale?.notes === undefined) {
        fail("error");
    }
    let rootnote = NoteNames.Bb;
    // Bb sale is ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A']
    // ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"]; is the flat scale
    // ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]; // is the sharp scale
    let chromatic_flat = getChromaticScaleNoteNames(rootnote, majorscale.notes, true);
    expect(chromatic_flat).toStrictEqual(["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"]);

    let bFlatScale = getScaleNoteNames(rootnote, majorscale.notes, true);
    let chromatic_sharp = getChromaticScaleNoteNames(rootnote, majorscale.notes, false, false, bFlatScale);
    expect(chromatic_sharp).toStrictEqual(["A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#"]);

});