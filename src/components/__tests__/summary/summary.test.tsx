import { render, screen } from "@testing-library/react";
import Summary from "../../summary/Summary";
import { renderWithProviders } from "../../../redux/redux-test-utils";
import ExpEduSharedComponent from "../../summary/ExpEduSharedComponent";

describe("CV sheet - summary component", () => {
	it("Should render personal information component correctly", () => {
		const mockData = {
			name: "test",
			email: "a@b.pl",
			phoneNumber: "123-456-789",
		};

		renderWithProviders(<Summary />, {
			state: mockData,
		});

		const nameField = screen.getByText(`Name: ${mockData.name}`);
		expect(nameField).toBeInTheDocument();

		const emailField = screen.getByText(`Email: ${mockData.email}`);
		expect(emailField).toBeInTheDocument();

		const numberField = screen.getByText(`Phone: ${mockData.phoneNumber}`);
		expect(numberField).toBeInTheDocument();
	});

	it("Should render Experience & Education shared component for EDUCATION correctly", () => {
		const mockData = {
			education: [
				{
					name: "test",
					period: "1 to 2",
					description: "desc",
				},
			],
		};

		render(<ExpEduSharedComponent dataCollection={mockData.education} />);

		const institutionSummary = screen.getByText(mockData.education[0].name);
		expect(institutionSummary).toBeInTheDocument();
		const periodSummary = screen.getByText(mockData.education[0].period);
		expect(periodSummary).toBeInTheDocument();
		const descriptionSummary = screen.getByText(mockData.education[0].description);
		expect(descriptionSummary).toBeInTheDocument();
	});

	it("Should render Experience & Education shared component for EXPERIENCE correctly", () => {
		const mockData = {
			experince: [
				{
					name: "test",
					period: "1 to 2",
					description: "desc",
				},
			],
		};

		render(<ExpEduSharedComponent dataCollection={mockData.experince} />);

		const institutionSummary = screen.getByText(mockData.experince[0].name);
		expect(institutionSummary).toBeInTheDocument();
		const periodSummary = screen.getByText(mockData.experince[0].period);
		expect(periodSummary).toBeInTheDocument();
		const descriptionSummary = screen.getByText(mockData.experince[0].description);
		expect(descriptionSummary).toBeInTheDocument();
	});
});
