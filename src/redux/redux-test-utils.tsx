import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import type { RootState, Store } from "./store";
import informationReducer, { initialState } from "./informationSlice";
import { Information } from "../types/types";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
	state?: Partial<Information>;
}

export function renderWithProviders(
	ui: React.ReactElement,
	{ state = undefined, ...renderOptions }: ExtendedRenderOptions = {}
) {
	const information: Information = { ...initialState, ...state };
	const preloadedState: PreloadedState<RootState> = {
		information,
	};

	// Automatically create a store instance if no store was passed in
	const store = configureStore({
		reducer: { information: informationReducer },
		preloadedState,
	});

	function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
		return <Provider store={store}>{children}</Provider>;
	}

	// Return an object with the store and all of RTL's query functions
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export function setupTestStore(initialState: Partial<Information>) {
	return configureStore({
		reducer: { information: informationReducer },
		preloadedState: { information: { ...initialState } as Information },
	});
}
