class WdioCaptureIt {
    constructor(config) {
        this.config = config;
    }

    beforeTest(test) {
        this.testCaseName = test.title;
        this.logTestCaseName();
    }

    logTestCaseName() {
        browser.execute((name) => {
            console.log('Test Case Name:', name);
        }, this.testCaseName);
    }
}

exports.default = WdioCaptureIt;
