import {I18N} from '@gravity-ui/i18n';

import en from './keysets/en.json';
import ru from './keysets/ru.json';

export const i18n = new I18N({
    logger: console,
});

i18n.registerKeysets('ru', ru);
i18n.registerKeysets('en', en);

// const keyset = i18n.keyset('home');

// keyset('test'); // should be broken
