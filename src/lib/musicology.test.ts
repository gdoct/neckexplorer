import { NoteNames, getScaleNoteNames2, noteNamesArray } from './musicology'
import { presetScales } from './presets';

test('GetScaleNoteNames_ReturnsEmptyWithIncorrectArguments', () => {
    let rootnote = NoteNames.D;
    expect(getScaleNoteNames2(rootnote, undefined))
            .toStrictEqual([]);
    let majorscale = presetScales.find(p => p.scalename === 'Major scale');
    expect(majorscale).toBeDefined();
    expect(getScaleNoteNames2(undefined, majorscale?.notes))
            .toStrictEqual([]);
})

test('GetScaleNoteNames_CMajorScale', () => {
     let majorscale = presetScales.find(p => p.scalename === 'Major scale');
     expect(majorscale).toBeDefined();
     let rootnote = NoteNames.C;
     expect(getScaleNoteNames2(rootnote, majorscale?.notes))
               .toStrictEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
})

describe('GetScaleNoteNames_MajorScale', () => {
     it('should return the correct note names for the Major scale', () => {
         const majorscale = presetScales.find(p => p.scalename === 'Major scale');
         expect(majorscale).toBeDefined();
 
         // Test for each of the missing notes
         const rootNotesToTest = [
             NoteNames.A, NoteNames.B, NoteNames.Eb, NoteNames.Gb,
             NoteNames.C, NoteNames.D, NoteNames.F, NoteNames.G,
             NoteNames.Bb
         ];
 
         rootNotesToTest.forEach(rootnote => {
             let expectedScale: string[] = [];
             switch (rootnote) {
                 case NoteNames.A:
                     expectedScale = ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'];
                     break;
                 case NoteNames.B:
                     expectedScale = ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'];
                     break;
                 case NoteNames.Eb:
                     expectedScale = ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'];
                     break;
                 case NoteNames.Gb:
                     expectedScale = ['Gb', 'Ab', 'Bb', 'B', 'Db', 'Eb', 'F'];
                     break;
                 case NoteNames.C:
                     expectedScale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
                     break;
                 case NoteNames.D:
                     expectedScale = ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'];
                     break;
                 case NoteNames.F:
                     expectedScale = ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'];
                     break;
                 case NoteNames.G:
                     expectedScale = ['G', 'A', 'B', 'C', 'D', 'E', 'F#'];
                     break;
                 case NoteNames.Bb:
                     expectedScale = ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'];
                     break;
                 default:
                     expectedScale = []; // Handle any other cases
             }
            let result = getScaleNoteNames2(rootnote, majorscale?.notes);
            console.info('major scale for note ' + noteNamesArray[rootnote]);
             for (const n of result) {
                console.info(result);
             }

             expect(result).toStrictEqual(expectedScale);
         });
     });
 });
 
