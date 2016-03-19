// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare var ENV: string;
declare var NODE_ENV: string;
declare var TARGET: string;
declare var BASE_URL: string;
declare var CORDOVA: boolean;
declare var HMR: boolean;
interface GlobalEnvironment {
    ENV;
    NODE_ENV;
    TARGET;
    BASE_URL;
    CORDOVA;
    HMR;
}

interface WebpackModule {
    hot: {
        data?: any,
        idle: any,
        accept(dependencies?: string | string[], callback?: (updatedDependencies?: any) => void): void;
        decline(dependencies?: string | string[]): void;
        dispose(callback?: (data?: any) => void): void;
        addDisposeHandler(callback?: (data?: any) => void): void;
        removeDisposeHandler(callback?: (data?: any) => void): void;
        check(autoApply?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
        apply(options?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
        status(callback?: (status?: string) => void): void | string;
        removeStatusHandler(callback?: (status?: string) => void): void;
    };
}
interface WebpackRequire {
    context(file: string, flag?: boolean, exp?: RegExp): any;
}

interface ErrorStackTraceLimit {
    stackTraceLimit: number;
}

// Extend typings
interface NodeRequire extends WebpackRequire {}
interface ErrorConstructor extends ErrorStackTraceLimit {}
interface NodeModule extends WebpackModule {}
interface Global extends GlobalEnvironment  {}
