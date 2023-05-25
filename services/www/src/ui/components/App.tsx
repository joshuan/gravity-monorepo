import {ThemeProvider} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/styles.css';
import React from 'react';

import {i18n} from '../i18n';

import {Calculator} from './Calculator';
import {Text} from './Text';

export const App = () => {
    return (
        <ThemeProvider theme="light">
            <div>
                <Text>{i18n.i18n('home', 'root')}</Text>
                <Calculator />
            </div>
        </ThemeProvider>
    );
};
