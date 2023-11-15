export const MENU_OPTIONS = ["Clear All", "Save CV", "Load CV"];

type HeaderProps = {
	clearAllCallback: () => void;
	saveCVCallback: () => void;
	loadCVCallback: () => void;
};

function Header({ clearAllCallback, saveCVCallback, loadCVCallback }: HeaderProps) {
	return (
		<header className="header">
			<ul className="header-menu" aria-labelledby="menu-header">
				<li key={MENU_OPTIONS[0]} className={"header-menu-item"}>
					<button onClick={clearAllCallback}>{MENU_OPTIONS[0]}</button>
				</li>
				<li key={MENU_OPTIONS[1]} className={"header-menu-item"}>
					<button onClick={saveCVCallback}>{MENU_OPTIONS[1]}</button>
				</li>
				<li key={MENU_OPTIONS[2]} className={"header-menu-item"}>
					<button onClick={loadCVCallback}>{MENU_OPTIONS[2]}</button>
				</li>
			</ul>
		</header>
	);
}

export default Header;
