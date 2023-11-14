import { screen } from "@testing-library/react";
import { Providers } from "../../../redux/provider";
import InformationForm from "../../forms/InformationForm";
import { renderWithProviders } from "../../../redux/redux-test-utils";
import { Information } from "../../../types/types";

describe("Personal information input fields component", () => {
	it("Should render input fields correctly", () => {
		const initialState: Information = {
			name: "TestName",
			step: 0,
			email: "testMail@.com",
			phoneNumber: "123456789",
			education: [],
			experience: [],
		};
		renderWithProviders(<InformationForm />, {
			state: initialState,
		});

		const nameElement = screen.getByDisplayValue(initialState.name);
		expect(nameElement).toBeInTheDocument();

		const emailElement = screen.getByDisplayValue(initialState.email);
		expect(emailElement).toBeInTheDocument();

		const phoneNumberElement = screen.getByDisplayValue(initialState.phoneNumber);
		expect(phoneNumberElement).toBeInTheDocument();

		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toBeInTheDocument();
	});

	it("Should be able to set information from input fields", () => {
		renderWithProviders(<InformationForm />);
	});
});
