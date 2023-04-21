declare module 'webdriver-io-capture-it' {
    import { Services } from '@wdio/types';

    class WdioCaptureIt implements Services.HookFunctions {
        constructor(config: object);
        beforeTest?(test: Services.HookFunctions.BeforeTestParam): void;
        beforeCommand?(commandName: string, args: any[]): void;
        afterCommand?(commandName: string, args: any[], result: any, error: Error): void;
    }

    export default WdioCaptureIt;
}
