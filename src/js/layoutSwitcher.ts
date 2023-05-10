/* Get URL on load */
const url = new URL(window.location.href);

/* Get defaults, set params and update URL on load */
const defaultTheme = document.querySelector("#theme");
const defaultSize = document.querySelector("#size");
const defaultLayout = document.querySelector("#layout");

url.searchParams.append('theme', defaultTheme.value);
url.searchParams.append('size', defaultSize.value);
url.searchParams.append('layout', defaultLayout.value);
window.history.pushState({}, "", url);

/* Set data-attributes from params on URL on load */
const theme = url.searchParams.get("theme");
const size = url.searchParams.get("size");
const layout = url.searchParams.get("layout");

document.body.setAttribute("data-theme", theme);
document.body.setAttribute("data-size", size);
document.body.setAttribute("data-layout", layout);

const setChecked = function (el: string, attr: string) {
  const options = document.querySelectorAll(el);
  options.forEach((option) => {
    if (option.value === attr) {
      option.setAttribute("selected", "");
    }
  });
};

setChecked("#theme option", theme);
setChecked("#size option", size);
setChecked("#layout option", layout);

/* Update URL and data-attrbutes on select change */
document.addEventListener("change", (event: any) => {
  if (event.target.matches("#theme")) {
    updateURL("theme");
    let theme = url.searchParams.get("theme");
    document.body.setAttribute("data-theme", theme);
  }

  if (event.target.matches("#size")) {
    updateURL("size");
    let size = url.searchParams.get("size");
    document.body.setAttribute("data-size", size);
  }

  if (event.target.matches("#layout")) {
    updateURL("layout");
    let layout = url.searchParams.get("layout");
    document.body.setAttribute("data-layout", layout);
  }
});

/* Function to update URL on select change */
const updateURL = function (key: any) {
  url.searchParams.set(key, event.target.value);
  window.history.pushState({}, "", url);
};
