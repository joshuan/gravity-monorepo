import calculator from 'calculator';
import type {Request as ExpressRequest, Response as ExpressResponse} from 'express';

export default {
    'GET /': (_req: ExpressRequest, res: ExpressResponse) => {
        res.send({
            server: 'API',
            calc: {a: 1, b: 2, result: calculator(1, 2)},
        });
    },
};
