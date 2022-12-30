function toggleDark() {
	const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");

	lightVal = getCookie("lightMode");
	lightMode = (lightVal != "true");

	if (prefersLightScheme.matches) {
		document.body.classList.toggle("dark-theme");
	} else {
		document.body.classList.toggle("light-theme");
	}

	document.cookie = "lightMode="+lightMode;
}
