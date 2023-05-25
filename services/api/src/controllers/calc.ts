import {JSONSchemaType} from 'ajv';
import calc from 'calculator';
import type {CalcRequest, CalcResponse} from 'dto';
import type {Request as ExpressRequest, Response as ExpressResponse} from 'express';

import {validate} from '../lib/validate';

const calcSchema: JSONSchemaType<CalcRequest> = {
    type: 'object',
    properties: {
        a: {type: 'number'},
        b: {type: 'number'},
    },
    required: ['a', 'b'],
};

export const calcCorsOptions = {
    origin: 'http://localhost:8080',
    methods: ['POST'],
    allowedHeaders: ['Content-Type'],
};

export const calcController = (req: ExpressRequest, res: ExpressResponse) => {
    validate(calcSchema, req.body);

    const {a, b} = req.body;

    const result: CalcResponse = {
        input: [a, b],
        result: calc(a, b),
    };

    res.send(result);
};
