import {JSONSchemaType} from 'ajv';
import calc from 'calculator';
import type {Request as ExpressRequest, Response as ExpressResponse} from 'express';

import {validate} from '../lib/validate';

interface CalcRequest {
    a: number;
    b: number;
}

const calcSchema: JSONSchemaType<CalcRequest> = {
    type: 'object',
    properties: {
        a: {type: 'number'},
        b: {type: 'number'},
    },
    required: ['a', 'b'],
};

interface CalcResponse {
    input: [number, number];
    result: number;
}

export const calcController = (req: ExpressRequest, res: ExpressResponse) => {
    validate(calcSchema, req.body);

    const {a, b} = req.body;

    const result: CalcResponse = {
        input: [a, b],
        result: calc(a, b),
    };

    res.send(result);
};
