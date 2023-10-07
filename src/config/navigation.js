import { Icon } from '@iconify/react';
import { v4 as uuidv4 } from 'uuid';

const getIcon = () => {
    return <Icon icon="iconamoon:component" fontSize={'16px'}/>
}

export const navConfig = [
    {id : uuidv4(), label : 'Page A', icon : getIcon()},
    {id : uuidv4(), label : 'Page B', icon : getIcon()},
    {id : uuidv4(), label : 'Page C', icon : getIcon(),
        children : [
            {id : uuidv4(), label : 'Page C.1', icon : getIcon()},
            {id : uuidv4(), label : 'Page C.2', icon : getIcon()},
            {id : uuidv4(), label : 'Page C.3', icon : getIcon()},
        ]
    },
    {id : uuidv4(), label : 'Page D', icon : getIcon()},
]