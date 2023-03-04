window.addEventListener("load", () => {
	const selectElement = document.querySelector('#themes_sel');
	const root = document.documentElement;

	const lightColors = (element) => {
		element.style.setProperty('--color0', '#000');
		element.style.setProperty('--color1', '#fff');
		element.style.setProperty('--color2', 'rgb(243, 243, 243)');
		element.style.setProperty('--color3', 'rgb(224, 224, 224)');
		element.style.setProperty('--color4', 'rgb(184, 184, 184)');
		element.style.setProperty('--color5', 'rgb(168, 168, 168)');
		element.style.setProperty('--color6', 'rgb(3, 106, 196)');
		element.style.setProperty('--color7', 'rgb(4, 115, 206)');
		element.style.setProperty('--color8', 'rgb(4, 129, 224)');
	}

	const darkColors = (element) => {
		element.style.setProperty('--color0', '#fff');
		element.style.setProperty('--color1', '#000');
		element.style.setProperty('--color2', 'rgb(59, 59, 59)');
		element.style.setProperty('--color3', 'rgb(51, 51, 51)');
		element.style.setProperty('--color4', 'rgb(43, 43, 43)');
		element.style.setProperty('--color5', 'rgb(32, 32, 32)');
		element.style.setProperty('--color6', 'rgb(3, 106, 196)');
		element.style.setProperty('--color7', 'rgb(4, 115, 206)');
		element.style.setProperty('--color8', 'rgb(4, 129, 224)');
	}

	const readTheme = (theme) => {
		if (theme === 'light') {
			lightColors(root)
		} else if (theme === 'dark') {
			darkColors(root)
		} else if (theme === 'auto') {
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				// El usuario tiene habilitado el tema oscuro en su sistema operativo
				darkColors(root)
			} else {
				// El usuario no tiene habilitado el tema oscuro en su sistema operativo
				lightColors(root)
			}
		}
	}

	readTheme(selectElement.value);

	selectElement.addEventListener("change", (event) => {
		const theme = event.target.value;
		readTheme(theme);
	});
})