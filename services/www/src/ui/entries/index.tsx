import {configure} from '@gravity-ui/uikit';
import React from 'react';
import {createRoot} from 'react-dom/client';

import {App} from '../components/App';
import {i18n} from '../i18n';

i18n.setLang('ru');
configure({
    lang: 'ru',
});

const rootEl = document.getElementById('root');

if (!rootEl) {
    throw new Error('Root element not found');
}

const root = createRoot(rootEl);

root.render(<App />);
