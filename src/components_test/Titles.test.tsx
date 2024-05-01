import ReactDOM from 'react-dom/client';
import { act, render, screen } from "@testing-library/react";
import { H1, H2, H3, H4 } from "../components/Titles";
import { v4 as uuidv4 } from 'uuid';

let container:any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test("renders a h1 title with attributes", () => {
  
  let main = {
      uid:uuidv4(),
      attributes: {
        role: "contentMainTitle"
      },
      content : "title"
    }
  let attr = {
    className: "test_class"
  }
  act(() => {
    ReactDOM.createRoot(container).render(<H1 uid={uuidv4()} attributes={attr} content={main} />);
  });

  const divElement = screen.getByRole("contentMainTitle");
  expect(divElement).toHaveTextContent("title");
  expect(divElement).toHaveAttribute("role", "contentMainTitle");
  console.log(divElement.outerHTML);
  expect(divElement.outerHTML).toBe('<h1 role="contentMainTitle">title</h1>');
});

test("renders a h2 title with attributes", () => {
  let main = {
      uid:uuidv4(),
      content : "subtitle",
      attributes: {
        role: "contentSubTitle"
      } 
    }
  let attr = {
    className: "test_class"
  }
  act(() => {
    ReactDOM.createRoot(container).render(<H2 uid={uuidv4()} attributes={attr} content={main} />);
  });
  const divElement = screen.getByRole("contentSubTitle");
  expect(divElement).toHaveTextContent("subtitle");
  expect(divElement).toHaveAttribute("role", "contentSubTitle");
  expect(divElement.outerHTML).toBe('<h2 role="contentSubTitle">subtitle</h2>');
});

test("renders a h3 title with attributes", () => {
  let main = {
    uid:uuidv4(),
    content : "subsubTitle",
      attributes: {
        role: "contentSubSubTitle"
      } 
    }
  let attr = {
    className: "test_class"
  }
  act(() => {
    ReactDOM.createRoot(container).render(<H3 uid={uuidv4()} attributes={attr} content={main} />);
  });
  const divElement = screen.getByRole("contentSubSubTitle");
  expect(divElement).toHaveTextContent("subsubTitle");
  expect(divElement).toHaveAttribute("role", "contentSubSubTitle");
  expect(divElement.outerHTML).toBe('<h3 role="contentSubSubTitle">subsubTitle</h3>');
});

test("renders a h4 title with attributes", () => {
  let main = {
    uid:uuidv4(),
    content : "subsubsubtitle",
      attributes: {
        role: "contentSubSubSubTitle"
      } 
    }
  let attr = {
    className: "test_class"
  }
  act(() => {
    ReactDOM.createRoot(container).render(<H4 uid={uuidv4()} attributes={attr} content={main} />);
  });
  const divElement = screen.getByRole("contentSubSubSubTitle");
  expect(divElement).toHaveTextContent("subsubsubtitle");
  expect(divElement).toHaveAttribute("role", "contentSubSubSubTitle");
  expect(divElement.outerHTML).toBe('<h4 role="contentSubSubSubTitle">subsubsubtitle</h4>');
});

