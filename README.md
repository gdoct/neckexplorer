# Guitar Neck Explorer: Interactive Guitar Companion 🎸
Welcome to Guitar Neck Explorer, designed for guitar enthusiasts and musicians of all levels. Dive into the intricacies of the guitar neck, discover new scales, and master triads with ease. This interactive tool allows you to:

### Visualize every scale and mode come to life on any guitar tuning imaginable.
### Adjust the size and position of the guitar neck to match your preferences.
### Navigate through a vast library of scales and triads for every root note.

Whether you’re a beginner looking to understand the basics or a seasoned player aiming to expand your knowledge, Guitar Neck Explorer is your go-to resource for all things guitar. Get ready to enhance your practice sessions, songwriting, and improvisational skills.

# Use:
```
$ git clone https://github.com/gdoct/neckexplorer.git
$ cd neckexplorer
$ npm install
$ npm start
```
# Examples:

## chromatic (standard tuning)
![image](https://github.com/gdoct/neckexplorer/assets/11509384/3ed5c89c-51d9-4c20-98bc-6bbc50b28f2e)

## Eb blues scale (Open g tuning)
![image](https://github.com/gdoct/neckexplorer/assets/11509384/057a6420-2da3-4255-b9a8-a44a4c4c80e4)

## C major scale (standard tuning)
![image](https://github.com/gdoct/neckexplorer/assets/11509384/860add7f-1138-40aa-bb9a-4d86edcef901)

## Note numbers instead of names (standard tuning)
![image](https://github.com/gdoct/neckexplorer/assets/11509384/9716b807-2728-4bb6-956e-c4f9a1cf9b3e)

Scales are configurable in src/lib/presets.ts

Tunings are configurable in src/lib/tunings.ts

## Known issues
- Notes in the scale are not always correctly named wrt flat or sharp.
- test framework isn't properly configured.
- Sound is partly implemented but currently disabled until a proper guitar sound is implemented.

## Planned features
- Sound
- Guitar sounds
- Metronome integration
- Import from guitar tab and play-along (unlikely)
- ...

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
