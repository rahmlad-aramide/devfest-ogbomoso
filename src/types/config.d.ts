export interface IConfig {
    appEnv: 'development' | 'staging' | 'production';
    nodeEnv: string;
    appName: string;
    appUrl: string;
}