import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEducation, setStep } from "../../redux/informationSlice";
import { RootState } from "../../redux/store";

function Education() {
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const dispatch = useDispatch();
  const { education } = useSelector((state: RootState) => state.information);

  const handleNavButtons = (directionForward: boolean) => {
    directionForward ? dispatch(setStep(3)) : dispatch(setStep(1));
  };

  const handleSaveButton = () => {
    dispatch(
      setEducation([
        ...education,
        {
          name: name,
          period: date,
          description: desc,
        },
      ])
    );
    setName("");
    setDate("");
    setDesc("");
  };

  return (
    <div className="section input-forms">
      <div className="input-forms-information">
        <div className="input-sheet">
          <div>
            <label htmlFor="institutionName">Enter institution's name:</label>
            <input
              type="text"
              value={name}
              id="institutionName"
              placeholder="IT Academy in Warsaw"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="date">Enter attending years:</label>
            <input
              type="text"
              value={date}
              id="date"
              placeholder="01.09.2019 - 01.06.2023"
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Enter description:</label>
            <textarea
              value={desc}
              id="description"
              placeholder="General information about your school and education provided"
              onChange={(event) => setDesc(event.target.value)}
            />
          </div>
          <div className="button-box">
            <button onClick={handleSaveButton}>Save</button>
            <button onClick={() => handleNavButtons(false)}>Back</button>
            <button onClick={() => handleNavButtons(true)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
