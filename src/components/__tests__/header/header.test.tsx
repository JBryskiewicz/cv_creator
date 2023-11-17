import { screen } from "@testing-library/react";
import Header from "../../header/Header";
import { MENU_OPTIONS } from "../../header/Header";
import { renderWithProviders } from "../../../redux/redux-test-utils";

describe("Header component", () => {
	const renderHeader = () => {
		const mockClearAll = jest.fn();
		const mockPrint = jest.fn();

		return {
			mockClearAll,
			mockPrint,
			...renderWithProviders(<Header clearAllCallback={mockClearAll} pdfPrintCallback={mockPrint} />),
		};
	};

	it("Should render component correctly", () => {
		renderHeader();

		const listItems = screen.getAllByRole("listitem");
		expect(listItems.length).toBe(MENU_OPTIONS.length);

		for (const option of MENU_OPTIONS) {
			const button = screen.getByText(option);
			expect(button).toBeInTheDocument();
		}
	});

	it("Buttons should work correctly", () => {
		const { mockClearAll, mockPrint } = renderHeader();

		const clearAllButton = screen.getByText(MENU_OPTIONS[0]);
		clearAllButton.click();
		expect(mockClearAll).toHaveBeenCalled();

		const saveButton = screen.getByText(MENU_OPTIONS[1]);
		saveButton.click();
		expect(mockPrint).toHaveBeenCalled();
	});
});
