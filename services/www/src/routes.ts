import calculator from 'calculator';

import type { Request, Response } from 'express';

export default {
  "GET /": (_req: Request, res: Response) => {
    res.send(`This is WWW server! 1 + 2 = ${calculator(1, 2)}`);
  },
};
