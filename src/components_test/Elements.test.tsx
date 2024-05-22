import {render, screen } from "@testing-library/react";
import { createElement } from "react";


test("renders Element from create element", () => 
{   
    let raw = ['Hi <strong>ANG</strong> you are in REACT.', 'Two Bad this is the <i>end</i>'];
    
    let sentence = raw.map((item, index)=> {
        let props = {
            key:index, 
            dangerouslySetInnerHTML:{__html:item}
        };

        return createElement('p', props);
    });

    let html = createElement(
        'div', 
        {key : 1, role:'main_html'}, 
        sentence
    );

    render(html);
    let rendered = screen.getByRole('main_html');
    console.log(rendered.outerHTML);
});