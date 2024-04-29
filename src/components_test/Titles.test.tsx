import { render, screen } from "@testing-library/react";
import { Title } from "../components/Titles";

test("renders a header with attributes", () => {
  let main = {
      text : "Main Title",
      attributes: {
        role: "contentMainTitle"
      } 
    }
  let attr = {
    className: "test_class"
  }
  render(<Title attributes={attr} content={main} />);
  const divElement = screen.getByRole("contentMainTitle");
  expect(divElement).toHaveTextContent("Main Title");
  expect(divElement).toHaveAttribute("role", "contentMainTitle");
});