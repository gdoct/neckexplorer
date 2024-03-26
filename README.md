# Guitar Neck Explorer React App

This project is a react app to explore the guitar neck, scales and triads

# Examples:

## chromatic (standard tuning)
![image](https://github.com/gdoct/neckexplorer/assets/11509384/dfb43002-9976-4e4b-8c4c-27f0ac51d6d4)

## Eb blues scale (Open g tuning)
![image](https://github.com/gdoct/neckexplorer/assets/11509384/057a6420-2da3-4255-b9a8-a44a4c4c80e4)

## C major scale (standard tuning)
![image](https://github.com/gdoct/neckexplorer/assets/11509384/2afdbe63-7c1a-447f-b875-4fdc81356db1)

## Note numbers instead of names (standard tuning)
![image](https://github.com/gdoct/neckexplorer/assets/11509384/d8927dca-1e0f-451a-9aec-17e88bf7c79d)

Scales are configurable in src/lib/presets.ts

Tunings are configurable in src/lib/tunings.ts

## Known issues
Notes in the scale are not always correctly named wrt flat or sharp.
test framework isn't properly configured.
Sound is implemented but the notes sounds horrible so it is currently disabled until I find a proper guitar sound.

## Planned features
Sound
Metronome integration
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
