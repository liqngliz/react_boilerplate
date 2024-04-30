import { render, screen } from "@testing-library/react";
import { Title, SubTitle, SubSubTitle, SubSubSubTitle } from "../components/Titles";

test("renders a h1 title with attributes", () => {
  let main = {
      text : "title",
      attributes: {
        role: "contentMainTitle"
      } 
    }
  let attr = {
    className: "test_class"
  }
  render(<Title attributes={attr} content={main} />);
  const divElement = screen.getByRole("contentMainTitle");
  expect(divElement).toHaveTextContent("title");
  expect(divElement).toHaveAttribute("role", "contentMainTitle");
  console.log(divElement.outerHTML);
  expect(divElement.outerHTML).toBe('<h1 role="contentMainTitle">title</h1>');
});

test("renders a h2 title with attributes", () => {
  let main = {
      text : "subtitle",
      attributes: {
        role: "contentSubTitle"
      } 
    }
  let attr = {
    className: "test_class"
  }
  render(<SubTitle attributes={attr} content={main} />);
  const divElement = screen.getByRole("contentSubTitle");
  expect(divElement).toHaveTextContent("subtitle");
  expect(divElement).toHaveAttribute("role", "contentSubTitle");
  expect(divElement.outerHTML).toBe('<h2 role="contentSubTitle">subtitle</h2>');
});

test("renders a h3 title with attributes", () => {
  let main = {
      text : "subsubTitle",
      attributes: {
        role: "contentSubSubTitle"
      } 
    }
  let attr = {
    className: "test_class"
  }
  render(<SubSubTitle attributes={attr} content={main} />);
  const divElement = screen.getByRole("contentSubSubTitle");
  expect(divElement).toHaveTextContent("subsubTitle");
  expect(divElement).toHaveAttribute("role", "contentSubSubTitle");
  expect(divElement.outerHTML).toBe('<h3 role="contentSubSubTitle">subsubTitle</h3>');
});

test("renders a h4 title with attributes", () => {
  let main = {
      text : "subsubsubtitle",
      attributes: {
        role: "contentSubSubSubTitle"
      } 
    }
  let attr = {
    className: "test_class"
  }
  render(<SubSubSubTitle attributes={attr} content={main} />);
  const divElement = screen.getByRole("contentSubSubSubTitle");
  expect(divElement).toHaveTextContent("subsubsubtitle");
  expect(divElement).toHaveAttribute("role", "contentSubSubSubTitle");
  expect(divElement.outerHTML).toBe('<h4 role="contentSubSubSubTitle">subsubsubtitle</h4>');
});

