import { useDispatch } from "react-redux";
import { RESET_STATE } from "../../redux/informationSlice";

export const MENU_OPTIONS = ["Clear All", "Save CV", "Load CV"];

function Header() {
  const dispatch = useDispatch();

  const handleButton = (option: string) => {
    switch (option) {
      case MENU_OPTIONS[0]:
        dispatch(RESET_STATE());
        break;
      default:
        break;
    }
  };

  return (
    <header className="header">
      <ul className="header-menu" aria-labelledby="menu-header">
        {MENU_OPTIONS.map((option) => (
          <li key={option} className="header-menu-item">
            <button onClick={() => handleButton(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
