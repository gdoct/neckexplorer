# Guitar Neck Explorer React App

This project is a small react app to explore the guitar neck, scales and triads

# Examples:

Full guitar neck with C major scale:
![image](https://github.com/gdoct/neckexplorer/assets/11509384/dc4f4a60-4000-401c-8b00-a1bd031ba248)

A major pentatonic scale at 2nd fret:

![image](https://github.com/gdoct/neckexplorer/assets/11509384/76b40d0e-61da-4dac-a1ec-c753fbc7e383)

E flat minor triad at 3rd position:

![image](https://github.com/gdoct/neckexplorer/assets/11509384/1bd6eeb7-1163-42ae-b6cb-bad5e42ccc6f)

Scales are configurable in src/lib/presets.ts

## Known issues
Notes in the scale are not always correctly named.
test framework isn't properly configured.
9th, 11th and 13th notes don't show

## Planned features
Metronome integration
Horizontal scrollbar
Note animations
Import from guitar tab
...

## Available Scripts

In the project directory, you can run: 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
