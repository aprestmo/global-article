document.addEventListener('change', (event) => {
  if (event.target.matches('#brands')) {
    window.location.href = event.target.value;
  }
});

const brands = document.querySelector('#brands');
brands.addEventListener('change', (event) => {
  console.log(event.target);
  // brands.value.setAttribute('selected', 'true');
});
