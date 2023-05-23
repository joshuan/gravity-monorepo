import {calcController} from './controllers/calc';
import {mainController} from './controllers/main';

export default {
    'GET /': mainController,
    'POST /calc': calcController,
};
