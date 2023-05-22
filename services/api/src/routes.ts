import calculator from 'calculator';

import type { Request, Response } from 'express';

export default {
    "GET /": (_req: Request, res: Response) => {
        res.send({
            server: 'API',
            calc: { a: 1, b: 2, result: calculator(1, 2) },
        });
    },
};
