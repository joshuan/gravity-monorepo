import {ExpressKit} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

import routes from './routes';

const nodekit = new NodeKit({
    configsPath: './dist/configs',
});

const app = new ExpressKit(nodekit, routes);

app.run();
