import {Count} from "../components/Count"
import {fireEvent, render, screen } from "@testing-library/react";

test("handles onClick", () => {
    render(<Count/>);
    const buttonElement = screen.getByRole("counter");
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    expect(buttonElement.textContent).toBe('2');
});