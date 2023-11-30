declare const _default: (() => {
    postgres: {
        dbName: string;
        port: number;
        password: string;
        user: string;
        host: string;
    };
    apiKey: string;
    jwtSecret: string;
    mailer: {
        host: string;
        port: number;
        secure: string;
        auth: {
            user: string;
            pass: string;
        };
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    postgres: {
        dbName: string;
        port: number;
        password: string;
        user: string;
        host: string;
    };
    apiKey: string;
    jwtSecret: string;
    mailer: {
        host: string;
        port: number;
        secure: string;
        auth: {
            user: string;
            pass: string;
        };
    };
}>;
export default _default;
