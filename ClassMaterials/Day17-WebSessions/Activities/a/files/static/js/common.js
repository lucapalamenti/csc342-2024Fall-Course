const darkModeToggle = document.querySelector('.menu input');

// Handle dark mode toggle
darkModeToggle.addEventListener('change', e => {
  if(e.target.checked) {
    document.body.classList.add('dark');
  }
  else {
    document.body.classList.remove('dark');
  }

});
