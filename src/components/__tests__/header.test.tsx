import { render, screen } from "@testing-library/react";
import Header from "../header";
import { MENU_OPTIONS } from "../header";

describe("Header component", () => {
  it("Renders component correctly", () => {
    render(<Header />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(MENU_OPTIONS.length);
  });
});
