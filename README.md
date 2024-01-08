This is a sample angular app that will be used to demonstrate automated testing.

## Install Dependencies

```
npm install
```

## Starting the app

Start the server in one terminal tab. The server is accessible at http://localhost:3200.

```
npm run server:start
```

Start the app in a separate terminal tab. The app will be accessible at http://localhost:4200.

```
npm run app:start
```

## Running End to End Tests

### Playwright

#### Installing Dependencies
Run the following command:
```
npx playwright install
```

#### Running the tests

With the app running, run the following command to run headless:

```
npm run e2e
```

Run the following command for headed mode:

```
npm run e2e:headed
```

Run the following command to run in interactive UI Mode:

```
npm run e2e:ui-mode
```