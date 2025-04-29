document.addEventListener('DOMContentLoaded', function () {
  console.log('Loading screen hidden');
    const loading = document.getElementById('loading');
    setTimeout(() => {
      loading.style.display = 'none';
    }, 1000); // Hide the loader after 1 second
  });