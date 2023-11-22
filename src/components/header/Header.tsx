import { AppBar, Button } from "@mui/material";

export const MENU_OPTIONS = ["Clear All", "Print PDF"];

type HeaderProps = {
	clearAllCallback: () => void;
	pdfPrintCallback: () => void;
};

function Header({ clearAllCallback, pdfPrintCallback }: HeaderProps) {
	return (
		<AppBar sx={{ backgroundColor: "transparent", position: "static" }}>
			<ul className="header-menu" aria-labelledby="menu-header">
				<li key={MENU_OPTIONS[0]} className={"header-menu-item"}>
					<Button variant="contained" onClick={clearAllCallback}>
						{MENU_OPTIONS[0]}
					</Button>
				</li>
				<li key={MENU_OPTIONS[1]} className={"header-menu-item not-implemented"}>
					<Button variant="contained" onClick={pdfPrintCallback}>
						{MENU_OPTIONS[1]}
					</Button>
				</li>
			</ul>
		</AppBar>
	);
}

export default Header;
