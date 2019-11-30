import { app } from './express/server';
import { host, port } from './config/constants';

app.listen(port, () => console.info(`Server started at ${host}${port}`));
