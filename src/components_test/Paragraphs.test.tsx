import { render, screen } from "@testing-library/react";
import { Paragraphs } from "../components/Paragraphs";
import { v4 as uuidv4 } from 'uuid';

test("renders paragraphs", () => {
    
  let para1 = {
      uid:uuidv4(),
        text : "this is first",
        attributes: {
          className: "basic_para",
          role: "text_display"
        } 
    }
    
    let para2 = {
        uid:uuidv4(),
        text : "this is second",
        attributes: {
          className: "basic_para",
          role: "text_display"
        } 
    }
    let texts = [para1, para2];

    let attribute = {
      className: "basic_container"
    };

    let paras = {texts}

    let jsx = <Paragraphs uid={uuidv4()} attributes={attribute} content={texts} /> 
    render(jsx);
    let anchorElements = screen.getAllByRole("text_display");
    expect(anchorElements[0]).toHaveTextContent(para1.text);
    expect(anchorElements[0]).toHaveAttribute("class", para1.attributes.className);

    let doc = document.getElementsByClassName("basic_para");
    expect(doc.length).toBe(2);
    
    for(let i = 0; i < doc.length; i++){
      let para = doc[i];
      let text = texts[i].text;
      expect(para.textContent).toBe(text);  
    }
  });