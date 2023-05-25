import {Button, TextInput} from '@gravity-ui/uikit';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../state';
import {calculate} from '../state/calculator';

export const Calculator = () => {
    const result = useSelector((state: RootState) => state.calculator.result);
    const dispatch = useDispatch();

    const [a, setA] = React.useState<number>(0);
    const [b, setB] = React.useState<number>(0);

    const handleChangeA = (event: React.ChangeEvent<HTMLInputElement>) => {
        setA(Number(event.target.value));
    };
    const handleChangeB = (event: React.ChangeEvent<HTMLInputElement>) => {
        setB(Number(event.target.value));
    };

    const handleCalculate = () => {
        dispatch(calculate({x: a, y: b}));
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
                <Button onClick={handleCalculate}>Calculate</Button>
            </p>
            <p>
                Result: <TextInput disabled value={String(result)} />
            </p>
        </fieldset>
    );
};
