import cors from 'cors';

import {calcController, calcCorsOptions} from './controllers/calc';
import {mainController} from './controllers/main';

const nullController = () => {
    throw new Error('Null controller');
};

export default {
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
