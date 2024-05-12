import React, { useState } from 'react';
import {Button} from './Button';
import { Paragraphs } from './Paragraphs';

export const Count = () => {
    const [count, setCount] = useState(0);
    let attributes = 
    {
        onClick:() => setCount((prev) => prev + 1),
        role:'add'
    }
    let displayAttribute = {
        uid:'counter-display-content',
          content : count,
          attributes: {
            className: "basic_para",
            role: "counter"
          } 
      }
    let displayAttributes = [displayAttribute];
    let displayContainer = 
    {
        className: 'display_container'
    }

    let button = <Button uid='counter-button' attributes={attributes} content={"add"}/>
    let display = <Paragraphs uid='counter-display' attributes={displayContainer} content={displayAttributes}/>
    return <div>
        <div>
            {display}
        </div>
        <div role='counter-button'>
            {button}
        </div>
        
    </div>
}

