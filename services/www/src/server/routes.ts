import calculator from 'calculator';
import type {Request as ExpressRequest, Response as ExpressResponse} from 'express';

export default {
    'GET /': (_req: ExpressRequest, res: ExpressResponse) => {
        res.send(`This is WWW server! 1 + 2 = ${calculator(1, 2)}`);
    },
};
