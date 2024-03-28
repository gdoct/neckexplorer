import { Scale } from './musictypes'

export interface SnareDisplaySettings {
    showSingleDots: boolean;
    showDoubleDots: boolean;
    showRootPosition: boolean;
    colorizeNotes?: boolean;
    scaleToColorize?: Scale;
    showChromaticNotes?: boolean;
};

export interface FretDisplaySettings {
    backgroundColor: string | undefined,
    hasDot: boolean,
    isNeck: boolean,
    isScaleRoot: boolean,
    hasRomanNumeral: boolean,
    romanNumeral: string,
    fretIndex: number
};