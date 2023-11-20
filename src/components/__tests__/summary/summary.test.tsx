import { screen } from "@testing-library/react";
import Summary from "../../summary/Summary";
import { renderWithProviders } from "../../../redux/redux-test-utils";
import ExpEduSharedComponent from "../../summary/ExpEduSharedComponent";
import ExpEduSharedCard from "../../summary/ExpEduSharedCard";
import { Education } from "../../../types/types";

describe("CV sheet - summary component", () => {
	const renderSummaryCard = (name: string) => {
		const mockEditButton = jest.fn();
		const mockDeleteButton = jest.fn();
		const mockSaveButton = jest.fn();

		const mockCollection: Education = {
			type: "edu",
			name: "testEdu",
			period: "03.21.2023",
			description: "testDesc",
		};

		return {
			mockEditButton,
			mockDeleteButton,
			mockSaveButton,
			...renderWithProviders(
				<ExpEduSharedCard
					data={mockCollection}
					editableName={name}
					editButtonHandler={mockEditButton}
					deleteButtonHandler={mockDeleteButton}
					saveButtonHandler={mockSaveButton}
				/>
			),
		};
	};

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

		renderWithProviders(<ExpEduSharedComponent dataCollection={mockData.education} />);

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

		renderWithProviders(<ExpEduSharedComponent dataCollection={mockData.experince} />);

		const institutionSummary = screen.getByText(mockData.experince[0].name);
		expect(institutionSummary).toBeInTheDocument();
		const periodSummary = screen.getByText(mockData.experince[0].period);
		expect(periodSummary).toBeInTheDocument();
		const descriptionSummary = screen.getByText(mockData.experince[0].description);
		expect(descriptionSummary).toBeInTheDocument();
	});

	it("Should render working edit & delete buttons for summary card", () => {
		const { mockEditButton, mockDeleteButton } = renderSummaryCard("");

		const editButton = screen.getByText("Edit");
		editButton.click();
		expect(mockEditButton).toHaveBeenCalled();

		const deleteButton = screen.getByText("Delete");
		deleteButton.click();
		expect(mockDeleteButton).toHaveBeenCalled();
	});

	it("Should render working ssave button for summary card", () => {
		const { mockSaveButton } = renderSummaryCard("testEdu");

		const saveButton = screen.getByText("Save");
		saveButton.click();
		expect(mockSaveButton).toHaveBeenCalled();
	});
});
