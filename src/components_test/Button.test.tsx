import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../components/Button";
import {Count} from "../components/Count"
import { useState } from "react";

test("handles onClick", () => {
  const mockClick = jest.fn();
  let attribute = 
  {
    onClick : mockClick
  }

  render(<Button uid="someButtonId" attributes={attribute} content="Add Item" />);
  const buttonElement = screen.getByText("Add Item");
  fireEvent.click(buttonElement);
  expect(mockClick).toHaveBeenCalledTimes(1);
});

test("handles onClick no mock", () => {
    let clicks = 0;
    
    const realClick = () => {
        clicks++;
    };

    let attribute = 
    {
      onClick : realClick
    }
  
    render(<Button uid="someButtonId" attributes={attribute} content="Add Item" />);
    const buttonElement = screen.getByText("Add Item");
    fireEvent.click(buttonElement);
    expect(clicks).toBe(1);
  });