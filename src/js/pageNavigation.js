document.addEventListener('change', (event) => {
  if (event.target.matches('#brands')) {
    window.location.href = event.target.value;
  }
});

const brands = document.querySelector('#brands');
console.log(brands);
brands.addEventListener('change', (event) => {
  console.log(event.target);
  // brands.value.setAttribute('selected', 'true');
});
