import { Icon } from '@iconify/react';
import { v4 as uuidv4 } from 'uuid';
import { PATH } from '../routes/path';

const getIcon = () => {
    return <Icon icon="iconamoon:component" fontSize={'16px'} />
}

export const navConfig = [
    { id: uuidv4(), label: 'Home', path: PATH.home, icon: getIcon() },
    { id: uuidv4(), label: 'Task', path: PATH.task, icon: getIcon() },
    {
        id: uuidv4(), label: 'Project', icon: getIcon(),
        children: [
            { id: uuidv4(), label: 'All Project', path: PATH.project.all, icon: getIcon() },
            { id: uuidv4(), label: 'Recent Project', path: PATH.project.recent, icon: getIcon() },
            { id: uuidv4(), label: 'Create', path: PATH.project.create, icon: getIcon() },
        ]
    },
    { id: uuidv4(), label: 'About', path: PATH.about, icon: getIcon() },
]