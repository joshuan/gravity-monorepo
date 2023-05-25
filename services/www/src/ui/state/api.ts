import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {CalcRequest, CalcResponse} from 'dto';

export const calculatorApi = createApi({
    reducerPath: 'calculatorApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
    endpoints: (builder) => ({
        plus: builder.mutation<CalcResponse, CalcRequest>({
            query: (body) => ({
                method: 'POST',
                url: 'calc',
                body,
            }),
        }),
    }),
});

export const {usePlusMutation} = calculatorApi;
