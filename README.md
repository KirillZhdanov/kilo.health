# Kilo.Health

This project was bootstrapped with [CRA](https://github.com/facebook/create-react-app).
Please take a look at the entire designs [here](https://www.figma.com/file/KiCMnFPh0I2cEHbWnI2fzz/Excercises-of-a-workout).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn run prepare`

The scripts installs all the additional libraries and configurations. If you need something to be done before you start working with the all - please put it to the script.

## Linter and prettify

### ESLint

[ESLint](https://eslint.org) is provided by standard CRA configuration. The configuration can be changed using your custom `.eslintrc` configuration.

### Prettier

[Prettier](https://prettier.io) is a library that formats all the code in a strict way. The formatting rules are fetched from `.prettierrc.js`.

### Pre-commit hooks

Lint-staged pre-commit hook is used in the application to make sure all the files are formatted correctly. We use that to make sure that all the files are the same for different developers even if some of them has their own IDE configuration.

Commit-msg pre-commit hook is used in the application to make sure that all our commits messages following same pattern. We use that to simplify understanding commits messages for our team.

## State management

### Redux

The application uses [Redux](https://redux.js.org) ecosystem as a state management tool.

### Redux-Saga

The application uses Redux-Saga to process side requests (API calls as an example).

### Files structure of `src` catalog
- `assets` - contains images
- `components`
  - `StyledComponents` - styled components for the application styling. All the styled-components for the Kilo.Health application are placed there because for the small project this decision fits well. If we would need to extend it, styles would be moved directly into the components and pages folders. 
  - `HOC`
- `models` - application types
- `pages`
- `redux` - redux store with reducers, actions, sagas and selectors
- `utils` - application utilities

## Special Directories

### assets

The assets directory contains images.

### components

The components directory contains React components. Components make up the different parts of page and can be reused and imported into pages and even other components.

### redux

The core directory contains redux store, included reducers, actions, sagas, services and selectors.

