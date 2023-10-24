import { render, screen } from "@testing-library/react";
import { Providers } from "../../../redux/provider";
import InformationForm from "../../forms/InformationForm";

describe("Personal information input fields component", () => {
  it("Should render input fields correctly", () => {
    render(
      <Providers>
        <InformationForm />
      </Providers>
    );

    const nameBoxElement = screen.getByText("Enter your full name:");
    expect(nameBoxElement).toBeInTheDocument();

    const emailBoxElement = screen.getByText("Enter your email:");
    expect(emailBoxElement).toBeInTheDocument();

    const phoneBoxElement = screen.getByText("Enter your phone number:");
    expect(phoneBoxElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  //TODO: Test input change that works with current implementation
  // Error => The given element does not have a value setter
});
