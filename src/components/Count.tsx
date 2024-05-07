import React, { useState } from 'react';
import {Button} from './Button';

export const Count = () => {
    const [count, setCount] = useState(0);
    let attributes = 
    {
        onClick:() => setCount(count + 1),
        role:'counter'
    }
    let button = <Button uid='counter' attributes={attributes} content={count}></Button>
    return <div>{button}</div>
}