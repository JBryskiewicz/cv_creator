import { render, screen } from "@testing-library/react";
import Summary from "../../summary/Summary";
import { Providers } from "../../../redux/provider";

describe("CV sheet (summary) component", () => {
  it("Should render personal information component correctly", () => {
    render(
      <Providers>
        <Summary />
      </Providers>
    );

    const heading = screen.getByText("Personal Information");
    expect(heading).toBeInTheDocument();

    const nameField = screen.getByText("Name:");
    expect(nameField).toBeInTheDocument();

    const emailField = screen.getByText("Email:");
    expect(emailField).toBeInTheDocument();

    const numberField = screen.getByText("Phone:");
    expect(numberField).toBeInTheDocument();
  });
});
