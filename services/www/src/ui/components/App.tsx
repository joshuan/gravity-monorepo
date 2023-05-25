import {ThemeProvider} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/styles.css';
import React from 'react';
import {Provider} from 'react-redux';

import {i18n} from '../i18n';
import {store} from '../state';

import {Calculator} from './Calculator';
import {Text} from './Text';

export const App = () => {
    return (
        <ThemeProvider theme="light">
            <Provider store={store}>
                <Text>{i18n.i18n('home', 'root')}</Text>
                <Calculator />
            </Provider>
        </ThemeProvider>
    );
};
