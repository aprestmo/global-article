document.addEventListener("change", (event) => {
  if (event.target.matches("#brands")) {
    window.location.href = event.target.value;
    console.dir(event.target.setAttribute("checked", true));
  }
});
