import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../../header/Header";
import { MENU_OPTIONS } from "../../header/Header";
import { Providers } from "../../../redux/provider";
import { store } from "../../../redux/store";
import { initialState } from "../../../redux/informationSlice";

describe("Header component", () => {
  it("Should render component correctly", () => {
    render(
      <Providers>
        <Header />
      </Providers>
    );

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(MENU_OPTIONS.length);

    for (const option of MENU_OPTIONS) {
      const button = screen.getByText(option);
      expect(button).toBeInTheDocument();
    }
  });

  it("Should dispatch RESET_STATE upon clicking Clear All button", () => {
    render(
      <Providers>
        <Header />
      </Providers>
    );

    const clearAllButton = screen.getByText(MENU_OPTIONS[0]);
    fireEvent.click(clearAllButton);
    const information = store.getState().information;
    expect(information).toEqual(initialState);
  });
});
