class WdioCaptureIt {
    constructor(config) {
        this.config = config;
    }

    beforeTest(test) {
        this.testCaseName = test.title;
        this.logTestCaseName('before');
    }

    afterTest(test) {
        this.testCaseName = test.title;
        this.logTestCaseName('after');
    }

    logTestCaseName(phase) {
        const logObject = {
            phase: phase,
            testName: this.testCaseName
        };

        browser.execute((logObj) => {
            console.log(logObj);
        }, logObject);
    }
}

exports.default = WdioCaptureIt;
