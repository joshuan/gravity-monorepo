import {Text as GravityText} from '@gravity-ui/uikit';
import React from 'react';

export function Text(props: React.PropsWithChildren<{}>) {
    return <GravityText variant="header-1">{props.children}</GravityText>;
}
