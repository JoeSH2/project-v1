import React from 'react';

export interface SidebareLinksType {
    path: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    text: string;
    authLink?: boolean;
}
