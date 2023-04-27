# wdio-capture-it

A WebDriver.IO service that captures the `it()` block test case names and logs them in the browser console using the `browser.execute()` function.

## Installation

Install the package using npm:

```sh
npm install wdio-capture-it
```

## Usage

1. Add the `wdio-capture-it` service to your `wdio.conf.js` file in your WebDriver.IO project:

```javascript
const WdioCaptureIt = require('wdio-capture-it').default;

exports.config = {
    // ...
    services: [
        [WdioCaptureIt, {}],
        // ... other services
    ],
    // ...
};
```

2. Run your WebDriver.IO tests as usual. The test case names from the `it()` blocks will be captured and logged in the browser console at the beginning of each test.

## Example

Here's an example of how the test case name will be logged in the browser console:

```
Test Case Name: should display the correct title
```

## TypeScript Support

This package includes a TypeScript declaration file to support TypeScript projects. Make sure to install the `@wdio/types` package to use the types correctly:

```sh
npm install @wdio/types
```

After installing the necessary packages, you can import the `WdioCaptureIt` service in your TypeScript configuration file:

```typescript
import WdioCaptureIt from 'wdio-capture-it';

export const config: WebdriverIO.Config = {
    // ...
    services: [
        [WdioCaptureIt, {}],
        // ... other services
    ],
    // ...
};
```

## License

MIT License

---
