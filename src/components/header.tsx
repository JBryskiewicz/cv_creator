export const MENU_OPTIONS = ["Menu option 1", "Menu option 2", "Menu option 3"];

function Header() {
  return (
    <header className="header">
      <ul className="header-menu" aria-labelledby="menu-header">
        {MENU_OPTIONS.map((option) => (
          <li key={option} className="header-menu-item">
            {option}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
