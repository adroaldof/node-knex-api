import { host, port } from './config/constants';
import { log } from './express/middlewares';
import { app } from './express/server';

app.listen(port, () => log.info(`Server started at ${host}:${port}`));
