import { Icon } from '@iconify/react';
import { v4 as uuidv4 } from 'uuid';
import { PATH } from '../routes/path';

const getIcon = () => {
    return <Icon icon="iconamoon:component" fontSize={'16px'} />
}

export const navConfig = [
    { id: uuidv4(), label: 'Home', path: PATH.home, icon: getIcon() },
    { id: uuidv4(), label: 'Page B', path: '/', icon: getIcon() },
    {
        id: uuidv4(), label: 'Page C', path: '/', icon: getIcon(),
        children: [
            { id: uuidv4(), label: 'Page C.1', icon: getIcon() },
            { id: uuidv4(), label: 'Page C.2', icon: getIcon() },
            { id: uuidv4(), label: 'Page C.3', icon: getIcon(), children : [
                { id: uuidv4(), label: 'Page C.3.1', icon: getIcon() },
                { id: uuidv4(), label: 'Page C.3.2', icon: getIcon() },
                { id: uuidv4(), label: 'Page C.3.3', icon: getIcon() },
                { id: uuidv4(), label: 'Page C.3.4', icon: getIcon() },
            ] },
        ]
    },
    { id: uuidv4(), label: 'About', path: PATH.about, icon: getIcon() },
]