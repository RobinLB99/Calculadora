// Seleccionar la lista desplegable y el cuerpo del documento
const themeSelect = document.getElementById('themes_sel');
const body = document.querySelector("body")

// Agregar un event listener a la lista desplegable
themeSelect.addEventListener('change', function() {
	setTheme(themeSelect.value);
});

// Función para cambiar el tema de la página
function setTheme(theme) {
	if (theme === 'light') {
		body.classList.toggle('light');

	} else if (theme === 'dark') {
		body.classList.toggle("dark");
	} else {
		// Si se selecciona automático, se utiliza el tema predeterminado del usuario
		const defaultTheme = getDefaultTheme();
		setTheme(defaultTheme);
	}
}

// Función para obtener el tema predeterminado del usuario
function getDefaultTheme() {
	// Se utiliza la API de preferencias de color para obtener el tema del usuario
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	} else {
		return 'light';
	}
}

// Al cargar la página, se establece el tema predeterminado del usuario
const defaultTheme = getDefaultTheme();
setTheme(defaultTheme);
