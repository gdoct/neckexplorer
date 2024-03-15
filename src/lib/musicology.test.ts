import { NoteNames, getScaleNoteNames } from './musicology'
import { presetScales } from './presets';

test('GetScaleNoteNames_CMajorScale', () => {
     let majorscale = presetScales.find(p => p.scalename === 'Major scale');
     expect(majorscale).toBeDefined();
     let rootnote = NoteNames.C;
     expect(getScaleNoteNames(rootnote, majorscale?.notes))
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
             let expectedScale: any;
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
 
             expect(getScaleNoteNames(rootnote, majorscale?.notes)).toStrictEqual(expectedScale);
         });
     });
 });
 
