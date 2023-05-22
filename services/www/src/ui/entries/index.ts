import {I18N} from '@gravity-ui/i18n';

import en from './keysets/en.json';
import ru from './keysets/ru.json';

const i18n = new I18N({
    logger: console,
});

i18n.registerKeysets('ru', ru);
i18n.registerKeysets('en', en);

i18n.setLang('ru');

const keyset = i18n.keyset('home');

keyset('test');

const root = document.getElementById('root');

setTimeout(() => {
    if (root) {
        root.innerHTML = 'Minute passed!';
    }
}, 1000);

setTimeout(() => {
    if (root) {
        root.innerHTML = keyset('root');
    }
}, 2000);
