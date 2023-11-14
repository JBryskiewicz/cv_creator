import { setupTestStore } from "../../../redux/redux-test-utils";
import {
  setStep,
  setName,
  setEmail,
  setPhoneNumber,
  setEducation,
  setExperience,
  RESET_STATE,
  initialState,
} from "../../../redux/informationSlice";
import { Education, Experience, Information } from "../../../types/types";

describe("Tests redux store reducers", () => {
  const educationData: Education = {
    name: "test",
    period: "1 - 2",
    description: "desc",
  };

  const experienceData: Experience = {
    name: "test",
    period: "1 - 2",
    description: "desc",
  };

  const MockState: Information = {
    name: "test",
    step: 2,
    email: "a@b.pl",
    phoneNumber: "123-456-789",
    education: [educationData],
    experience: [experienceData],
  };

  it("sets step", () => {
    const store = setupTestStore({ step: 0 });
    store.dispatch(setStep(5));
    expect(store.getState().information.step).toEqual(5);
  });

  it("sets name", () => {
    const store = setupTestStore({ name: "" });
    store.dispatch(setName("test"));
    expect(store.getState().information.name).toEqual("test");
  });

  it("sets email", () => {
    const store = setupTestStore({ email: "" });
    store.dispatch(setEmail("a@b.pl"));
    expect(store.getState().information.email).toEqual("a@b.pl");
  });

  it("sets phone number", () => {
    const store = setupTestStore({ phoneNumber: "" });
    store.dispatch(setPhoneNumber("123-456-789"));
    expect(store.getState().information.phoneNumber).toEqual("123-456-789");
  });

  it("sets education", () => {
    const store = setupTestStore({ education: [] });

    store.dispatch(setEducation([educationData]));
    expect(store.getState().information.education).toEqual([educationData]);
  });

  it("sets experience", () => {
    const store = setupTestStore({ experience: [] });
    store.dispatch(setExperience([experienceData]));
    expect(store.getState().information.experience).toEqual([experienceData]);
  });

  it("resets state to default", () => {
    const store = setupTestStore({ ...MockState });
    store.dispatch(RESET_STATE());
    expect(store.getState().information).toEqual(initialState);
  });
});
