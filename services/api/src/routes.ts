import cors from 'cors';

import {calcController, calcCorsOptions} from './controllers/calc';
import {mainController} from './controllers/main';
import {AppRoutes} from '@gravity-ui/expresskit';

const nullController = () => {
    throw new Error('Null controller');
};

export const routes: AppRoutes = {
    'GET /': mainController,
    'OPTIONS /calc': {
        beforeAuth: [cors(calcCorsOptions)],
        handler: nullController,
    },
    'POST /calc': {
        beforeAuth: [cors(calcCorsOptions)],
        handler: calcController,
    },
};
