import { setupTestStore } from "../../../redux/redux-test-utils";
import {
  setStep,
  initialState,
  setName,
  setEmail,
  setPhoneNumber,
  setEducation,
  setExperience,
  RESET_STATE,
} from "../../../redux/informationSlice";

describe("Tests redux store reducers", () => {
  it("sets step", () => {
    const store = setupTestStore({ step: 0 });
    store.dispatch(setStep(5));
    expect(store.getState().information.step).toEqual(5);
  });
});
