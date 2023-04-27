class WdioCaptureIt {
    constructor(config) {
        this.config = config;
    }

    beforeTest(test) {
        this.testCaseName = test.title;
        this.logTestCaseName('startTestCase');
    }

    afterTest(test) {
        this.testCaseName = test.title;
        this.logTestCaseName('endTestCase');
    }

    logTestCaseName(phase) {
        const logObject = {
            phase: phase,
            testName: this.testCaseName
        };

        browser.execute((logObj) => {
            return logObj;
        }, logObject);
    }
}

exports.default = WdioCaptureIt;
