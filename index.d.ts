declare module 'wdio-capture-it' {
    import { Services } from '@wdio/types';

    class WdioCaptureIt implements Services.HookFunctions {
        constructor(config: object);
        beforeTest?(test: Services.HookFunctions.BeforeTestParam): void;
    }

    export default WdioCaptureIt;
}
