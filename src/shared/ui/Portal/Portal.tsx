import React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: React.ReactNode;
    container?: HTMLElement;
}

const Portal = ({ children, container = document.body }: PortalProps) => createPortal(children, container);

export default Portal;
