import {Count} from "../components/Count"
import {fireEvent, render, screen } from "@testing-library/react";

test("handles onClick", () => {
    render(<Count/>);
    const counter = screen.getByRole("counter");
    const button = screen.getByRole("add");
    fireEvent.click(button);
    fireEvent.click(button);
    expect(counter.textContent).toBe('2');
});