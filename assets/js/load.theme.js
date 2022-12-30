const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");
			
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
	"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : null;
}

lightVal = getCookie("lightMode");
lightMode = false;

if (lightVal !== null) {
	lightMode = (lightVal == "true");
	document.cookie = "debug2="+prefersLightScheme.matches;
	
	if (lightMode && !prefersLightScheme.matches) {
		document.body.classList.toggle("light-theme");
	} else if (!lightMode && prefersLightScheme.matches) {
		document.body.classList.toggle("dark-theme");
	
	}
} else if (prefersLightScheme.matches) {
	lightMode = true;
}

document.cookie = "lightMode="+lightMode;
