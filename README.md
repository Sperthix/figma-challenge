# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Poznámky k projektu

Robene vo VS Code s live compilerom pre scss (automaticky generovane css fily)

Appka testovana cez chrome a operu, cez devtools kontrolovane viewporty pre fullHD desktop, Ipad Air, a telefony pod so sirkou 360px (pri nich nie som este spokojny uvodnou obrazovkov).

Zvolil som desktop-first postup, nasledne upravovany pre rozne viewporty. Zatial je v stave, kde na obrazovkach telefonov je stale mozne horizontalne scrollovanie. Ale zakladna responzivita bola pridana, mozem ju este upravit. Na figme vo vzore som nenasiel specifikacie pre responzivitu. Definoval som viacero breakpointov (320px, 480px, 720px, 960px, 1200px) hoci vsetky nebolo nutne pouzit. 

Vo vzore som taktiez natrafil na par nepresnosti, kde nesedeli niektore sirky, nekonzistentnost v uhloch ohraniceni atd, tie ktore sa zdali ako nezamerne som neaplikoval do projektu.

Podla vzoru na figme boli vektorovo vytvorene ikonky, loga, grafy.. v projekte boli pouzite uz tieto vytvorene subory ako .svg

Chat bol vytvoreny ako zvlast reusable component pre pripadne buduce upravy.
