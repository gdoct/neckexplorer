import exp from 'constants';
import { NoteNames, ScaleType, Scale } from './musictypes'
import  { parseTab, extractBeat, extractStringTuning, getNumberOfBeatsInLine, getNumberOfBeatsInTab } from './tabparser'

// test('parseTab_shouldParseOneBar', () => {
//     let inputtab = `
// e|---0-----0-----0-----0-----|
// B|---1-----1-----1-----1-----|
// G|---0-----0-----2-----2-----|
// D|---------------------------|
// A|---3--3--2--2--0--0--------|
// E|---------------------3--3--|`;
//     let parseResult = parseTab(inputtab);
//     expect(parseResult.isValid).toStrictEqual(true);
// });



test('extractBeat_shouldParseOneBar', () => {
    let inputtab = [
'e|---0-----0-----0-----0-----|',
'B|---1-----1-----1-----1-----|',
'G|---0-----0-----2-----2-----|',
'D|---------------------------|',
'A|---3--3--2--2--0--0--------|',
'E|---------------------3--3--|'];

let expected = [
'---0-----0-----0-----0-----',
'---1-----1-----1-----1-----',
'---0-----0-----2-----2-----',
'---------------------------',
'---3--3--2--2--0--0--------',
'---------------------3--3--'];
    let parseResult = extractBeat(inputtab, 1);
    expect(parseResult).toStrictEqual(expected);
});


// test('parseTab_shouldParseTwoBars', () => {
//     let inputtab: string = `
//     e|---------------0---|---3-2-3-----------|
//     B|-------0-3-1-1---3-|-3-------3-0-----0-|
//     G|---0-2-0-----------|-------------0-2---|
//     D|-------------2-----|-------2-----------|
//     A|-------------------|-2-----------------|
//     E|-3-----------------|-------------0-----|`;
//     let parseResult = parseTab(inputtab);
//     expect(parseResult.isValid).toStrictEqual(true);
// })

// test('parseTab_shouldParseFourBarsMultiLine', () => {
//     let inputtab = `
// e|---------------0---|---3p2-3-----------|
// B|-------0h3-1-1---3-|-3-------3p0-----0-|
// G|---0h2-0-----------|-------------0h2---|
// D|-------------2-----|-------2-----------|
// A|-------------------|-2-----------------|
// E|-3-----------------|-------------0-----|
 
// e|-----0-------------|-------------------|
// B|-1h3---3p1-0---0---|-------------1p0---|
// G|-------------2---0-|---0h2-----2-----2-|
// D|-------------------|-4-----0h4---------|
// A|-0-----2-----3-----|-5-----------------|
// E|-------------------|-------------------|
// `;
//     let parseResult = parseTab(inputtab);
//     expect(parseResult.isValid).toStrictEqual(true);
// })

// test('parseTab_shouldFailOnMoreThanFourBars', () => {
//     let inputtab = `
// e|---------------0---|---3p2-3-----------|
// B|-------0h3-1-1---3-|-3-------3p0-----0-|
// G|---0h2-0-----------|-------------0h2---|
// D|-------------2-----|-------2-----------|
// A|-------------------|-2-----------------|
// E|-3-----------------|-------------0-----|
    
// e|-----0-------------|-------------------|
// B|-1h3---3p1-0---0---|-------------1p0---|
// G|-------------2---0-|---0h2-----2-----2-|
// D|-------------------|-4-----0h4---------|
// A|-0-----2-----3-----|-5-----------------|
// E|-------------------|-------------------|

// e|---------------0---|---3p2-3-----------|
// B|-------0h3-1-1---3-|-3-------3p0-----0-|
// G|---0h2-0-----------|-------------0h2---|
// D|-------------2-----|-------2-----------|
// A|-------------------|-2-----------------|
// E|-3-----------------|-------------0-----|
 
// e|-----0-------------|-------------------|
// B|-1h3---3p1-0---0---|-------------1p0---|
// G|-------------2---0-|---0h2-----2-----2-|
// D|-------------------|-4-----0h4---------|
// A|-0-----2-----3-----|-5-----------------|
// E|-------------------|-------------------|

// e|---------------0---|---3p2-3-----------|
// B|-------0h3-1-1---3-|-3-------3p0-----0-|
// G|---0h2-0-----------|-------------0h2---|
// D|-------------2-----|-------2-----------|
// A|-------------------|-2-----------------|
// E|-3-----------------|-------------0-----|
// `;
//     let parseResult = parseTab(inputtab);
//     expect(parseResult.isValid).toStrictEqual(false);
// })

// test('parseTab_shouldDetectUnequalItemsPerLine', () => {
//     let inputtab = '';
//     let parseResult = parseTab(inputtab);
//     expect(parseResult.isValid).toStrictEqual(false);
// })

// test('parseTab_shouldDetectNonFingers', () => {
//     let inputtab = '';
//     let parseResult = parseTab(inputtab);
//     expect(parseResult.isValid).toStrictEqual(false);
// })