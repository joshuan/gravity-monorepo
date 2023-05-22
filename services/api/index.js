const { NodeKit } = require('@gravity-ui/nodekit');
const { ExpressKit } = require('@gravity-ui/expresskit');

const routes = require('./routes');

const nodekit = new NodeKit({
  configsPath: './configs',
});

const app = new ExpressKit(nodekit, routes);

app.run();
