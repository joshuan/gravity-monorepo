import type {ServiceConfig} from '@gravity-ui/app-builder';

const config: ServiceConfig = {
    client: {
        disableReactRefresh: true,
        devServer: {
            port: 8080,
        },
    },
    server: {
        port: 8081,
    },
    verbose: true,
};

export default config;
