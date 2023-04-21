const logger = require('@wdio/logger').default;
const log = logger('wdio-capture-it');

class WdioCaptureIt {
    constructor(config) {
        this.config = config;
    }

    beforeTest(test) {
        this.testCaseName = test.title;
    }

    beforeCommand(command, args) {
        if (command === 'execute') {
            const script = args[0];
            if (script && script.includes('wdio-capture-it')) {
                this.logTestCaseName();
            }
        }
    }

    afterCommand(command, args) {
        if (command === 'execute') {
            const script = args[0];
            if (script && script.includes('wdio-capture-it')) {
                this.logTestCaseName();
            }
        }
    }

    logTestCaseName() {
        browser.execute(`console.log('Test Case Name: ${this.testCaseName}');`);
    }
}

exports.default = WdioCaptureIt;
