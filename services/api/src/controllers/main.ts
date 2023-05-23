import type {Request as ExpressRequest, Response as ExpressResponse} from 'express';

export const mainController = (_req: ExpressRequest, res: ExpressResponse) => {
    res.send({
        server: 'API',
        page: 'main',
    });
};
