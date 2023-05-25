import {Button, TextInput} from '@gravity-ui/uikit';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../state';
import {usePlusMutation} from '../state/api';
import {setA, setB} from '../state/calculator';

export const Calculator = () => {
    const a = useSelector((state: RootState) => state.calculator.a);
    const b = useSelector((state: RootState) => state.calculator.b);
    const dispatch = useDispatch();

    const [plus, {isLoading}] = usePlusMutation();

    const [result, setResult] = React.useState<number>(0);

    const handleChangeA = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setA(Number(event.target.value)));
    };
    const handleChangeB = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setB(Number(event.target.value)));
    };

    const handleCalculate = async () => {
        const res = await plus({a, b});

        if ('error' in res) {
            throw res.error;
        }

        setResult(res.data.result);
    };

    return (
        <fieldset>
            <legend>Calculator</legend>
            <p>
                A: <TextInput type="number" value={String(a)} onChange={handleChangeA} />
            </p>
            <p>
                B: <TextInput type="number" value={String(b)} onChange={handleChangeB} />
            </p>
            <hr />
            <p>
                <Button view="action" loading={isLoading} onClick={handleCalculate}>
                    Calculate
                </Button>
            </p>
            <h3>
                Result: <strong>{isLoading ? '...' : result}</strong>
            </h3>
        </fieldset>
    );
};
