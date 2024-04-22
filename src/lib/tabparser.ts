import { error } from "console";
import { NoteNames } from "./musictypes";

export interface TabBar {
    strings: TabString[];
}

export interface TabParsingResult {
    isValid: boolean;
    reason: string;
    bars: TabBar[];
}

export interface TabString {
    notes: (NoteNames | undefined)[];
}

function parseLine(input: string, rootnote: NoteNames): TabString {
    const result: TabString = { notes: [] };
    const numberPattern = /[0-9]|1[0-9]|2[0-4]/g; // Matches integers from 0 to 24

    // Extract numeric values from the input string
    const numbers = input.match(numberPattern);

    if (numbers) {
        // Create a map from valid numbers to NoteNames (you'll need to implement this)
        const noteMap: Record<number, NoteNames> = {
            // Define your mappings here (e.g., 0: NoteNames.A, 1: NoteNames.Bb, etc.)
            // For now, let's push undefined for all valid numbers
        };

        let currentIndex = 0; // Keep track of the current index in the input string

        for (const numStr of numbers) {
            const num = parseInt(numStr, 10);
            if (num >= 0 && num <= 24) {
                const noteName = noteMap[num] || undefined;
                result.notes[currentIndex] = noteName;
            } else {
                // Handle invalid numbers (optional)
                // You can add custom logic here
            }
            currentIndex++; // Move to the next index
        }
    }

    // Handle other supported characters
    for (const letter of input) {
        switch (letter) {
            case 'p':
            case 'h':
            case '-':
            case '(':
            case ')':
            case '~':
            case '/':
                result.notes.push(undefined);
                break;
            case '|':
                // Handle bar lines (optional)
                break;
            default:
                // Ignore other characters
                break;
        }
    }

    return result;
}


// will parse one horizontal line into multiple tab bars
function parseBeat(input: string[], tuning: NoteNames[]): TabBar {
    let result: TabBar = { strings: [] };
    // for (let i = 1; i < input.length; i++) {
    //     let notes: TabString = { notes: [] } // parseLine(input[i], tuning[i]);
    //     result.strings.push(notes);
    // }
    return result;
}

export function extractBeat(input: string[], barIndex: number): string[] {
    const bars: string[] = [];
    // Split each line by pipe character
    for (const line of input) {
        const pipeSeparatedNotes = line.split("|");
        if (barIndex < pipeSeparatedNotes.length) {
            bars.push(pipeSeparatedNotes[barIndex].trim());
        }
    }

    return bars;
}

export function getNumberOfBeatsInLine(input: string): number {
    return (input.slice(4).match(/\|/g) || []).length;
}

export function getNumberOfBeatsInTab(inputTablature: string[]): number {
    const beatcount = getNumberOfBeatsInLine(inputTablature[0]);
    if (inputTablature.length > 1) {
        for (let i = 1; i < inputTablature.length; i++) {
            const lineBeatCount = getNumberOfBeatsInLine(inputTablature[i]);
            if (lineBeatCount !== beatcount) {
                console.error('error: uneven tablature');
                return 0;
            }
        }
    }
    return beatcount;
}

export function extractStringTuning(tablature: string[]) {
    // todo: allow alternative tunings
    return [
        NoteNames.E,
        NoteNames.B,
        NoteNames.G,
        NoteNames.D,
        NoteNames.A,
        NoteNames.E
    ];
}

function parseBars(inputTablature: string[], tuning: NoteNames[]): TabParsingResult {
    const result: TabParsingResult = { isValid: false, reason: "not parsed", bars: [] };
    // // assume that all lines in the input have the same beat structure. 
    // // if not, this will fail:
    const numberOfBeats = getNumberOfBeatsInTab(inputTablature);
    if (numberOfBeats === 0) {
        result.reason = 'unable to detect ';
        return result;
    }

    for (let beatNum = 0; beatNum < numberOfBeats; beatNum++) {
        const singleBeatFragment = extractBeat(inputTablature, beatNum);
        const beatNotes = parseBeat(singleBeatFragment, tuning);
        //result.bars.push(beatNotes);
    }

    result.isValid = true;
    return result;
}


export function parseTab(input: string): TabParsingResult {
    const MAX_BARS = 4;
    const lines = input.trim().split("\n");
    const numLinesToConsider = lines[0].trim() === "" ? 7 : 6;

    const result: TabParsingResult = { isValid: false, reason: "not parsed", bars: [] };
    let parsedBarCount: number = 0;
    let tuning = extractStringTuning(lines);
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() === "") {
            // Skip empty lines
            continue;
        }

        // Check if there are enough non-empty lines from the current index
        if (i + numLinesToConsider <= lines.length) {
            const setOfBars: string[] = lines.slice(i, i + numLinesToConsider);
            const result: TabParsingResult = parseBars(setOfBars, tuning);
            if (result.bars.length === 0 || parsedBarCount + result.bars.length > MAX_BARS) {
                result.reason = 'invalid data or too many bars (max ' + MAX_BARS + ')';
                result.isValid = false;
                break;
            }
            result.isValid = true;
            for (let bar of result.bars) {
                result.bars.push(bar);
                parsedBarCount += 1;
                i += numLinesToConsider - 1;
            }
        } else {
            result.reason = 'a tab should contain blocks of 6 lines';
            result.isValid = false;
            break;
        }
    }
    return result;
}