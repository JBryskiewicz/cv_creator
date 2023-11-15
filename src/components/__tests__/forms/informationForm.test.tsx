import { fireEvent, screen } from "@testing-library/react";
import InformationForm from "../../forms/InformationForm";
import { renderWithProviders } from "../../../redux/redux-test-utils";

describe("Personal information input fields component", () => {
	const renderInfoForm = () => {
		const nextStep = jest.fn();

		return {
			nextStep,
			...renderWithProviders(<InformationForm nextStep={nextStep} />),
		};
	};

	it("Should render working next step button", () => {
		const { nextStep } = renderInfoForm();

		const buttonElement = screen.getByRole("button", { name: "Next" });
		buttonElement.click();
		expect(nextStep).toHaveBeenCalled();
	});

	it("Should modify store on entering text in input fields", () => {
		const { store } = renderInfoForm();

		const nameInput = screen.getByLabelText("Enter your full name:");
		fireEvent.change(nameInput, { target: { value: "name test" } });
		expect(store.getState().information.name).toEqual("name test");

		const emailInput = screen.getByLabelText("Enter your email:");
		fireEvent.change(emailInput, { target: { value: "email test" } });
		expect(store.getState().information.email).toEqual("email test");

		const numberInput = screen.getByLabelText("Enter your phone number:");
		fireEvent.change(numberInput, { target: { value: "number test" } });
		expect(store.getState().information.phoneNumber).toEqual("number test");
	});
});
