frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
	constructor() {
		super()
	}

	fetch_themes() {
		return new Promise((resolve) => {
			this.themes = [
				{
					name: "light",
					label: ("Frappe Light"),
					info: ("Default Light Theme"),
				},
				{
					name: "dark",
					label: "Timeless Night",
					info: "Default Dark Theme",
				},
				{
					name: "modern_ui_theme",
					label: "Modern Desk UI",
					info: "The theme by Anant Pranali"
				},
				{
					name: "modern_ui_blue",
					label: "Modern Blue UI",
					info: "The theme by Anant Pranali"
				},
				{
					name: "automatic",
					label: "Automatic",
					info: "Uses system's theme to switch between light and dark mode",
				}
			];

			resolve(this.themes);
		});
	}
}