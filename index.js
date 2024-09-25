const anchorLinks = document.querySelectorAll('a[href^="#"]');

// Missing to Add event listener to each anchor link and get all anchor links
anchorLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});
