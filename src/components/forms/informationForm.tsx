import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ChangeEvent } from "react";
import {
  setStep,
  setName,
  setEmail,
  setPhoneNumber,
} from "../../redux/informationSlice";

function Information() {
  const { name, email, phoneNumber } = useSelector(
    (state: RootState) => state.information
  );
  const dispatch = useDispatch();

  const handleInput =
    (identity: string) => (event: ChangeEvent<HTMLInputElement>) => {
      switch (identity) {
        case "name":
          dispatch(setName(event.target.value));
          break;
        case "email":
          dispatch(setEmail(event.target.value));
          break;
        case "phoneNumber":
          dispatch(setPhoneNumber(event.target.value));
          break;
        default:
          break;
      }
    };

  const handleButton = (step: number) => {
    dispatch(setStep(step));
  };

  return (
    <div className="section input-forms">
      <div className="input-forms-information">
        <div className="input-sheet">
          <div>
            <label htmlFor="name">Enter your full name: </label>
            <input
              type="text"
              value={name}
              id="name"
              onChange={handleInput("name")}
            />
          </div>
          <div>
            <label htmlFor="email">Enter your email: </label>
            <input
              type="email"
              value={email}
              id="email"
              onChange={handleInput("email")}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber ">Enter your phone number: </label>
            <input
              type="text"
              value={phoneNumber}
              id="phoneNumber"
              onChange={handleInput("phoneNumber")}
            />
          </div>
          <div className="button-box">
            <button onClick={() => handleButton(2)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
