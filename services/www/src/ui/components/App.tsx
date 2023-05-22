import {ThemeProvider} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/styles.css';
import React from 'react';

import {i18n} from '../i18n';

import {Text} from './Text';

export function App() {
    return (
        <ThemeProvider theme="light">
            <div>
                <Text>{i18n.i18n('home', 'root')}</Text>
            </div>
        </ThemeProvider>
    );
}
