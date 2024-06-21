const searchForm = document.querySelector('.search-container form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = document.querySelector('.search-container input').value;
  window.location.href = `https://www.example.com/search?q=${searchTerm}`;
});
