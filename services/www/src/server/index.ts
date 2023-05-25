import {ExpressKit} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';
import express from 'express';

import routes from './routes';

const nodekit = new NodeKit({
    configsPath: './dist/configs',
});

const app = new ExpressKit(nodekit, routes);

if (nodekit.config.appEnv === 'production') {
    app.express.use('/build', express.static('dist/public/build'));
}

app.run();
